"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { FaDownload, FaEnvelope, FaWhatsapp } from "react-icons/fa";
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
    title: "Pendoring Awards finalist",
    logo: "/logos/awards/pendoring.jpg",
  },
  {
    title: "Top Vendor Wedding Awards finalist",
    logo: "/logos/awards/top-vendor-wedding-awards.png",
  },
  {
    title: "Brand Activation winner for Nelson Mandela Children’s Hospital during my studies",
    logo: "/logos/awards/nelson-mandela-childrens-hospital.jpeg",
  },
  {
    title: "Actively completing qualifications in AI consultancy",
    logo: "/logos/awards/udemy.png",
  },
];
const mediumArticles = [
  {
    title: "The Figma File Nobody Wants to Inherit",
    date: "13 Jul 2026",
    readTime: "5 min read",
    excerpt: "I recently opened a Figma file I built in early 2025, and for a few seconds, I just stared at it.",
    tags: ["Figma", "AI", "UI Design", "Claude"],
    image: "/images/writing/figma-file-cover.jpg",
    href: "https://medium.com/@g.e.n.e.designandmarketing/the-figma-file-nobody-wants-to-inherit-39a26607e23f",
  },
  {
    title: "My Fiancé Built an App in 4 Days. I Had a Small Career Crisis.",
    date: "8 May 2026",
    readTime: "6 min read",
    excerpt: "Spoiler alert: it's not a bad end. There are few things more humbling than watching someone you love casually threaten your entire professional identity over a laptop.",
    tags: ["Ai Panic", "AI", "UX", "Lessons Learned"],
    image: "/images/writing/fiance-app-cover.jpg",
    href: "https://medium.com/@g.e.n.e.designandmarketing/my-fianc%C3%A9-built-an-app-in-4-days-i-had-a-small-career-crisis-d48c6abbccbe",
  },
  {
    title: "When Global UX Meets Local Law: Are We Designing Illegally?",
    date: "1 Jul 2025",
    readTime: "4 min read",
    excerpt: "The digital world moves fast, products launch globally, and designers strive to create experiences that work across borders. But UX doesn't exist in a legal vacuum.",
    tags: ["UX Design", "UX Research", "UX", "UI Design", "Laws And Regulations"],
    image: "/images/writing/local-law-cover.jpg",
    href: "https://medium.com/@g.e.n.e.designandmarketing/when-global-ux-meets-local-law-are-we-designing-illegally-81343968712c",
  },
];
const ndaProjects = [
  "HelloPaisa Global App",
  "HelloPaisa Website",
  "HelloPaisa Bank CRM System",
  "HelloPaisa Bank TMS System",
  "HelloPaisa Global CMS System",
];

function ButtonLink({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: ReactNode;
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
  children: ReactNode;
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
        <a href="/portfolio#work">Work</a>
        <a href="/portfolio#writing">Writing</a>
        <a href="/portfolio#process">Process</a>
        <a href="/portfolio#about">About</a>
        <a href="/portfolio#contact">Studio</a>
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
        <p>© 2026 Gené van Aswegen. Built with intuition and care.</p>
      </div>
      <div className="footer-links">
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          Instagram
        </a>
        <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
          LinkedIn
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
        <path d="M360 78 C454 112 508 164 548 226" />
        <path d="M840 78 C746 112 692 164 652 226" />
        <path d="M216 224 C350 212 444 236 514 278" />
        <path d="M984 224 C850 212 756 236 686 278" />
        <path d="M264 397 C384 390 480 360 544 336" />
        <path d="M936 397 C816 390 720 360 656 336" />
        <path d="M600 500 C600 440 600 390 600 350" />
        <path d="M360 78 C500 42 700 42 840 78" />
        <path d="M216 224 C420 118 780 118 984 224" />
        <path d="M264 397 C430 492 770 492 936 397" />
        <path d="M360 78 C508 248 662 302 936 397" />
        <path d="M840 78 C692 248 538 302 264 397" />
        <path d="M216 224 C398 348 802 348 984 224" />
        <path d="M360 78 C416 290 472 420 600 500" />
        <path d="M840 78 C784 290 728 420 600 500" />
        <path d="M264 397 C356 252 492 170 600 226" />
        <path d="M936 397 C844 252 708 170 600 226" />
        <path d="M216 224 C420 474 780 474 984 224" />
        <circle cx="360" cy="78" r="6" />
        <circle cx="840" cy="78" r="6" />
        <circle cx="216" cy="224" r="6" />
        <circle cx="984" cy="224" r="6" />
        <circle cx="264" cy="397" r="6" />
        <circle cx="936" cy="397" r="6" />
        <circle cx="600" cy="500" r="6" />
        <circle cx="548" cy="226" r="5" />
        <circle cx="652" cy="226" r="5" />
        <circle cx="514" cy="278" r="5" />
        <circle cx="686" cy="278" r="5" />
        <circle cx="544" cy="336" r="5" />
        <circle cx="656" cy="336" r="5" />
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
  return (
    <img
      src={src}
      alt=""
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? undefined : "lazy"}
    />
  );
}

