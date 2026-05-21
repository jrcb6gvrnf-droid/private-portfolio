"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Copy,
  Eye,
  EyeOff,
  FilePenLine,
  Grid2X2,
  ImagePlus,
  Lock,
  LogOut,
  Plus,
  Save,
  Star,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AdminPreviewPage } from "@/components/public-components";
import { Project } from "@/lib/projects";
import {
  createBlankProject,
  isAdminUnlocked,
  joinList,
  setAdminUnlocked,
  slugify,
  splitList,
  useProjects,
} from "@/lib/project-storage";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUnlocked(isAdminUnlocked());
    setReady(true);
  }, []);

  if (!ready) {
    return <div className="admin-loading">Loading studio...</div>;
  }

  if (!unlocked) {
    return <AdminPasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div>
          <Link className="admin-logo" href="/admin/projects">
            Creative Studio
            <span>ADMIN V1.0</span>
          </Link>
          <nav className="admin-nav" aria-label="Admin navigation">
            <Link className="is-active" href="/admin/projects">
              <Grid2X2 size={20} /> Projects
            </Link>
            <Link href="/admin/projects/new">
              <ImagePlus size={20} /> New Project
            </Link>
          </nav>
        </div>
        <div className="admin-sidebar__bottom">
          <Link className="admin-new-project" href="/admin/projects/new">
            <Plus size={20} /> New Project
          </Link>
          <button
            type="button"
            onClick={() => {
              setAdminUnlocked(false);
              setUnlocked(false);
            }}
          >
            <LogOut size={20} /> Log Out
          </button>
        </div>
      </aside>
      <div className="admin-content">{children}</div>
    </div>
  );
}

function AdminPasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <main className="admin-gate">
      <form
        className="admin-gate__card"
        onSubmit={async (event) => {
          event.preventDefault();
          setError("");
          setIsSubmitting(true);

          try {
            const response = await fetch("/api/admin-auth", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ password }),
            });

            const result = (await response.json()) as { ok?: boolean; error?: string };

            if (!response.ok || !result.ok) {
              setError(result.error || "That password does not match the Version 1 admin gate.");
              return;
            }

            setAdminUnlocked(true);
            onUnlock();
          } catch {
            setError("The admin gate could not be checked. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <span className="gate-icon">
          <Lock size={28} />
        </span>
        <p>PRIVATE STUDIO</p>
        <h1>Admin Access</h1>
        <label htmlFor="admin-password">Password</label>
        <input
          id="admin-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          autoFocus
        />
        {error ? <span className="form-error">{error}</span> : null}
        <button className="button button--primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Checking..." : "Unlock Admin"}
        </button>
        <small>Admin access is controlled by the server environment variable.</small>
      </form>
    </main>
  );
}

