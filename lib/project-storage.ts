"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultProjects, Project, sortProjects } from "@/lib/projects";

const STORAGE_KEY = "gene-portfolio-projects-v2";
const ADMIN_SESSION_KEY = "gene-portfolio-admin-unlocked-v1";
const REMOVED_PROJECT_IDS = new Set([
  "proj-pamela-physio",
  "proj-paycentral-social",
  "proj-social-house",
  "proj-stretch",
]);
const PROJECT_ORDER_OVERRIDES: Record<string, number> = {
  "proj-waddle": 1,
  "proj-africology": 2,
  "proj-paycentral-portal": 3,
  "proj-kleinkrans": 4,
  "proj-darling-cellars": 5,
  "proj-jeras": 6,
  "proj-brainwashed": 7,
};
const OPTIMIZED_IMAGE_PATHS: Record<string, string> = {
  "/portfolio-assets/africology/cover.png": "/portfolio-assets/africology/cover.jpeg",
  "/portfolio-assets/africology/screen-1.png": "/portfolio-assets/africology/screen-1.jpeg",
  "/portfolio-assets/africology/screen-2.png": "/portfolio-assets/africology/screen-2.jpeg",
  "/portfolio-assets/brainwashed/cover.png": "/portfolio-assets/brainwashed/cover.jpeg",
  "/portfolio-assets/brainwashed/refined-mockup.png":
    "/portfolio-assets/brainwashed/refined-mockup.jpeg",
  "/portfolio-assets/brainwashed/style-tile.png": "/portfolio-assets/brainwashed/style-tile.jpeg",
  "/portfolio-assets/brainwashed/style-tile-2.png":
    "/portfolio-assets/brainwashed/style-tile-2.jpeg",
  "/portfolio-assets/darling-cellars/before-after-mockup.png":
    "/portfolio-assets/darling-cellars/before-after-mockup.jpeg",
  "/portfolio-assets/darling-cellars/cover.png": "/portfolio-assets/darling-cellars/cover.jpeg",
  "/portfolio-assets/darling-cellars/youtube-banner.png":
    "/portfolio-assets/darling-cellars/youtube-banner.jpeg",
  "/portfolio-assets/darling-cellars/youtube-mockup.png":
    "/portfolio-assets/darling-cellars/youtube-mockup.jpeg",
  "/portfolio-assets/jeras/boran-joernaal-ad.png":
    "/portfolio-assets/jeras/boran-joernaal-ad.jpeg",
  "/portfolio-assets/jeras/cover.png": "/portfolio-assets/jeras/cover.jpeg",
  "/portfolio-assets/kleinkrans/artboard-6.png":
    "/portfolio-assets/kleinkrans/artboard-6.jpeg",
  "/portfolio-assets/kleinkrans/artboard-7.png":
    "/portfolio-assets/kleinkrans/artboard-7.jpeg",
  "/portfolio-assets/kleinkrans/artboard-8.png":
    "/portfolio-assets/kleinkrans/artboard-8.jpeg",
  "/portfolio-assets/kleinkrans/artboard-9.png":
    "/portfolio-assets/kleinkrans/artboard-9.jpeg",
  "/portfolio-assets/kleinkrans/cover.png": "/portfolio-assets/kleinkrans/cover.jpeg",
  "/portfolio-assets/kleinkrans/egg-carton-sleeve.png":
    "/portfolio-assets/kleinkrans/egg-carton-sleeve.jpeg",
  "/portfolio-assets/paycentral-portal/cover.png": "/portfolio-assets/paycentral-portal/cover.jpeg",
  "/portfolio-assets/paycentral-portal/full-light-page.png":
    "/portfolio-assets/paycentral-portal/full-light-page.jpeg",
  "/portfolio-assets/paycentral-portal/full-v2-page.png":
    "/portfolio-assets/paycentral-portal/full-v2-page.jpeg",
  "/portfolio-assets/waddle/screen-2.png": "/portfolio-assets/waddle/screen-2.jpeg",
  "/portfolio-assets/waddle/cover.png": "/portfolio-assets/waddle/cover.jpeg",
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function splitList(value: string) {
  return value
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function joinList(value: string[]) {
  return value.join(", ");
}

export function createBlankProject(order: number): Project {
  const now = new Date().toISOString();

  return {
    id: `proj-${crypto.randomUUID()}`,
    title: "Untitled Project",
    slug: `untitled-project-${Date.now()}`,
    client: "",
    category: "UI/UX Design",
    year: new Date().getFullYear().toString(),
    role: "",
    tools: [],
    tags: [],
    shortDescription: "",
    brief: "",
    overview: "",
    challenge: "",
    myRole: "",
    process: "",
    designDecisions: "",
    outcome: "",
    coverImage: "/projects/social-house.svg",
    galleryImages: [],
    featured: false,
    hidden: false,
    status: "draft",
    order,
    createdAt: now,
    updatedAt: now,
  };
}

export function duplicateProject(project: Project): Project {
  const now = new Date().toISOString();
  const title = `${project.title} Copy`;

  return {
    ...project,
    id: `proj-${crypto.randomUUID()}`,
    title,
    slug: `${slugify(title)}-${Date.now()}`,
    status: "draft",
    hidden: true,
    featured: false,
    order: project.order + 1,
    createdAt: now,
    updatedAt: now,
  };
}

function safeDefaultProjects() {
  return defaultProjects
    .filter((project) => !REMOVED_PROJECT_IDS.has(project.id))
    .map((project) => ({
      ...project,
      tools: [...project.tools],
      tags: [...project.tags],
      galleryImages: [...project.galleryImages],
    }));
}

function migrateStoredProjects(projects: Project[]) {
  return projects.filter((project) => !REMOVED_PROJECT_IDS.has(project.id)).map((project) => {
    const normalizedProject = {
      ...project,
      coverImage: OPTIMIZED_IMAGE_PATHS[project.coverImage] ?? project.coverImage,
      tools: Array.isArray(project.tools) ? project.tools : [],
      tags: Array.isArray(project.tags) ? project.tags : [],
      galleryImages: Array.isArray(project.galleryImages)
        ? project.galleryImages.map((image) => OPTIMIZED_IMAGE_PATHS[image] ?? image)
        : [],
      order: PROJECT_ORDER_OVERRIDES[project.id] ?? project.order,
    };

    if (normalizedProject.id !== "proj-paycentral-portal") {
      return normalizedProject;
    }

    const hasFullPageDesigns = normalizedProject.galleryImages.some((image) =>
      image.includes("full-v2-page"),
    );
    const hasUpdatedPortalDesigns = normalizedProject.galleryImages.some((image) =>
      image.includes("/v2-designs/"),
    );
    const defaultPayCentralProject = defaultProjects.find(
      (item) => item.id === "proj-paycentral-portal",
    );

    const hasDeviceMockupGallery = normalizedProject.galleryImages.some(
      (image) =>
        image.includes("/v2-") ||
        image.endsWith("/v1.png") ||
        image.endsWith("/cover.png"),
    );

    if (
      (hasFullPageDesigns && hasUpdatedPortalDesigns && !hasDeviceMockupGallery) ||
      !defaultPayCentralProject
    ) {
      return normalizedProject;
    }

    return {
      ...normalizedProject,
      coverImage: defaultPayCentralProject.coverImage,
      galleryImages: [...defaultPayCentralProject.galleryImages],
    };
  });
}

export function loadProjects() {
  if (typeof window === "undefined") {
    return safeDefaultProjects();
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    const seeded = safeDefaultProjects();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }

  try {
    const parsed = JSON.parse(stored) as Project[];
    const migratedProjects = migrateStoredProjects(parsed);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sortProjects(migratedProjects)));
    return migratedProjects;
  } catch {
    const seeded = safeDefaultProjects();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }
}