function ProjectMedia({
  src,
  priority = false,
  variant = "gallery",
  className = "",
  onZoom,
}: {
  src: string;
  priority?: boolean;
  variant?: "hero" | "gallery";
  className?: string;
  onZoom?: (src: string) => void;
}) {
  return (
    <figure className={`project-media project-media--${variant}${className ? ` ${className}` : ""}`}>
      {onZoom ? (
        <button
          className="project-media__zoom-trigger"
          type="button"
          aria-label="Open image larger"
          onClick={() => onZoom(src)}
        >
          <CaseStudyImage src={src} priority={priority} />
          <span className="project-media__zoom-icon" aria-hidden="true">
            +
          </span>
        </button>
      ) : (
        <CaseStudyImage src={src} priority={priority} />
      )}
    </figure>
  );
}

function ProjectGallery({
  images,
  onZoom,
}: {
  images: string[];
  onZoom: (src: string) => void;
}) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="project-gallery" aria-label="Project image gallery">
      {images.map((image, index) => (
        <ProjectMedia
          src={image}
          variant="gallery"
          className={image.includes("/portfolio-assets/waddle/ux-psychology") ? "project-media--wide" : ""}
          key={`${image}-${index}`}
          onZoom={onZoom}
        />
      ))}
    </section>
  );
}

function ProjectProcessGallery({
  images,
  onZoom,
}: {
  images?: string[];
  onZoom: (src: string) => void;
}) {
  if (!images?.length) {
    return null;
  }

  return (
    <section className="project-process-media" aria-label="Process exploration">
      <div className="project-process-media__intro">
        <span>PROCESS</span>
        <h2>Goal mapping &amp; exploration</h2>
        <p>Early structure, content grouping and user-flow thinking behind the experience direction.</p>
      </div>
      <div className="project-process-media__grid">
        {images.map((image, index) => (
          <ProjectMedia
            src={image}
            variant="gallery"
            className="project-media--process"
            key={`${image}-${index}`}
            onZoom={onZoom}
          />
        ))}
      </div>
    </section>
  );
}

function ImageLightbox({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose, src]);

  if (!src) {
    return null;
  }

  return (
    <div className="image-lightbox" role="dialog" aria-label="Expanded project image" aria-modal="true">
      <button
        className="image-lightbox__backdrop"
        type="button"
        aria-label="Close expanded image"
        onClick={onClose}
      />
      <div className="image-lightbox__panel">
        <button className="image-lightbox__close" type="button" onClick={onClose}>
          Close
        </button>
        <img src={src} alt="" />
      </div>
    </div>
  );
}