export function AdminProjectsPage() {
  const router = useRouter();
  const { projects, deleteProject, duplicateExistingProject, resetProjects } = useProjects();
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

  return (
    <main className="admin-main">
      <div className="admin-heading-row">
        <div>
          <span className="admin-eyebrow">Admin / Projects</span>
          <h1>PROJECT MANAGER</h1>
        </div>
        <Link className="admin-primary-action" href="/admin/projects/new">
          <Plus size={18} /> Add New Project
        </Link>
      </div>

      <div className="admin-toolbar">
        <span>All projects live in browser storage for Version 1.</span>
        <button type="button" onClick={resetProjects}>
          Reset sample data
        </button>
      </div>

      <section className="admin-project-grid">
        {projects.map((project) => (
          <article className="admin-project-card" key={project.id}>
            <div className="admin-thumb">
              <img src={project.coverImage} alt="" />
              {project.featured ? (
                <span className="admin-star">
                  <Star size={14} fill="currentColor" />
                </span>
              ) : null}
            </div>
            <div className="admin-project-card__body">
              <div className="admin-project-card__topline">
                <span>{project.category}</span>
                <StatusBadge project={project} />
              </div>
              <h2>{project.title}</h2>
              <p>{project.year}</p>
              <div className="admin-card-meta">
                <span>Updated {formatDate(project.updatedAt)}</span>
                {project.featured ? <b>Featured</b> : null}
              </div>
              <div className="admin-card-actions">
                <Link href={`/admin/projects/${project.id}/edit`}>
                  <FilePenLine size={16} /> Edit
                </Link>
                <Link href={`/admin/projects/${project.id}/preview`}>
                  <Eye size={16} /> Preview
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    const duplicate = duplicateExistingProject(project.id);
                    if (duplicate) {
                      router.push(`/admin/projects/${duplicate.id}/edit`);
                    }
                  }}
                >
                  <Copy size={16} /> Duplicate
                </button>
                <button type="button" onClick={() => setProjectToDelete(project)}>
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <DeleteConfirmModal
        open={Boolean(projectToDelete)}
        projectTitle={projectToDelete?.title}
        onCancel={() => setProjectToDelete(null)}
        onConfirm={() => {
          if (projectToDelete) {
            deleteProject(projectToDelete.id);
          }
          setProjectToDelete(null);
        }}
      />
    </main>
  );
}

function StatusBadge({ project }: { project: Project }) {
  const label = project.hidden ? "Hidden" : project.status === "published" ? "Published" : "Draft";

  return <span className={`status-badge status-badge--${label.toLowerCase()}`}>{label}</span>;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function ProjectEditorPage({ projectId }: { projectId?: string }) {
  const router = useRouter();
  const { projects, loaded, maxOrder, upsertProject, deleteProject } = useProjects();
  const [draft, setDraft] = useState<Project | null>(null);
  const [toolsText, setToolsText] = useState("");
  const [tagsText, setTagsText] = useState("");
  const [galleryText, setGalleryText] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const isNew = !projectId;

  useEffect(() => {
    if (!loaded || draft) {
      return;
    }

    const sourceProject = projectId
      ? projects.find((project) => project.id === projectId)
      : createBlankProject(maxOrder + 1);

    if (!sourceProject) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDraft(sourceProject);
    setToolsText(joinList(sourceProject.tools));
    setTagsText(joinList(sourceProject.tags));
    setGalleryText(sourceProject.galleryImages.join("\n"));
  }, [draft, loaded, maxOrder, projectId, projects]);

  const title = isNew ? "ADD PROJECT" : "EDIT PROJECT";

  if (!draft) {
    return (
      <main className="admin-main">
        <div className="empty-state">
          <span>PROJECT MANAGEMENT</span>
          <h1>{loaded ? "Project not found" : "Loading project..."}</h1>
          <p>
            {loaded
              ? "This project may have been deleted from local browser storage."
              : "Preparing the local project editor."}
          </p>
          {loaded ? (
            <Link className="button button--primary" href="/admin/projects">
              Back to Projects
            </Link>
          ) : null}
        </div>
      </main>
    );
  }

  function updateDraft<Key extends keyof Project>(key: Key, value: Project[Key]) {
    setDraft((current) => (current ? { ...current, [key]: value } : current));
  }

  function buildProject(nextStatus?: Project["status"]) {
    if (!draft) {
      return undefined;
    }

    return {
      ...draft,
      title: draft.title.trim() || "Untitled Project",
      slug: slugify(draft.slug || draft.title || "untitled-project"),
      tools: splitList(toolsText),
      tags: splitList(tagsText),
      galleryImages: splitList(galleryText),
      order: Number(draft.order) || 0,
      status: nextStatus || draft.status,
    };
  }

  function saveProject(nextStatus?: Project["status"]) {
    const project = buildProject(nextStatus);

    if (!project) {
      return undefined;
    }

    const savedProject = upsertProject(project);
    setDraft(savedProject);
    setNotice(
      savedProject.status === "published"
        ? "Project published in local browser storage."
        : "Project saved as draft in local browser storage.",
    );

    if (isNew) {
      router.replace(`/admin/projects/${savedProject.id}/edit`);
    }

    return savedProject;
  }

  function previewProject() {
    if (!draft) {
      return;
    }

    const savedProject = saveProject(draft.status);

    if (savedProject) {
      router.push(`/admin/projects/${savedProject.id}/preview`);
    }
  }

  return (
    <main className="admin-main admin-editor">
      <div className="admin-heading-row">
        <div>
          <span className="admin-eyebrow">Project Management</span>
          <h1>{title}</h1>
        </div>
        <div className="editor-toggles">
          <TogglePill
            active={draft.featured}
            label="Featured"
            onClick={() => updateDraft("featured", !draft.featured)}
          />
          <TogglePill
            active={draft.hidden}
            icon={draft.hidden ? <EyeOff size={16} /> : undefined}
            label="Hidden"
            onClick={() => updateDraft("hidden", !draft.hidden)}
          />
        </div>
      </div>

      {notice ? <div className="admin-notice">{notice}</div> : null}

      <form
        className="editor-layout"
        onSubmit={(event) => {
          event.preventDefault();
          saveProject(draft.status);
        }}
      >
        <div className="editor-main-column">
          <section className="admin-panel">
            <PanelTitle>Core Metadata</PanelTitle>
            <div className="form-grid form-grid--two">
              <TextField
                label="Project title"
                value={draft.title}
                placeholder="e.g. Kinetic Identity Systems"
                onChange={(value) => updateDraft("title", value)}
              />
              <TextField
                label="Slug"
                value={draft.slug}
                placeholder="kinetic-identity-systems"
                onChange={(value) => updateDraft("slug", value)}
                action={
                  <button
                    type="button"
                    onClick={() => updateDraft("slug", slugify(draft.title))}
                  >
                    Generate
                  </button>
                }
              />
              <TextField
                label="Client / brand"
                value={draft.client}
                placeholder="Brand Name"
                onChange={(value) => updateDraft("client", value)}
              />
              <TextField
                label="Category"
                value={draft.category}
                placeholder="Brand Identity"
                onChange={(value) => updateDraft("category", value)}
              />
            </div>
          </section>

          <section className="admin-panel">
            <PanelTitle>Project Specs</PanelTitle>
            <div className="form-grid form-grid--three">
              <TextField
                label="Year"
                value={draft.year}
                placeholder="2026"
                onChange={(value) => updateDraft("year", value)}
              />
              <TextField
                label="Role"
                value={draft.role}
                placeholder="Creative Director"
                onChange={(value) => updateDraft("role", value)}
              />
              <TextField
                label="Order"
                type="number"
                value={draft.order.toString()}
                onChange={(value) => updateDraft("order", Number(value))}
              />
            </div>
            <div className="form-grid form-grid--two">
              <TextareaField
                label="Tools"
                value={toolsText}
                placeholder="Figma, Illustrator, Squarespace"
                onChange={setToolsText}
              />
              <TextareaField
                label="Tags"
                value={tagsText}
                placeholder="Branding, Interactive, Editorial"
                onChange={setTagsText}
              />
            </div>
            <TextField
              label="Short description"
              value={draft.shortDescription}
              placeholder="A digital companion for the modern planner."
              onChange={(value) => updateDraft("shortDescription", value)}
            />
          </section>

          <section className="admin-panel admin-panel--dashed">
            <PanelTitle>The Messy Brief</PanelTitle>
            <TextareaField
              label="Brief"
              rows={5}
              value={draft.brief}
              placeholder="Paste notes, rough context or the client brief here."
              onChange={(value) => updateDraft("brief", value)}
            />
          </section>

          <section className="admin-panel admin-panel--dark">
            <div className="case-editor-heading">
              <div>
                <h2>Case Study Editor</h2>
                <p>Write the project story in clear editorial blocks.</p>
              </div>
            </div>
            <TextareaField
              label="Overview"
              rows={4}
              value={draft.overview}
              onChange={(value) => updateDraft("overview", value)}
            />
            <TextareaField
              label="Challenge"
              rows={4}
              value={draft.challenge}
              onChange={(value) => updateDraft("challenge", value)}
            />
            <TextareaField
              label="My role"
              rows={4}
              value={draft.myRole}
              onChange={(value) => updateDraft("myRole", value)}
            />
            <TextareaField
              label="Process"
              rows={4}
              value={draft.process}
              onChange={(value) => updateDraft("process", value)}
            />
            <TextareaField
              label="Design decisions"
              rows={4}
              value={draft.designDecisions}
              onChange={(value) => updateDraft("designDecisions", value)}
            />
            <TextareaField
              label="Outcome"
              rows={4}
              value={draft.outcome}
              onChange={(value) => updateDraft("outcome", value)}
            />
          </section>
        </div>

        <aside className="editor-side-column">
          <section className="admin-panel side-panel">
            <PanelTitle>Cover Image</PanelTitle>
            <div className="cover-preview">
              <img src={draft.coverImage} alt="" />
            </div>
            <TextField
              label="Cover image path"
              value={draft.coverImage}
              placeholder="/projects/example.svg"
              onChange={(value) => updateDraft("coverImage", value)}
            />
            <small>Recommended: 1920x1080px landscape. Local paths work for now.</small>
          </section>

          <section className="admin-panel side-panel">
            <PanelTitle>Gallery</PanelTitle>
            <div className="gallery-preview">
              {splitList(galleryText)
                .slice(0, 4)
                .map((image, index) => (
                  <img src={image} alt="" key={`${image}-${index}`} />
                ))}
              <span className="gallery-drop">Drop images</span>
            </div>
            <TextareaField
              label="Gallery image paths"
              rows={6}
              value={galleryText}
              placeholder={"/projects/image-one.svg\n/projects/image-two.svg"}
              onChange={setGalleryText}
            />
          </section>

          <section className="admin-panel side-panel">
            <PanelTitle>Status & Visibility</PanelTitle>
            <div className="status-control">
              <button
                className={draft.status === "published" ? "is-active" : ""}
                type="button"
                onClick={() => updateDraft("status", "published")}
              >
                Published
              </button>
              <button
                className={draft.status === "draft" ? "is-active" : ""}
                type="button"
                onClick={() => updateDraft("status", "draft")}
              >
                Draft
              </button>
            </div>
            <label className="check-row">
              <input
                type="checkbox"
                checked={draft.hidden}
                onChange={(event) => updateDraft("hidden", event.target.checked)}
              />
              Hidden/private project
            </label>
            <label className="check-row">
              <input
                type="checkbox"
                checked={draft.featured}
                onChange={(event) => updateDraft("featured", event.target.checked)}
              />
              Featured project
            </label>
          </section>
        </aside>

        <div className="editor-action-bar">
          {!isNew ? (
            <button className="danger-link" type="button" onClick={() => setDeleteOpen(true)}>
              <Trash2 size={16} /> Delete Project
            </button>
          ) : (
            <span />
          )}
          <div>
            <button className="button button--secondary" type="button" onClick={() => saveProject("draft")}>
              <Save size={16} /> Save Draft
            </button>
            <button className="button button--dark" type="button" onClick={previewProject}>
              <Eye size={16} /> Preview
            </button>
            {draft.status === "published" ? (
              <button className="button button--primary" type="button" onClick={() => saveProject("draft")}>
                Unpublish Project
              </button>
            ) : (
              <button className="button button--primary" type="button" onClick={() => saveProject("published")}>
                Publish Project
              </button>
            )}
          </div>
        </div>
      </form>

      <DeleteConfirmModal
        open={deleteOpen}
        projectTitle={draft.title}
        onCancel={() => setDeleteOpen(false)}
        onConfirm={() => {
          deleteProject(draft.id);
          router.push("/admin/projects");
        }}
      />
    </main>
  );
}

function PanelTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="panel-title">{children}</h2>;
}

function TogglePill({
  active,
  label,
  icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button className={`toggle-pill ${active ? "is-active" : ""}`} type="button" onClick={onClick}>
      {icon}
      {label}
      <span>{active ? "✓" : ""}</span>
    </button>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  action,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  action?: React.ReactNode;
}) {
  return (
    <label className="field">
      <span>
        {label}
        {action}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function DeleteConfirmModal({
  open,
  projectTitle,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  projectTitle?: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!open) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <div className="delete-modal" role="dialog" aria-modal="true" aria-labelledby="delete-title">
        <span className="delete-icon">
          <Trash2 size={28} />
        </span>
        <h2 id="delete-title">WAIT! ARE YOU SURE?</h2>
        <p>Are you sure you want to delete this project? This can’t be undone.</p>
        {projectTitle ? <small>{projectTitle}</small> : null}
        <div>
          <button className="button button--light" type="button" onClick={onCancel}>
            No, Cancel
          </button>
          <button className="button button--danger" type="button" onClick={onConfirm}>
            Yes, Delete Project
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProjectPreviewRoute({ id }: { id: string }) {
  return <AdminPreviewPage id={id} />;
}
