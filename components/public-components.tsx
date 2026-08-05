"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
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
const skillWebItems = [
  {
    title: "UI/UX design",
    detail: "Flows, systems, interfaces",
    position: "top-left",
  },
  {
    title: "Graphic design",
    detail: "Branding, layouts, assets",
    position: "top-right",
  },
  {
    title: "Social media content design",
    detail: "Posts, stories, visuals",
    position: "middle-left",
  },
  {
    title: "Social media content coordination",
    detail: "Planning, scheduling",
    position: "middle-right",
  },
  {
    title: "Content planning",
    detail: "Pillars, calendars",
    position: "lower-left",
  },
  {
    title: "Copywriting",
    detail: "Captions, messaging",
    position: "lower-right",
  },
  {
    title: "AI-assisted creative workflow",
    detail: "Ideation, automation",
    position: "bottom-middle",
  },
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

function SkillsWebGraphic() {
  return (
    <div className="skills-web" aria-label="Connected multidisciplinary skillset">
      <svg
        className="skills-web__lines"
        viewBox="0 0 1200 640"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M330 78 C420 112 480 164 528 218" />
        <path d="M870 78 C780 112 720 164 672 218" />
        <path d="M310 220 C396 206 450 228 486 270" />
        <path d="M890 220 C804 206 750 228 714 270" />
        <path d="M270 394 C392 388 474 360 536 334" />
        <path d="M930 394 C808 388 726 360 664 334" />
        <path d="M600 474 C602 422 602 388 600 350" />
        <path d="M330 78 C500 42 700 42 870 78" />
        <path d="M310 220 C476 122 724 122 890 220" />
        <path d="M270 394 C420 486 780 486 930 394" />
        <path d="M330 78 C505 252 662 292 930 394" />
        <path d="M870 78 C695 252 538 292 270 394" />
        <path d="M310 220 C420 340 756 340 890 220" />
        <path d="M330 78 C390 286 448 402 600 474" />
        <path d="M870 78 C810 286 752 402 600 474" />
        <path d="M270 394 C360 252 490 166 600 218" />
        <path d="M930 394 C840 252 710 166 600 218" />
        <path d="M310 220 C428 468 760 468 890 220" />
        <circle cx="330" cy="78" r="6" />
        <circle cx="870" cy="78" r="6" />
        <circle cx="310" cy="220" r="6" />
        <circle cx="890" cy="220" r="6" />
        <circle cx="270" cy="394" r="6" />
        <circle cx="930" cy="394" r="6" />
        <circle cx="600" cy="474" r="6" />
        <circle cx="528" cy="218" r="5" />
        <circle cx="672" cy="218" r="5" />
        <circle cx="486" cy="270" r="5" />
        <circle cx="714" cy="270" r="5" />
        <circle cx="536" cy="334" r="5" />
        <circle cx="664" cy="334" r="5" />
        <circle cx="600" cy="350" r="5" />
      </svg>
      <div className="skills-web__center">
        <span>Integrated</span>
        <strong>Creative practice</strong>
      </div>
      {skillWebItems.map((skill) => (
        <article className={`skills-web__node skills-web__node--${skill.position}`} key={skill.title}>
          <h3>{skill.title}</h3>
          <p>{skill.detail}</p>
        </article>
      ))}
    </div>
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
  const isWide = index === 0 || index === 4;

  return (
    <article className={`work-card ${isWide ? "work-card--wide" : ""}`}>
      <div className="work-card__panel">
        <div className="work-card__meta">
          <span className="work-card__number">{String(index + 1).padStart(2, "0")}</span>
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
            View case study
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
        <div className="hero-kicker">
          <span className="label-pill">Private portfolio</span>
          <p>UI/UX / Brand systems / Social content / AI-assisted workflows</p>
        </div>
        <div className="hero-copy">
          <h1>
            <span>HEY, I&apos;M</span>
            <em>GENÉ</em>
          </h1>
          <p>
            I design product flows, brand systems, websites and content systems
            across UI/UX, visual design and AI-assisted workflows.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#work">View selected work</ButtonLink>
            <a className="text-link" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-collage" aria-hidden="true">
          <div className="hero-card hero-card--portrait">
            <img src="/images/gene-portrait.jpg" alt="" decoding="async" fetchPriority="high" />
          </div>
          <p className="hero-annotation">
            Product thinking, visual systems and content craft in one practice.
          </p>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="skills-band" id="skills">
        <div className="skills-band__intro">
          <span>SKILLS &amp; PRACTICE</span>
          <h2>
            A connected multidisciplinary skillset
          </h2>
          <p>Design, content, communication and AI-supported workflows working together.</p>
        </div>
        <SkillsWebGraphic />
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
          <p>Product, brand and content work selected for range, role and evidence.</p>
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
            {["UI/UX design", "Branding", "Web design", "Visual content", "Art direction", "Social media"].map(
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
        <ol className="process-grid">
          {[
            ["THINK", "Understand the brief, users, business context and constraints."],
            ["DESIGN", "Turn ideas into clear, functional and visually strong solutions."],
            ["TEST", "Check usability, responsiveness and real-world fit."],
            ["REFINE", "Polish the details until the work feels intentional and complete."],
          ].map(([title, copy], index) => (
            <li className="process-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-panel" id="contact">
        <h2>LET&apos;S WORK TOGETHER</h2>
        <p>
          This private portfolio is shared selectively and updated as new work is
          completed. Contact me on WhatsApp or email for access, collaborations and
          new opportunities.
        </p>
        <div className="contact-actions">
          <ExternalButton href="https://wa.me/27711145315" tone="light">
            WhatsApp me
          </ExternalButton>
          <ExternalButton href="mailto:g.e.n.e.designandmarketing@gmail.com" tone="light">
            Email me
          </ExternalButton>
          <a className="button button--light" download href="/cv/gene-van-aswegen-cv.pdf">
            Download CV
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

      {nextProject ? (
        <section className="next-project">
          <span>Next case study</span>
          <div>
            <h2>{nextProject.title}</h2>
            <p>{nextProject.shortDescription}</p>
          </div>
          <ButtonLink href={`/projects/${nextProject.slug}`} tone="light">
            View project
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