function AudioFeature({ media }: { media: NonNullable<Project["media"]> }) {
  const mediaTypeLabel = (type: NonNullable<Project["media"]>[number]["type"]) => {
    if (type === "video") {
      return "Video";
    }

    if (type === "document") {
      return "PDF";
    }

    return "Audio";
  };

  return (
    <section className="audio-feature" aria-label="Project media">
      <div className="audio-feature__intro">
        <span>MEDIA</span>
        <h2>Campaign media</h2>
        <p>Supporting media and brand documents created as part of the project deliverables.</p>
      </div>
      <div className="audio-feature__list">
        {media.map((item) => (
          <article className="audio-feature__card" key={item.src}>
            <div>
              <span>{mediaTypeLabel(item.type)}</span>
              <h3>{item.title}</h3>
              {item.description ? <p>{item.description}</p> : null}
            </div>
            {item.type === "document" ? (
              <a
                className="audio-feature__document"
                href={item.src}
                target="_blank"
                rel="noreferrer"
              >
                {item.poster ? (
                  <img
                    className="audio-feature__document-preview"
                    src={item.poster}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <span className="audio-feature__document-action">Open PDF</span>
              </a>
            ) : item.type === "video" ? (
              <video
                className="audio-feature__player"
                controls
                poster={item.poster}
                preload="metadata"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            ) : (
              <audio className="audio-feature__player" controls preload="metadata">
                <source src={item.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="work-card">
      <Link
        className="work-card__image"
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title}`}
      >
        <img src={project.coverImage} alt="" decoding="async" loading="lazy" />
      </Link>
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
        </div>
        <div className="tag-row">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link className="case-button" href={`/projects/${project.slug}`}>
          View case study
        </Link>
      </div>
    </article>
  );
}

export function PortfolioPage() {
  const { projects } = useProjects();
  const visibleProjects = publicProjects(projects);
  const highlightedProjects = visibleProjects.slice(0, 3);
  const workPrompts = [
    "how I structure product experiences from strategy into usable interfaces",
    "how brand systems, content and campaign design work together",
    "how visual design supports clearer digital experiences",
  ];

  return (
    <main className="portfolio-shell">
      <PublicHeader />
      <section className="hero-section">
        <div className="hero-copy">
          <h1>
            <span>Hey, I&apos;m</span>
            <em>Gené</em>
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
            <img src="/images/gene-hero-wide.png" alt="" decoding="async" fetchPriority="high" />
          </div>
          <p className="hero-annotation">
            Product thinking, visual systems and content craft in one practice.
          </p>
        </div>
      </section>

      <ClientLogoStrip />

      <section className="skills-band" id="skills">
        <div className="skills-band__intro">
          <span>Skills &amp; practice</span>
          <h2>
            A connected multidisciplinary skillset
          </h2>
          <p>Design, content, communication and AI-supported workflows working together.</p>
        </div>
        <SkillsWebGraphic />
      </section>

      <section className="section-pad recognition-section">
        <h2>Recognition</h2>
        <div className="recognition-grid" aria-label="Awards and recognition">
          {recognitionItems.map((item) => (
            <article key={item.title}>
              <img className="recognition-grid__logo" src={item.logo} alt={item.title} />
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad selected-work" id="work">
        <div className="work-ux-intro">
          <span className="work-board-eyebrow">Portfolio</span>
          <h2>Selected work</h2>
          <p>Below are highlighted case studies.</p>
          <ul className="work-ux-links">
            {highlightedProjects.map((project, index) => (
              <li key={project.id}>
                Interested in {workPrompts[index % workPrompts.length]}? See{" "}
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>.
              </li>
            ))}
          </ul>
        </div>
        <div className="work-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </section>

      <section className="section-pad nda-section">
        <div className="nda-intro">
          <span className="nda-eyebrow">Also worth knowing</span>
          <h2>Confidential &amp; NDA work</h2>
          <p>
            Not everything I&apos;ve built can live in a public portfolio. Some of my
            most substantial UI/UX work sits behind client NDAs and backend systems
            that were never meant to be public facing, including:
          </p>
        </div>
        <div className="nda-wall">
          {ndaProjects.map((project, index) => (
            <p
              className={`nda-wall__item ${index % 2 === 0 ? "is-left" : "is-right"}`}
              key={project}
            >
              {project}
            </p>
          ))}
        </div>
        <p className="nda-footnote">
          Alongside project work like this, I&apos;ve also built complete design
          systems from scratch, component libraries, tokens and documentation
          included, for teams that needed one foundation to design and build from.
        </p>
      </section>

      <section className="section-pad writing-section" id="writing">
        <div className="writing-heading">
          <div>
            <span className="writing-eyebrow">Medium</span>
            <h2>I have something to say</h2>
          </div>
          <a
            className="writing-profile"
            href="https://medium.com/@g.e.n.e.designandmarketing"
            rel="noreferrer"
            target="_blank"
          >
            View Medium profile
          </a>
        </div>
        <div className="writing-list">
          {mediumArticles.map((article) => (
            <a
              className="writing-card"
              href={article.href}
              key={article.href}
              rel="noreferrer"
              target="_blank"
            >
              <div className="writing-card__body">
                <div className="writing-card__tags">
                  {article.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{article.title}</h3>
                <p className="writing-card__excerpt">{article.excerpt}</p>
                <div className="writing-card__meta-row">
                  <span className="writing-card__meta">
                    {article.date} &middot; {article.readTime}
                  </span>
                  <span className="writing-card__cta">
                    Read on Medium <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
              {article.image ? (
                <img className="writing-card__media" src={article.image} alt="" />
              ) : null}
            </a>
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
          <span className="about-eyebrow">Who I am</span>
          <h2>About me</h2>
          <p>
            I&apos;m a multidisciplinary designer working across UI/UX, branding, web
            design, social media and digital products. My work blends strategic
            thinking, visual clarity and hands-on execution, from app flows and
            design systems to campaign visuals, brand identities and content systems.
          </p>
          <p>
            When I&apos;m not designing, I&apos;m usually in the garden tending my roses,
            or losing a staring contest with my German Shorthaired Pointer, who is,
            without question, my child. I&apos;m endlessly curious about how people
            think, especially in this new AI era. It&apos;s easy to assume AI can do
            it all, until you factor in empathy and the kind of judgement calls only
            a human can make.
          </p>
          <div className="about-tags">
            {["UI/UX design", "Branding", "Web design", "Visual content", "Art direction", "Social media"].map(
              (tag) => (
                <span key={tag}>{tag}</span>
              ),
            )}
          </div>
          <div className="based-in">
            <span>Based in</span>
            <strong>South Africa & Beyond</strong>
          </div>
        </div>
      </section>

      <section className="section-pad process-section" id="process">
        <div className="process-intro">
          <h2>How I work</h2>
          <p>
            My process is built around iteration: I&apos;d rather run another round
            than ship something that&apos;s merely good enough. Every step below loops
            back into the last until the client is genuinely happy with the result.
          </p>
        </div>
        <ol className="process-grid">
          {[
            {
              title: "Think",
              image: "/images/process/think.png",
              copy: "Every project starts with listening to the brief, the users and the business constraints that shape what success actually looks like. I ask a lot of questions early so we're not iterating blind later.",
            },
            {
              title: "Design",
              image: "/images/process/design.png",
              copy: "I turn ideas into clear, functional, visually strong solutions quickly, so there's something real to react to. I'd rather show a few rough directions early than one polished direction late.",
            },
            {
              title: "Test",
              image: "/images/process/test.png",
              copy: "Nothing ships on how it looks in Figma alone. I check usability, responsiveness and real-world fit, then build revision rounds into the process on purpose, since the first version is rarely the final one.",
            },
            {
              title: "Refine",
              image: "/images/process/refine.png",
              copy: "I polish the details until the work feels intentional and complete, looping back through think, design and test for as many rounds as it takes, until the client is genuinely happy, not just signed off.",
            },
          ].map((step) => (
            <li className="process-card" key={step.title}>
              <img className="process-card__badge" src={step.image} alt={step.title} />
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-panel" id="contact">
        <span className="contact-panel__eyebrow">Say hello</span>
        <h2 className="contact-panel__heading">
          Let&apos;s work <em>together</em>
        </h2>
        <p className="contact-panel__copy">
          This private portfolio is shared selectively and updated as new work is
          completed. Contact me on WhatsApp or email for access, collaborations and
          new opportunities.
        </p>
        <div className="contact-stickers">
          <ExternalButton href="https://wa.me/27711145315" tone="primary">
            <FaWhatsapp aria-hidden="true" /> WhatsApp me
          </ExternalButton>
          <ExternalButton href="mailto:g.e.n.e.designandmarketing@gmail.com" tone="light">
            <FaEnvelope aria-hidden="true" /> Email me
          </ExternalButton>
          <a className="button button--light" download href="/cv/gene-van-aswegen-cv.pdf">
            <FaDownload aria-hidden="true" /> Download CV
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
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const closeZoom = useCallback(() => setZoomedImage(null), []);
  const galleryImages =
    project.galleryImages.length > 0 ? project.galleryImages : [project.coverImage || imageFallback];
  const visibleGalleryImages = galleryImages.filter(
    (image, index) => galleryImages.indexOf(image) === index,
  );
  const heroStatement = project.brief || project.shortDescription || project.title;

  return (
    <main className="case-shell">
      <PublicHeader />
      {preview ? <div className="preview-ribbon">Preview mode</div> : null}
      <section className="case-hero">
        <div className="case-hero__copy">
          <Link className="case-back-link" href="/portfolio">
            Back to homepage
          </Link>
          <span className="case-hero__eyebrow">{project.title}</span>
          <div className="mini-pills case-pills">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h1>{heroStatement}</h1>
        </div>
      </section>

      <section className="case-overview">
        <div className="case-section-heading">
          <h2>Project overview</h2>
        </div>
        <div className="case-overview__body">
          <div className="case-overview__facts">
            <p>
              <strong>Role:</strong> {project.role || "Designer"}
            </p>
            <p>
              <strong>Client:</strong> {project.client}
            </p>
            <p>
              <strong>Year:</strong> {project.year}
            </p>
            <p>
              <strong>Tools:</strong> {project.tools.join(", ") || "Figma"}
            </p>
            {project.tags.length ? (
              <p>
                <strong>Focus:</strong> {project.tags.join(", ")}
              </p>
            ) : null}
          </div>
          <div className="case-summary">
            <h3>Executive summary</h3>
            <p>{project.overview}</p>
          </div>
        </div>
      </section>

      <section className="case-content">
        <div className="case-intro">
          <h2>The brief &amp; challenge</h2>
        </div>
        <div className="case-stack">
          <InfoCard label="The brief" body={project.brief} />
          <InfoCard label="The challenge" body={project.challenge} />
        </div>
      </section>

      <ProjectProcessGallery images={project.processImages} onZoom={setZoomedImage} />

      <ProjectGallery images={visibleGalleryImages} onZoom={setZoomedImage} />

      {project.media?.length ? <AudioFeature media={project.media} /> : null}

      <section className="case-breakdown">
        <div className="case-breakdown__heading">
          <h2>Lessons learned</h2>
        </div>
        <div className="case-breakdown__list">
          <InfoCard label="My role" body={project.myRole} tone="dark" />
          <InfoCard label="Process" body={project.process} tone="dark" />
          <InfoCard label="Design decisions" body={project.designDecisions} tone="dark" />
          <InfoCard label="Outcome" body={project.outcome} tone="dark" />
        </div>
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
      <ImageLightbox src={zoomedImage} onClose={closeZoom} />
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
          <span>Portfolio</span>
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
