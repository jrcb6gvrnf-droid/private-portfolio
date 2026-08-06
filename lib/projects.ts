export type ProjectStatus = "draft" | "published";

export type ProjectMedia = {
  type: "audio" | "video" | "document";
  src: string;
  title: string;
  description?: string;
  poster?: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  tags: string[];
  shortDescription: string;
  brief: string;
  overview: string;
  challenge: string;
  myRole: string;
  process: string;
  designDecisions: string;
  outcome: string;
  coverImage: string;
  galleryImages: string[];
  processImages?: string[];
  media?: ProjectMedia[];
  featured: boolean;
  hidden: boolean;
  status: ProjectStatus;
  order: number;
  createdAt: string;
  updatedAt: string;
};

const importedAt = "2026-05-20T20:30:00.000Z";

export const defaultProjects: Project[] = [
  {
    id: "proj-groomed",
    title: "Groomed UI/UX Website Design",
    slug: "groomed-ui-ux-website-design",
    client: "Groomed",
    category: "UI/UX Design",
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    tags: ["UI/UX Design", "Website Design", "User Journeys", "Wireframes"],
    shortDescription:
      "Interactive grooming and wedding-prep website concept designed for grooms.",
    brief:
      "Groomed explored an interactive information website for grooms, focused on marriage prep, articles, practical checklists and male-oriented wedding resources.",
    overview:
      "The project positions Groomed as a bold, accessible web experience that makes wedding preparation feel practical, confident and less overlooked for grooms.",
    challenge:
      "Most wedding resources are bride-focused. The challenge was to create a masculine, approachable experience that balances useful information, emotional readiness and playful interaction.",
    myRole:
      "I developed the UX direction, sitemap, task flows, user journeys, wireframes, UI style guide and final visual presentation boards.",
    process:
      "The process moved from user journeys, sitemap and task-flow planning into wireframes, style exploration and high-impact final UI presentation boards.",
    designDecisions:
      "A strong condensed type style, blue, orange, purple and pink accents, bold contrast and interactive motifs created an energetic identity without losing clarity.",
    outcome:
      "The final concept shows a complete UX and UI direction for a groom-focused website, with final presentation boards supported by clear process documentation.",
    coverImage: "/portfolio-assets/groomed/final/groomed-cover.jpg",
    galleryImages: [
      "/portfolio-assets/groomed/final/groomed-cover.jpg",
      "/portfolio-assets/groomed/final/brag-board-1.jpg",
      "/portfolio-assets/groomed/final/brag-board-2.jpg",
    ],
    processImages: [
      "/portfolio-assets/groomed/process/sitemap.jpg",
      "/portfolio-assets/groomed/process/task-flows.jpg",
      "/portfolio-assets/groomed/process/user-journey-01.jpg",
      "/portfolio-assets/groomed/process/user-journey-02.jpg",
      "/portfolio-assets/groomed/process/wireframes.jpg",
      "/portfolio-assets/groomed/process/ui-style-guide.jpg",
    ],
    featured: true,
    hidden: false,
    status: "published",
    order: 1,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-paycentral-portal",
    title: "PayCentral Web Portal UI/UX",
    slug: "paycentral-web-portal-ui-ux",
    client: "PayCentral",
    category: "UI/UX Design",
    year: "2025-2026",
    role: "UI/UX Designer",
    tools: ["Figma", "Adobe XD", "Adobe Photoshop"],
    tags: ["UI/UX", "Web Application", "Fintech", "Dashboard"],
    shortDescription:
      "A PayCentral card platform portal and launch experience for clearer onboarding, training and account management.",
    brief:
      "PayCentral needed a client-facing card platform launch experience that could introduce the new portal, explain key features and guide users toward training and support.",
    overview:
      "The project presents a refreshed PayCentral card platform experience, including the launch landing page, feature education, mobile account access, support messaging and training-booking flow.",
    challenge:
      "Payroll software has to carry dense information without overwhelming users. The interface needed to feel clear, credible and efficient for non-technical business users.",
    myRole:
      "I designed the portal interface, explored visual hierarchy, refined dashboard patterns and prepared the screens for presentation and handoff.",
    process:
      "I focused on making the platform change feel easy to understand, showing what was new, what users could do, and where they could get help or training.",
    designDecisions:
      "The direction uses clean product sections, strong fintech contrast, practical feature breakdowns and device-led mockups to make a complex platform update feel accessible.",
    outcome:
      "The final launch flow gives PayCentral a clearer way to introduce the updated portal, guide users through key features and support adoption.",
    coverImage: "/portfolio-assets/paycentral-portal/mockups/hero-platform.png",
    galleryImages: [
      "/portfolio-assets/paycentral-portal/mockups/hero-platform.png",
      "/portfolio-assets/paycentral-portal/mockups/new-features.png",
      "/portfolio-assets/paycentral-portal/mockups/platform-features.png",
      "/portfolio-assets/paycentral-portal/mockups/mobile-account.png",
      "/portfolio-assets/paycentral-portal/mockups/smarter-interface.png",
      "/portfolio-assets/paycentral-portal/mockups/support.png",
      "/portfolio-assets/paycentral-portal/mockups/get-ready.png",
    ],
    processImages: [
      "/portfolio-assets/paycentral-portal/process/portal-goals-flow-map.jpg",
      "/portfolio-assets/paycentral-portal/process/portal-exploration-board.jpg",
    ],
    featured: true,
    hidden: false,
    status: "published",
    order: 2,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-darling-cellars",
    title: "Darling Cellars Brand & Social Media",
    slug: "darling-cellars-brand-social-media",
    client: "Darling Cellars",
    category: "Brand & Content",
    year: "2024",
    role: "Brand & Social Media Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "CapCut"],
    tags: ["Brand Identity", "Social Media", "YouTube", "Wine"],
    shortDescription:
      "Brand identity, Instagram advertising and YouTube channel design for a South African wine brand.",
    brief:
      "Darling Cellars needed a refreshed brand identity and stronger digital content presence across Instagram advertising, feed design and YouTube channel assets.",
    overview:
      "The project brought the brand into a more cohesive digital space through Instagram ads, before-and-after feed mockups, YouTube banner design and supporting campaign audio.",
    challenge:
      "The existing digital presence felt scattered. The redesign needed to make the brand feel approachable, premium and distinctly South African across multiple channels.",
    myRole:
      "I designed the digital identity direction, social media posts, Instagram refresh mockups, YouTube banner and presentation assets.",
    process:
      "I worked from brand positioning into template systems, individual post design, channel mockups and before-and-after documentation to make the transformation visible.",
    designDecisions:
      "A consistent colour story, polished typography and product-led layouts created a more unified presence while still giving individual posts enough variation.",
    outcome:
      "The final assets created a stronger digital brand system and a clear before-and-after story showing the value of consistent social media design.",
    coverImage: "/portfolio-assets/darling-cellars/darling-cellars-thumbnail.png",
    galleryImages: [
      "/portfolio-assets/darling-cellars/cover.webp",
      "/portfolio-assets/darling-cellars/before-after-mockup.webp",
      "/portfolio-assets/darling-cellars/youtube-mockup.webp",
      "/portfolio-assets/darling-cellars/youtube-banner.webp",
      "/portfolio-assets/darling-cellars/phone-mockup.webp",
    ],
    media: [
      {
        type: "video",
        src: "/portfolio-assets/darling-cellars/darling-cellars-ad-2024.mp4",
        title: "Darling Cellars campaign video",
        poster: "/portfolio-assets/darling-cellars/youtube-banner.webp",
        description:
          "Campaign video created for the Darling Cellars digital content and YouTube direction.",
      },
      {
        type: "document",
        src: "/portfolio-assets/darling-cellars/darling-cellars-brand-identity.pdf",
        title: "Darling Cellars brand identity PDF",
        poster: "/portfolio-assets/darling-cellars/darling-cellars-brand-identity-preview.jpg",
        description:
          "Two-page brand identity document showing the refined visual direction and supporting brand system.",
      },
    ],
    featured: true,
    hidden: false,
    status: "published",
    order: 5,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-jeras",
    title: "Jeras Boran Landing Page & Campaign",
    slug: "jeras-boran-landing-page-campaign",
    client: "Jeras Boran",
    category: "Web & Print",
    year: "2025-2026",
    role: "Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    tags: ["Web Design", "Print Advertising", "Agriculture", "Social Media"],
    shortDescription:
      "Landing page, print advertising and social media design for a premium South African Boran cattle stud.",
    brief:
      "Jeras needed a cohesive digital and print presence that matched the prestige, lineage and depth of its Boran breeding programme.",
    overview:
      "Jeras is a premium Boran cattle stud farm with over 22 years of genetic selection. I designed a landing page, Boran Joernaal print advertisement and supporting social media direction.",
    challenge:
      "The brand had to speak to specialist agricultural buyers who value credibility, genetics, heritage and trust. The design needed to feel premium without losing its farm-rooted character.",
    myRole:
      "I designed the landing page, print advertisement, event lockup and social media visuals for the Jeras brand presence.",
    process:
      "The work translated brand story and agricultural credibility into a cross-media design language for web, editorial advertising and social content.",
    designDecisions:
      "Terracotta tones, dark backgrounds, cream typography and editorial layouts created a grounded but premium feel aligned with the cattle stud market.",
    outcome:
      "The final direction positions Jeras as a confident, credible agricultural brand across landing page, print and social touchpoints.",
    coverImage: "/portfolio-assets/jeras/cover.webp",
    galleryImages: [
      "/portfolio-assets/jeras/cover.webp",
      "/portfolio-assets/jeras/boran-joernaal-ad.jpeg",
    ],
    processImages: ["/portfolio-assets/jeras/process/sitemap.png"],
    featured: false,
    hidden: false,
    status: "published",
    order: 6,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-brainwashed",
    title: "Brainwashed Brand & Print Design",
    slug: "brainwashed-brand-print-design",
    client: "Brainwashed",
    category: "Brand & Print",
    year: "2024",
    role: "Brand Designer / Graphic Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    tags: ["Brand Identity", "Poster Design", "UX Research", "Print Design"],
    shortDescription:
      "Brand identity and poster design concept backed by UX research and process documentation.",
    brief:
      "Brainwashed required a bold creative identity with style tiles, user journeys, brainstorming and high-impact poster design.",
    overview:
      "The project combines research-led process work with expressive final print outputs, making it useful as both a process and visual design case study.",
    challenge:
      "The creative direction needed to feel unconventional and energetic while still showing structured thinking behind the final identity and poster work.",
    myRole:
      "I developed style tiles, user journeys, task flows, brainstorming boards, poster designs and final campaign mockups.",
    process:
      "The work began with ideation, task-flow mapping and user journeys, moved into style exploration and culminated in posters and brand application mockups.",
    designDecisions:
      "Bold layout, strong type and expressive visual treatments were supported by UX research tools, creating a rare mix of strategy and print craft.",
    outcome:
      "The final project shows the design thinking behind the creative output, not just the finished visuals.",
    coverImage: "/portfolio-assets/brainwashed/cover.webp",
    galleryImages: [
      "/portfolio-assets/brainwashed/cover.webp",
      "/portfolio-assets/brainwashed/refined-mockup.webp",
      "/portfolio-assets/brainwashed/style-tile-2.webp",
    ],
    processImages: [
      "/portfolio-assets/brainwashed/process/brainstorming.jpg",
      "/portfolio-assets/brainwashed/process/task-flow.jpg",
      "/portfolio-assets/brainwashed/process/brainhealth-1.jpg",
      "/portfolio-assets/brainwashed/process/user-journey-01.jpg",
      "/portfolio-assets/brainwashed/process/user-journey-02.jpg",
      "/portfolio-assets/brainwashed/process/user-journey-03.jpg",
    ],
    featured: false,
    hidden: false,
    status: "published",
    order: 3,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-africology",
    title: "Africology UX Design",
    slug: "africology-ux-design",
    client: "Africology",
    category: "UX Design",
    year: "2023-2024",
    role: "UX/UI Designer",
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    tags: ["UI/UX", "UX Research", "User Journey", "Wellness"],
    shortDescription:
      "UX process and final screens for a premium South African wellness and beauty brand.",
    brief:
      "Africology needed a digital UX direction that reflected its natural, luxurious and authentically South African brand position.",
    overview:
      "The case study includes brainstorming, task flow mapping, user journey documentation and final screen designs for a premium wellness context.",
    challenge:
      "The experience needed to balance luxury, warmth and clarity while showing a structured UX process behind the visual direction.",
    myRole:
      "I mapped the user journey and task flow, explored the design direction and created the final UI screens.",
    process:
      "I started with brainstorming and journey documentation, then moved into task-flow thinking and final screen refinement.",
    designDecisions:
      "Earthy, natural visual cues were paired with clean interface structure to keep the experience premium but usable.",
    outcome:
      "The project demonstrates full UX process thinking from research and flows through to refined interface design.",
    coverImage: "/portfolio-assets/africology/final/africology-thumbnail.png",
    galleryImages: [
      "/portfolio-assets/africology/final/africology-thumbnail.png",
      "/portfolio-assets/africology/final/africology-landing-mockup.png",
      "/portfolio-assets/africology/final/africology-about-mockup.png",
    ],
    processImages: [
      "/portfolio-assets/africology/process/brainstorming-board.jpg",
      "/portfolio-assets/africology/process/brainstorming-detail.jpg",
      "/portfolio-assets/africology/process/task-flow.jpg",
      "/portfolio-assets/africology/process/user-journey.jpg",
      "/portfolio-assets/africology/process/wireframe.jpg",
      "/portfolio-assets/africology/process/style-guide.jpg",
    ],
    featured: false,
    hidden: false,
    status: "published",
    order: 4,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-waddle",
    title: "Waddle Brand Identity & Animated Landing Page",
    slug: "waddle-brand-identity-animated-landing-page",
    client: "Waddle",
    category: "Brand & UI",
    year: "2024",
    role: "Brand & UI Designer",
    tools: ["Figma", "Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop"],
    tags: ["Brand Identity", "Landing Page", "Animation", "UI Design"],
    shortDescription:
      "Brand identity and animated landing page direction for a digital product.",
    brief:
      "Waddle needed a stronger brand presence and a landing page experience that used motion to communicate personality and value.",
    overview:
      "The project combined brand development and landing page UI, with animation intended to make the product experience more engaging than a static page.",
    challenge:
      "The work needed to communicate product personality through both visual identity and movement, even though the current portfolio assets are static screenshots.",
    myRole:
      "I developed the brand direction and designed the landing page screens for an animated web experience.",
    process:
      "The direction moved from brand strengthening into landing page layout and motion-led experience thinking.",
    designDecisions:
      "Animation was used as a core design tool to guide attention and give the digital product a more memorable personality.",
    outcome:
      "The project shows brand thinking, landing page design and motion design direction working together.",
    coverImage: "/portfolio-assets/waddle/waddle-laptop.png",
    galleryImages: [
      "/portfolio-assets/waddle/waddle-laptop.png",
      "/portfolio-assets/waddle/ux-psychology.png",
      "/portfolio-assets/waddle/magazine/cover-page.png",
      "/portfolio-assets/waddle/magazine/back-cover.png",
      "/portfolio-assets/waddle/magazine/about-waddle-1.png",
      "/portfolio-assets/waddle/magazine/about-waddle-2.png",
      "/portfolio-assets/waddle/magazine/fnb-article-1.png",
      "/portfolio-assets/waddle/magazine/fnb-article-2.png",
      "/portfolio-assets/waddle/magazine/nandos-article-1.png",
      "/portfolio-assets/waddle/magazine/nandos-article-2.png",
      "/portfolio-assets/waddle/magazine/ok-ja-article-1.png",
      "/portfolio-assets/waddle/magazine/ok-ja-article-2.png",
    ],
    featured: false,
    hidden: false,
    status: "published",
    order: 7,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-sandbaken",
    title: "SandBaken Boerdery Letterhead Design",
    slug: "sandbaken-boerdery-letterhead-design",
    client: "SandBaken Boerdery",
    category: "Print Design",
    year: "2025-2026",
    role: "Graphic Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Canva"],
    tags: ["Print Design", "Stationery", "Agriculture"],
    shortDescription:
      "Corporate letterhead design for a South African agricultural business.",
    brief:
      "SandBaken Boerdery needed a professional briefhoof for formal business correspondence.",
    overview:
      "This is a focused print design project: a clean, professional letterhead for a farm and agricultural business.",
    challenge:
      "The asset needed to balance rural identity with formal business credibility.",
    myRole:
      "I designed the letterhead and prepared the print-ready PDF.",
    process:
      "The process focused on layout, hierarchy, brand application and print readiness.",
    designDecisions:
      "A clean structure and restrained visual system kept the letterhead professional and legible.",
    outcome:
      "The final letterhead gives the business a polished formal correspondence asset.",
    coverImage: "/portfolio-assets/sandbaken/cover.png",
    galleryImages: ["/portfolio-assets/sandbaken/cover.png"],
    featured: false,
    hidden: true,
    status: "draft",
    order: 12,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-paycentral-10-years",
    title: "PayCentral 10th Anniversary Logo Lockups",
    slug: "paycentral-10th-anniversary-logo-lockups",
    client: "PayCentral",
    category: "Logo Design",
    year: "2025-2026",
    role: "Graphic / Brand Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    tags: ["Logo Design", "Brand Identity", "Anniversary Campaign"],
    shortDescription:
      "Milestone logo lockups for PayCentral's 10th anniversary campaign.",
    brief:
      "PayCentral needed a special logo treatment to celebrate its 10-year milestone across digital and print communications.",
    overview:
      "The project created a suite of anniversary lockups that integrate a milestone mark with the existing PayCentral brand.",
    challenge:
      "The lockups needed to feel celebratory while staying aligned with the established corporate identity.",
    myRole:
      "I designed the anniversary logo lockup variations for flexible use across campaign touchpoints.",
    process:
      "The process explored how to add a milestone mark without disrupting brand recognition.",
    designDecisions:
      "The design kept the existing brand system central and treated the 10-year mark as a confident extension.",
    outcome:
      "The final logo lockups gave PayCentral a flexible anniversary branding asset.",
    coverImage: "/portfolio-assets/paycentral-10-years/cover.png",
    galleryImages: ["/portfolio-assets/paycentral-10-years/cover.png"],
    featured: false,
    hidden: true,
    status: "draft",
    order: 13,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-the-shed-crossfit",
    title: "The Shed CrossFit Social Media Content",
    slug: "the-shed-crossfit-social-media-content",
    client: "The Shed CrossFit",
    category: "Social Media",
    year: "2025-2026",
    role: "Social Media Designer & Content Creator",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "CapCut"],
    tags: ["Social Media", "Fitness", "CrossFit", "Content Design"],
    shortDescription:
      "Bold, community-driven fitness content for a CrossFit gym in Standerton.",
    brief:
      "The Shed needed consistent Instagram content to build presence, attract members and showcase the gym community.",
    overview:
      "The work covers workout content, class announcements, motivational design and branded posts through Social House Media.",
    challenge:
      "CrossFit content needs energy, grit and authenticity while still feeling visually consistent and professional.",
    myRole:
      "I designed social media content and supporting branded assets as part of the Social House Media client work.",
    process:
      "The content direction used bold typography, action-led imagery and punchy layouts to suit fitness Instagram culture.",
    designDecisions:
      "Strong contrast, short copy and high-energy compositions helped the content feel immediate and scroll-stopping.",
    outcome:
      "The work supports a more consistent community presence for the gym on Instagram.",
    coverImage: "/projects/social-house.svg",
    galleryImages: ["/projects/social-house.svg"],
    featured: false,
    hidden: true,
    status: "draft",
    order: 14,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
  {
    id: "proj-mlo-optometrist",
    title: "Mark Lawrence Optometrist Social Media",
    slug: "mark-lawrence-optometrist-social-media",
    client: "Mark Lawrence Optometrist",
    category: "Social Media",
    year: "2025-2026",
    role: "Social Media Designer & Content Creator",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
    tags: ["Social Media", "Healthcare", "Optical", "Content Design"],
    shortDescription:
      "Clean, credible healthcare content for a South African optometry practice.",
    brief:
      "MLO needed social media content that felt professional, approachable and locally relevant across Standerton and Volksrust.",
    overview:
      "The work spans product features, eye health education and branded content created through Social House Media.",
    challenge:
      "Healthcare social content needs warmth and credibility without becoming generic or cold.",
    myRole:
      "I designed Instagram content and visual communication assets for the practice.",
    process:
      "The direction focused on clean hierarchy, friendly product visuals and uncluttered layouts.",
    designDecisions:
      "Modern typography, approachable imagery and restrained layouts helped communicate clarity and care.",
    outcome:
      "The content supports a more polished digital presence for the optometry practice.",
    coverImage: "/projects/mark-lawrence.svg",
    galleryImages: ["/projects/mark-lawrence.svg"],
    featured: false,
    hidden: true,
    status: "draft",
    order: 15,
    createdAt: importedAt,
    updatedAt: importedAt,
  },
];

export function sortProjects(projects: Project[]) {
  return [...projects].sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order;
    }

    return a.title.localeCompare(b.title);
  });
}

export function publicProjects(projects: Project[]) {
  return sortProjects(
    projects.filter((project) => project.status === "published" && !project.hidden),
  );
}

export function findProjectBySlug(projects: Project[], slug: string) {
  return projects.find((project) => project.slug === slug);
}