export function saveProjects(projects: Project[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sortProjects(projects)));
}

export function isAdminUnlocked() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

export function setAdminUnlocked(value: boolean) {
  if (typeof window === "undefined") {
    return;
  }

  if (value) {
    window.sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
  } else {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(() => safeDefaultProjects());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProjects(loadProjects());
    setLoaded(true);
  }, []);

  const persist = useCallback((nextProjects: Project[]) => {
    const sorted = sortProjects(nextProjects);
    setProjects(sorted);
    saveProjects(sorted);
  }, []);

  const upsertProject = useCallback(
    (project: Project) => {
      const now = new Date().toISOString();
      const updatedProject = {
        ...project,
        slug: project.slug || slugify(project.title),
        updatedAt: now,
      };
      const exists = projects.some((item) => item.id === project.id);
      const nextProjects = exists
        ? projects.map((item) => (item.id === project.id ? updatedProject : item))
        : [...projects, updatedProject];

      persist(nextProjects);
      return updatedProject;
    },
    [persist, projects],
  );

  const deleteProject = useCallback(
    (id: string) => {
      persist(projects.filter((project) => project.id !== id));
    },
    [persist, projects],
  );

  const duplicateExistingProject = useCallback(
    (id: string) => {
      const project = projects.find((item) => item.id === id);

      if (!project) {
        return undefined;
      }

      const duplicate = duplicateProject(project);
      persist([...projects, duplicate]);
      return duplicate;
    },
    [persist, projects],
  );

  const resetProjects = useCallback(() => {
    persist(safeDefaultProjects());
  }, [persist]);

  const maxOrder = useMemo(
    () => projects.reduce((highest, project) => Math.max(highest, project.order), 0),
    [projects],
  );

  return {
    projects,
    loaded,
    maxOrder,
    upsertProject,
    deleteProject,
    duplicateExistingProject,
    resetProjects,
  };
}
