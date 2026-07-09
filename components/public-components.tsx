"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Download, Mail, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { findProjectBySlug, Project, publicProjects } from "@/lib/projects";
import { useProjects } from "@/lib/project-storage";

type ButtonTone = "primary" | "secondary" | "dark" | "light";
const imageFallback = "/projects/social-house.svg";
const clientLogos = [
  { name: "PayCentral", src: "/logos/client-strip/paycentral.png" },
  { name: "BTS", src: "/logos/client-strip/bts.png" },
  { name: "Stretch", src: "/logos/client-strip/stretch.png" },
  { name: "Africology", src: "/logos/client-strip/africology.png" },
  { name: "Woolworths", src: "/logos/client-strip/woolworths.png" },
  { name: "Capitec Bank", src: "/logos/client-strip/capitec.png" },
  { name: "Glasfit", src: "/logos/client-strip/glasfit.png" },
  { name: "Elephants Alive", src: "/logos/client-strip/elephants-alive.png" },
  { name: "Darling Cellars", src: "/logos/client-strip/darling-cellars.png" },
  { name: "Jeras", src: "/logos/client-strip/jeras.png" },
  { name: "Kleinkrans", src: "/logos/client-strip/kleinkrans.png" },
];
const topSkills = [
  "UX/UI Design",
  "UX/UI Research",
  "Social Media Design",
  "UX Automation Consultant",
  "AI Workflow Consultant for Small Businesses",
  "Graphic Designer",
  "Video Editing",
  "Multimedia Designer",
];
const recognitionItems = [
  {
    label: "Finalist",
    title: "Pendoring Awards finalist",
  },
  {
    label: "Finalist",
    title: "Top Vendor Wedding Awards finalist",
  },
  {
    label: "Winner",
    title: "Brand Activation winner for Nelson Mandela Children’s Hospital during my studies",
  },
  {
    label: "Currently Studying",
    title: "Actively completing qualifications in AI consultancy",
  },
];

function ButtonLink({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: React.ReactNode;
  tone?: ButtonTone;
}) {
  return (
    <Link className={`button button--${tone}`} href={href}>
      {children}
    </Link>
  );
}

