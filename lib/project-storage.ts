"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultProjects, Project, sortProjects } from "@/lib/projects";

const STORAGE_KEY = "gene-portfolio-projects-v2";
const ADMIN_SESSION_KEY = "gene-portfolio-admin-unlocked-v1";
const GROOMED_MIGRATION_KEY = "gene-portfolio-groomed-migration-v1";
const REMOVED_PROJECT_IDS = new Set([
  "proj-pamela-physio",
  "proj-paycentral-social",
  "proj-social-house",
  "proj-stretch",
  "proj-kleinkrans",
]);
const PROJECT_ORDER_OVERRIDES: Record<string, number> = {
  "proj-groomed": 1,
  "proj-paycentral-portal": 2,
  "proj-brainwashed": 3,
  "proj-africology": 4,
  "proj-darling-cellars": 5,
  "proj-jeras": 6,
  "proj-waddle": 7,
};
const DEFAULT_MEDIA_REPLACES: Record<string, string[]> = {
  "proj-darling-cellars": ["/portfolio-assets/darling-cellars/darling-cellars-ad.mp3"],
};
const COVER_IMAGE_REPLACES: Record<string, Record<string, string>> = {
  "proj-darling-cellars": {
    "/portfolio-assets/darling-cellars/cover.png":
      "/portfolio-assets/darling-cellars/darling-cellars-thumbnail.png",
    "/portfolio-assets/darling-cellars/cover.jpeg":
      "/portfolio-assets/darling-cellars/darling-cellars-thumbnail.png",
    "/portfolio-assets/darling-cellars/cover.webp":
      "/portfolio-assets/darling-cellars/darling-cellars-thumbnail.png",
  },
  "proj-waddle": {
    "/portfolio-assets/waddle/cover.png": "/portfolio-assets/waddle/waddle-laptop.png",
    "/portfolio-assets/waddle/cover.jpeg": "/portfolio-assets/waddle/waddle-laptop.png",
    "/portfolio-assets/waddle/cover.webp": "/portfolio-assets/waddle/waddle-laptop.png",
  },
};
const OPTIMIZED_IMAGE_PATHS: Record<string, string> = {
  "/portfolio-assets/africology/cover.png": "/portfolio-assets/africology/cover.webp",
  "/portfolio-assets/africology/cover.jpeg": "/portfolio-assets/africology/cover.webp",
  "/portfolio-assets/africology/screen-1.png": "/portfolio-assets/africology/screen-1.webp",
  "/portfolio-assets/africology/screen-1.jpeg": "/portfolio-assets/africology/screen-1.webp",
  "/portfolio-assets/africology/screen-2.png": "/portfolio-assets/africology/screen-2.webp",
  "/portfolio-assets/africology/screen-2.jpeg": "/portfolio-assets/africology/screen-2.webp",
  "/portfolio-assets/brainwashed/cover.png": "/portfolio-assets/brainwashed/cover.webp",
  "/portfolio-assets/brainwashed/cover.jpeg": "/portfolio-assets/brainwashed/cover.webp",
  "/portfolio-assets/brainwashed/refined-mockup.png":
    "/portfolio-assets/brainwashed/refined-mockup.webp",
  "/portfolio-assets/brainwashed/refined-mockup.jpeg":
    "/portfolio-assets/brainwashed/refined-mockup.webp",
  "/portfolio-assets/brainwashed/style-tile.png": "/portfolio-assets/brainwashed/style-tile-2.webp",
  "/portfolio-assets/brainwashed/style-tile.jpeg": "/portfolio-assets/brainwashed/style-tile-2.webp",
  "/portfolio-assets/brainwashed/style-tile-2.png":
    "/portfolio-assets/brainwashed/style-tile-2.webp",
  "/portfolio-assets/brainwashed/style-tile-2.jpeg":
    "/portfolio-assets/brainwashed/style-tile-2.webp",
  "/portfolio-assets/darling-cellars/before-after-mockup.png":
    "/portfolio-assets/darling-cellars/before-after-mockup.webp",
  "/portfolio-assets/darling-cellars/before-after-mockup.jpeg":
    "/portfolio-assets/darling-cellars/before-after-mockup.webp",
  "/portfolio-assets/darling-cellars/cover.png": "/portfolio-assets/darling-cellars/cover.webp",
  "/portfolio-assets/darling-cellars/cover.jpeg": "/portfolio-assets/darling-cellars/cover.webp",
  "/portfolio-assets/darling-cellars/phone-mockup.jpg":
    "/portfolio-assets/darling-cellars/phone-mockup.webp",
  "/portfolio-assets/darling-cellars/youtube-banner.png":
    "/portfolio-assets/darling-cellars/youtube-banner.webp",
  "/portfolio-assets/darling-cellars/youtube-banner.jpeg":
    "/portfolio-assets/darling-cellars/youtube-banner.webp",
  "/portfolio-assets/darling-cellars/youtube-mockup.png":
    "/portfolio-assets/darling-cellars/youtube-mockup.webp",
  "/portfolio-assets/darling-cellars/youtube-mockup.jpeg":
    "/portfolio-assets/darling-cellars/youtube-mockup.webp",
  "/portfolio-assets/jeras/boran-joernaal-ad.png":
    "/portfolio-assets/jeras/boran-joernaal-ad.jpeg",
  "/portfolio-assets/jeras/cover.png": "/portfolio-assets/jeras/cover.webp",
  "/portfolio-assets/jeras/cover.jpeg": "/portfolio-assets/jeras/cover.webp",
  "/portfolio-assets/kleinkrans/artboard-6.png":
    "/portfolio-assets/kleinkrans/artboard-6.webp",
  "/portfolio-assets/kleinkrans/artboard-6.jpeg":
    "/portfolio-assets/kleinkrans/artboard-6.webp",
  "/portfolio-assets/kleinkrans/artboard-7.png":
    "/portfolio-assets/kleinkrans/artboard-7.webp",
  "/portfolio-assets/kleinkrans/artboard-7.jpeg":
    "/portfolio-assets/kleinkrans/artboard-7.webp",
  "/portfolio-assets/kleinkrans/artboard-8.png":
    "/portfolio-assets/kleinkrans/artboard-8.webp",
  "/portfolio-assets/kleinkrans/artboard-8.jpeg":
    "/portfolio-assets/kleinkrans/artboard-8.webp",
  "/portfolio-assets/kleinkrans/artboard-9.png":
    "/portfolio-assets/kleinkrans/artboard-9.webp",
  "/portfolio-assets/kleinkrans/artboard-9.jpeg":
    "/portfolio-assets/kleinkrans/artboard-9.webp",
  "/portfolio-assets/kleinkrans/cover.png": "/portfolio-assets/kleinkrans/cover.webp",
  "/portfolio-assets/kleinkrans/cover.jpeg": "/portfolio-assets/kleinkrans/cover.webp",
  "/portfolio-assets/kleinkrans/egg-carton-sleeve.png":
    "/portfolio-assets/kleinkrans/egg-carton-sleeve.jpeg",
  "/portfolio-assets/paycentral-portal/cover.png": "/portfolio-assets/paycentral-portal/cover.webp",
  "/portfolio-assets/paycentral-portal/cover.jpeg": "/portfolio-assets/paycentral-portal/cover.webp",
  "/portfolio-assets/paycentral-portal/full-light-page.png":
    "/portfolio-assets/paycentral-portal/v1-designs/1.webp",
  "/portfolio-assets/paycentral-portal/full-light-page.jpeg":
    "/portfolio-assets/paycentral-portal/v1-designs/1.webp",
  "/portfolio-assets/paycentral-portal/full-v2-page.png":
    "/portfolio-assets/paycentral-portal/v2-designs/1.webp",
  "/portfolio-assets/paycentral-portal/full-v2-page.jpeg":
    "/portfolio-assets/paycentral-portal/v2-designs/1.webp",
  "/portfolio-assets/paycentral-portal/v1-designs/1.png":
    "/portfolio-assets/paycentral-portal/v1-designs/1.webp",
  "/portfolio-assets/paycentral-portal/v1-designs/2.png":
    "/portfolio-assets/paycentral-portal/v1-designs/2.webp",
  "/portfolio-assets/paycentral-portal/v1-designs/3.png":
    "/portfolio-assets/paycentral-portal/v1-designs/3.webp",
  "/portfolio-assets/paycentral-portal/v1-designs/4.png":
    "/portfolio-assets/paycentral-portal/v1-designs/4.webp",
  "/portfolio-assets/paycentral-portal/v1-designs/5.png":
    "/portfolio-assets/paycentral-portal/v1-designs/4.webp",
  "/portfolio-assets/paycentral-portal/v2-designs/1.png":
    "/portfolio-assets/paycentral-portal/v2-designs/1.webp",
  "/portfolio-assets/paycentral-portal/v2-designs/2.png":
    "/portfolio-assets/paycentral-portal/v2-designs/2.webp",
  "/portfolio-assets/paycentral-portal/v2-designs/3.png":
    "/portfolio-assets/paycentral-portal/v2-designs/3.webp",
  "/portfolio-assets/paycentral-portal/v2-designs/4.png":
    "/portfolio-assets/paycentral-portal/v2-designs/4.webp",
  "/portfolio-assets/paycentral-portal/v2-designs/5.png":
    "/portfolio-assets/paycentral-portal/v2-designs/5.webp",
  "/portfolio-assets/paycentral-portal/v2-designs/6.png":
    "/portfolio-assets/paycentral-portal/v2-designs/6.webp",
  "/portfolio-assets/waddle/screen-2.png": "/portfolio-assets/waddle/screen-2.webp",
  "/portfolio-assets/waddle/screen-2.jpeg": "/portfolio-assets/waddle/screen-2.webp",
  "/portfolio-assets/waddle/cover.png": "/portfolio-assets/waddle/cover.webp",
  "/portfolio-assets/waddle/cover.jpeg": "/portfolio-assets/waddle/cover.webp",
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
      processImages: project.processImages ? [...project.processImages] : undefined,
      media: project.media?.map((item) => ({ ...item })),
    }));
}

function migrateStoredProjects(projects: Project[], shouldAddGroomedDefault = false) {
  const migratedProjects = projects
    .filter((project) => !REMOVED_PROJECT_IDS.has(project.id))
    .map((project) => {
      const defaultProject = defaultProjects.find((item) => item.id === project.id);
      const defaultMedia = defaultProject?.media ?? [];
      const replacedMediaPaths = new Set(DEFAULT_MEDIA_REPLACES[project.id] ?? []);
      const storedMedia = Array.isArray(project.media) ? project.media : [];
      const media = [
        ...defaultMedia,
        ...storedMedia.filter(
          (item) =>
            !replacedMediaPaths.has(item.src) &&
            !defaultMedia.some((defaultItem) => defaultItem.src === item.src),
        ),
      ];
      const normalizedProject = {
        ...project,
        coverImage:
          COVER_IMAGE_REPLACES[project.id]?.[project.coverImage] ??
          OPTIMIZED_IMAGE_PATHS[project.coverImage] ??
          project.coverImage,
        tools: Array.isArray(project.tools) ? project.tools : [],
        tags: Array.isArray(project.tags) ? project.tags : [],
        galleryImages: Array.isArray(project.galleryImages)
          ? Array.from(
              new Set(project.galleryImages.map((image) => OPTIMIZED_IMAGE_PATHS[image] ?? image)),
            )
          : [],
        processImages: Array.isArray(project.processImages)
          ? Array.from(
              new Set(project.processImages.map((image) => OPTIMIZED_IMAGE_PATHS[image] ?? image)),
            )
          : defaultProject?.processImages
            ? [...defaultProject.processImages]
            : undefined,
        media: media.length > 0 ? media.map((item) => ({ ...item })) : undefined,
        order: PROJECT_ORDER_OVERRIDES[project.id] ?? project.order,
      };

    if (normalizedProject.id === "proj-brainwashed" && defaultProject) {
      const hasBrainwashedProcess = defaultProject.processImages?.every((image) =>
        normalizedProject.processImages?.includes(image),
      );
      const hasDuplicateStyleTile = normalizedProject.galleryImages.some(
        (image) => image === "/portfolio-assets/brainwashed/style-tile.webp",
      );
      const hasCurrentDeliverables = defaultProject.galleryImages.every((image) =>
        normalizedProject.galleryImages.includes(image),
      );

      if (!hasBrainwashedProcess || hasDuplicateStyleTile || !hasCurrentDeliverables) {
        return {
          ...normalizedProject,
          coverImage: defaultProject.coverImage,
          galleryImages: [...defaultProject.galleryImages],
          processImages: defaultProject.processImages
            ? [...defaultProject.processImages]
            : undefined,
        };
      }
    }

    if (normalizedProject.id === "proj-waddle" && defaultProject) {
      const hasMagazineGallery = normalizedProject.galleryImages.some((image) =>
        image.includes("/portfolio-assets/waddle/magazine/"),
      );
      const hasLegacyWaddleImages = normalizedProject.galleryImages.some(
        (image) =>
          image.includes("/portfolio-assets/waddle/cover.webp") ||
          image.includes("/portfolio-assets/waddle/screen-2.webp"),
      );

      if (!hasMagazineGallery || hasLegacyWaddleImages) {
        return {
          ...normalizedProject,
          coverImage: defaultProject.coverImage,
          galleryImages: [...defaultProject.galleryImages],
          processImages: defaultProject.processImages
            ? [...defaultProject.processImages]
            : undefined,
        };
      }
    }

    if (normalizedProject.id === "proj-africology" && defaultProject) {
      const hasUpdatedAfricologyFinals = normalizedProject.galleryImages.some((image) =>
        image.includes("/portfolio-assets/africology/final/"),
      );
      const hasUpdatedAfricologyProcess = normalizedProject.processImages?.some((image) =>
        image.includes("/portfolio-assets/africology/process/"),
      );
      const hasLegacyAfricologyImages = normalizedProject.galleryImages.some(
        (image) =>
          image.includes("/portfolio-assets/africology/cover.webp") ||
          image.includes("/portfolio-assets/africology/screen-1.webp") ||
          image.includes("/portfolio-assets/africology/screen-2.webp"),
      );

      if (!hasUpdatedAfricologyFinals || !hasUpdatedAfricologyProcess || hasLegacyAfricologyImages) {
        return {
          ...normalizedProject,
          coverImage: defaultProject.coverImage,
          galleryImages: [...defaultProject.galleryImages],
          processImages: defaultProject.processImages
            ? [...defaultProject.processImages]
            : undefined,
        };
      }
    }

    if (normalizedProject.id === "proj-jeras" && defaultProject?.processImages) {
      return {
        ...normalizedProject,
        processImages: Array.from(
          new Set([...(normalizedProject.processImages ?? []), ...defaultProject.processImages]),
        ),
      };
    }

    if (normalizedProject.id !== "proj-paycentral-portal") {
      return normalizedProject;
    }

    const defaultPayCentralProject = defaultProjects.find(
      (item) => item.id === "proj-paycentral-portal",
    );

    const hasPayCentralMockups = normalizedProject.galleryImages.some((image) =>
      image.includes("/portfolio-assets/paycentral-portal/mockups/"),
    );
    const heroPlatformCount = normalizedProject.galleryImages.filter(
      (image) => image === "/portfolio-assets/paycentral-portal/mockups/hero-platform.png",
    ).length;
    const hasLegacyPayCentralImages = normalizedProject.galleryImages.some(
      (image) =>
        image.includes("/portfolio-assets/paycentral-portal/v1-designs/") ||
        image.includes("/portfolio-assets/paycentral-portal/v2-designs/") ||
        image.includes("full-v1-page") ||
        image.includes("full-v2-page"),
    );

    if (!defaultPayCentralProject) {
      return normalizedProject;
    }

    if (hasPayCentralMockups && !hasLegacyPayCentralImages && heroPlatformCount === 1) {
      return normalizedProject;
    }

      return {
        ...normalizedProject,
        coverImage: defaultPayCentralProject.coverImage,
        galleryImages: [...defaultPayCentralProject.galleryImages],
        processImages: defaultPayCentralProject.processImages
          ? [...defaultPayCentralProject.processImages]
          : undefined,
      };
    });

  const migratedProjectIds = new Set(migratedProjects.map((project) => project.id));
  const missingDefaultProjects = shouldAddGroomedDefault
    ? safeDefaultProjects().filter(
        (project) => project.id === "proj-groomed" && !migratedProjectIds.has(project.id),
      )
    : [];

  return [...migratedProjects, ...missingDefaultProjects];
}

export function loadProjects() {
  if (typeof window === "undefined") {
    return safeDefaultProjects();
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    const seeded = safeDefaultProjects();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    window.localStorage.setItem(GROOMED_MIGRATION_KEY, "true");
    return seeded;
  }

  try {
    const parsed = JSON.parse(stored) as Project[];
    const shouldAddGroomedDefault = window.localStorage.getItem(GROOMED_MIGRATION_KEY) !== "true";
    const migratedProjects = migrateStoredProjects(parsed, shouldAddGroomedDefault);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sortProjects(migratedProjects)));
    window.localStorage.setItem(GROOMED_MIGRATION_KEY, "true");
    return migratedProjects;
  } catch {
    const seeded = safeDefaultProjects();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    window.localStorage.setItem(GROOMED_MIGRATION_KEY, "true");
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