function ExternalButton({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: React.ReactNode;
  tone?: ButtonTone;
}) {
  return (
    <a className={`button button--${tone}`} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

export function PublicHeader() {
  return (
    <header className="site-header">
      <Link className="brand-wordmark" href="/portfolio" aria-label="Gené van Aswegen portfolio">
        Gené van Aswegen
      </Link>
      <nav className="site-nav" aria-label="Portfolio sections">
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#contact">Studio</a>
      </nav>
      <a
        className="nav-talk"
        href="https://wa.me/27711145315"
        rel="noreferrer"
        target="_blank"
      >
        Let&apos;s Talk!
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-logo" href="/portfolio">
          Gené
        </Link>
        <p>© 2026 Gené van Aswegen. Built with intuition and care.</p>
      </div>
      <div className="footer-links">
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          Instagram
        </a>
        <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <a href="https://www.behance.net/" rel="noreferrer" target="_blank">
          Behance
        </a>
        <a href="https://dribbble.com/" rel="noreferrer" target="_blank">
          Dribbble
        </a>
      </div>
    </footer>
  );
}

export function EditorialMarquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="editorial-marquee" aria-hidden="true">
      <div className="editorial-marquee__track">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item} <b>✶</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function ClientLogoStrip() {
  const repeated = [...clientLogos, ...clientLogos];

  return (
    <section className="client-logo-strip" aria-label="Selected client logos">
      <div className="client-logo-strip__track">
        {repeated.map((logo, index) => (
          <span className="client-logo-strip__item" key={`${logo.name}-${index}`}>
            <img
              src={logo.src}
              alt={index < clientLogos.length ? logo.name : ""}
              aria-hidden={index >= clientLogos.length}
              decoding="async"
              loading={index < 6 ? "eager" : "lazy"}
            />
          </span>
        ))}
      </div>
    </section>
  );
}

function CaseStudyImage({
  src,
  priority = false,
}: {
  src: string;
  priority?: boolean;
}) {
  const [imageWidth, setImageWidth] = useState<number>();
  const imageRef = useRef<HTMLImageElement>(null);
  const cappedWidth = imageWidth || 1420;

  function captureNaturalWidth(image: HTMLImageElement) {
    if (image.naturalWidth > 0) {
      const pixelRatio = typeof window === "undefined" ? 1 : Math.max(1, window.devicePixelRatio);
      setImageWidth(Math.max(320, Math.floor(image.naturalWidth / pixelRatio)));
    }
  }

  useEffect(() => {
    const image = imageRef.current;

    if (image?.complete) {
      captureNaturalWidth(image);
    }
  }, [src]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt=""
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? undefined : "lazy"}
      style={{ "--case-image-width": `${cappedWidth}px` } as React.CSSProperties}
      onLoad={(event) => captureNaturalWidth(event.currentTarget)}
    />
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isWide = index === 0 || index === 3;

  return (
    <article className={`work-card ${isWide ? "work-card--wide" : ""}`}>
      <div className="work-card__panel">
        <div className="work-card__meta">
          <div className="mini-pills">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          {project.featured ? <span className="featured-dot">Featured</span> : null}
        </div>
        <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
          <h3>{project.title}</h3>
        </Link>
        <p className="work-card__kind">{project.category}</p>
        <div className="work-card__copy">
          <p>{project.shortDescription}</p>
          <Link className="case-button" href={`/projects/${project.slug}`}>
            View Case Study
          </Link>
        </div>
        <div className="tag-row">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function PortfolioPage() {
  const { projects } = useProjects();
  const visibleProjects = publicProjects(projects);

  return (
    <main className="portfolio-shell">
      <PublicHeader />
      <section className="hero-section">
        <div className="hero-copy">
          <span className="label-pill">PRIVATE PORTFOLIO</span>
          <h1>
            <span>HEY, I&apos;M</span>
            <em>GENÉ</em>
          </h1>
          <p>
            I&apos;m a UI/UX designer and digital designer creating thoughtful digital
            products, bold brand systems and scroll-stopping visual content.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#work">VIEW MY WORK</ButtonLink>
            <ButtonLink href="#contact" tone="secondary">
              GET IN TOUCH
            </ButtonLink>
          </div>
        </div>
        <div className="hero-collage" aria-hidden="true">
          <div className="hero-card hero-card--portrait">
            <img src="/images/gene-portrait.jpg" alt="" decoding="async" fetchPriority="high" />
          </div>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="skills-band" id="skills">
        <div className="skills-band__intro">
          <span>SKILLS &amp; RECOGNITION</span>
          <h2>
            A multidisciplinary skillset across UX, content, automation and AI
            consultancy.
          </h2>
        </div>
        <div className="skill-cloud" aria-label="Top skills">
          {topSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <div className="recognition-grid" aria-label="Awards and recognition">
          {recognitionItems.map((item) => (
            <article key={item.title}>
              <span>{item.label}</span>
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad selected-work" id="work">
        <div className="section-heading">
          <h2>SELECTED WORK</h2>
          <p>A curation of digital products and visual experiments.</p>
        </div>
        <div className="work-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </section>

      <section className="about-band" id="about">
        <div className="about-image">
          <img
            src="/images/gene-about.jpg"
            alt="Gené surrounded by pink flowers"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <h2>ABOUT ME</h2>
          <p>
            I&apos;m a multidisciplinary designer working across UI/UX, branding, web
            design, social media and digital products. My work blends strategic
            thinking, visual clarity and hands-on execution — from app flows and
            design systems to campaign visuals, brand identities and content systems.
          </p>
          <div className="about-tags">
            {["UI/UX DESIGN", "BRANDING", "WEB DESIGN", "VISUAL CONTENT", "ART DIRECTION", "SOCIAL MEDIA"].map(
              (tag) => (
                <span key={tag}>{tag}</span>
              ),
            )}
          </div>
          <div className="based-in">
            <span>BASED IN</span>
            <strong>South Africa & Beyond</strong>
          </div>
        </div>
      </section>

      <section className="section-pad process-section" id="process">
        <h2>HOW I WORK</h2>
        <div className="process-grid">
          {[
            ["THINK", "Understand the brief, users, business context and constraints."],
            ["DESIGN", "Turn ideas into clear, functional and visually strong solutions."],
            ["TEST", "Check usability, responsiveness and real-world fit."],
            ["REFINE", "Polish the details until the work feels intentional and complete."],
          ].map(([title, copy], index) => (
            <article className={`process-card ${index === 1 ? "process-card--active" : ""}`} key={title}>
              <span>{index === 0 ? "⌖" : index === 1 ? "↗" : index === 2 ? "⊙" : "✦"}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-panel" id="contact">
        <h2>LET&apos;S WORK TOGETHER</h2>
        <p>
          Contact me on WhatsApp or email for project access, collaborations and
          new opportunities.
        </p>
        <div className="contact-actions">
          <ExternalButton href="https://wa.me/27711145315" tone="light">
            <MessageCircle size={16} /> WHATSAPP ME
          </ExternalButton>
          <ExternalButton href="mailto:g.e.n.e.designandmarketing@gmail.com" tone="light">
            <Mail size={16} /> EMAIL ME
          </ExternalButton>
          <a className="button button--light" download href="/cv/gene-van-aswegen-cv.pdf">
            <Download size={16} /> DOWNLOAD CV
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

export function CaseStudyView({
  project,
  nextProject,
  preview = false,
}: {
  project: Project;
  nextProject?: Project;
  preview?: boolean;
}) {
  const galleryImages =
    project.galleryImages.length > 0 ? project.galleryImages : [project.coverImage || imageFallback];
  const caseHeroImage = galleryImages[0] ?? project.coverImage ?? imageFallback;
  const visibleGalleryImages = galleryImages.slice(1);

  return (
    <main className="case-shell">
      <PublicHeader />
      {preview ? <div className="preview-ribbon">Preview mode</div> : null}
      <section className="case-hero">
        <div>
          <div className="mini-pills case-pills">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h1>{project.title}</h1>
        </div>
        <aside className="case-meta">
          <div>
            <span>MY ROLE</span>
            <p>{project.role || "Designer"}</p>
          </div>
          <div>
            <span>CLIENT / BRAND</span>
            <p>{project.client}</p>
          </div>
          <div>
            <span>TOOLS</span>
            <p>{project.tools.join(", ") || "Figma"}</p>
          </div>
        </aside>
      </section>
      <section className="case-cover">
        <CaseStudyImage src={caseHeroImage} priority />
      </section>

      <EditorialMarquee items={project.tags.length ? project.tags : ["IDENTITY DESIGN", "UI/UX DESIGN"]} />

      <section className="case-content">
        <div className="case-intro">
          <h2>THE BRIEF &amp; THE CHALLENGE</h2>
          <div className="lime-rule" />
          <p>“{project.brief}”</p>
        </div>
        <div className="case-stack">
          <InfoCard label="THE OVERVIEW" body={project.overview} />
          <InfoCard label="THE CHALLENGE" body={project.challenge} tone="lavender" />
        </div>
      </section>

      {visibleGalleryImages.length > 0 ? (
        <section className="gallery-collage">
          {visibleGalleryImages.map((image, index) => (
            <div
              className={`gallery-frame gallery-frame--${(index % 3) + 1}`}
              key={`${image}-${index}`}
            >
              <CaseStudyImage src={image} />
            </div>
          ))}
        </section>
      ) : null}

      <section className="case-breakdown">
        <InfoCard label="MY ROLE" body={project.myRole} />
        <InfoCard label="PROCESS" body={project.process} tone="dark" />
        <InfoCard label="DESIGN DECISIONS" body={project.designDecisions} />
        <InfoCard label="OUTCOME" body={project.outcome} tone="lime" />
      </section>

      <section className="quote-band">
        <span>99</span>
        <h2>THE FINAL DIRECTION FEELS CLEAR, INTENTIONAL AND READY TO USE.</h2>
      </section>

      {nextProject ? (
        <section className="next-project">
          <span>NEXT CASE STUDY</span>
          <h2>{nextProject.title}</h2>
          <p>{nextProject.shortDescription}</p>
          <ButtonLink href={`/projects/${nextProject.slug}`} tone="light">
            View Project
          </ButtonLink>
        </section>
      ) : null}

      <SiteFooter />
    </main>
  );
}

function InfoCard({
  label,
  body,
  tone = "cream",
}: {
  label: string;
  body: string;
  tone?: "cream" | "lavender" | "dark" | "lime";
}) {
  return (
    <article className={`info-card info-card--${tone}`}>
      <span>{label}</span>
      <p>{body}</p>
    </article>
  );
}

export function ProjectCaseStudyPage({ slug }: { slug: string }) {
  const { projects } = useProjects();
  const visibleProjects = publicProjects(projects);
  const project = findProjectBySlug(projects, slug);
  const publicProject =
    project && project.status === "published" && !project.hidden ? project : undefined;
  const currentIndex = publicProject
    ? visibleProjects.findIndex((item) => item.id === publicProject.id)
    : -1;
  const nextProject =
    currentIndex >= 0 ? visibleProjects[(currentIndex + 1) % visibleProjects.length] : undefined;

  if (!publicProject) {
    return (
      <main className="portfolio-shell">
        <PublicHeader />
        <section className="empty-state public-empty-state">
          <span>PRIVATE PORTFOLIO</span>
          <h1>Project unavailable</h1>
          <p>This project is either unpublished, hidden or no longer available.</p>
          <ButtonLink href="/portfolio">Back to Portfolio</ButtonLink>
        </section>
        <SiteFooter />
      </main>
    );
  }

  return <CaseStudyView nextProject={nextProject} project={publicProject} />;
}

export function AdminPreviewPage({ id }: { id: string }) {
  const { projects } = useProjects();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="admin-main">
        <div className="empty-state">
          <span>PREVIEW</span>
          <h1>Project not found</h1>
          <p>The selected project could not be loaded from local storage.</p>
          <ButtonLink href="/admin/projects">Back to Projects</ButtonLink>
        </div>
      </section>
    );
  }

  return <CaseStudyView preview project={project} />;
}
