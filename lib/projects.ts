export type ProjectStatus = "draft" | "published";

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
    id: "proj-kleinkrans",
    title: "KleinKrans Brand Identity & Social Media",
    slug: "kleinkrans-brand-identity-social-media",
    client: "KleinKrans",
    category: "Brand Identity",
    year: "2025-2026",
    role: "Brand Designer & Social Media Manager",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Canva"],
    tags: ["Brand Identity", "Logo Design", "Packaging", "Social Media"],
    shortDescription:
      "Complete brand identity and social media launch for a South African free-range egg farm.",
    brief:
      "KleinKrans needed a complete brand identity built from scratch: logo suite, visual direction, colour palette, typography, packaging, brand kit and social media launch.",
    overview:
      "KleinKrans is a free-range egg farm in Mpumalanga built around honest food, natural farming and the line 'more than just a farm'. I created a complete identity system that could work across social, packaging, email signatures and organised brand-kit delivery.",
    challenge:
      "The brand needed to feel premium and honest at the same time: rooted in South African farm culture, natural and trustworthy without becoming corporate, generic or overly rustic.",
    myRole:
      "I designed the logo suite, monogram, wordmarks, pattern system, packaging direction, email signatures and social launch content, then organised the final brand kit for client use.",
    process:
      "The process moved from brand positioning and visual research into logo exploration, colour and type selection, pattern development, packaging application and social content rollout.",
    designDecisions:
      "A heritage serif paired with a clean sans-serif created trust and clarity. Warm farm-inspired colours and illustrative motifs kept the system grounded while still feeling polished and contemporary.",
    outcome:
      "The client received a complete, professional brand kit that works across digital and print, including packaging and social content to support the account launch.",
    coverImage: "/portfolio-assets/kleinkrans/cover.webp",
    galleryImages: [
      "/portfolio-assets/kleinkrans/cover.webp",
      "/portfolio-assets/kleinkrans/artboard-6.webp",
      "/portfolio-assets/kleinkrans/artboard-7.webp",
      "/portfolio-assets/kleinkrans/artboard-8.webp",
      "/portfolio-assets/kleinkrans/artboard-9.webp",
      "/portfolio-assets/kleinkrans/egg-carton-sleeve.jpeg",
    ],
    featured: true,
    hidden: false,
    status: "published",
    order: 4,
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
      "A two-version fintech portal design showing interface refinement from V1 to V2.",
    brief:
      "PayCentral needed a client-facing user portal for payroll and financial data, with a clear interface that business users could trust and navigate confidently.",
    overview:
      "The project included two portal design iterations. V1 established the information architecture and dashboard structure, while V2 refined the visual design with tighter spacing, stronger hierarchy and a more premium fintech feel.",
    challenge:
      "Payroll software has to carry dense information without overwhelming users. The interface needed to feel clear, credible and efficient for non-technical business users.",
    myRole:
      "I designed the portal interface, explored visual hierarchy, refined dashboard patterns and prepared the screens for presentation and handoff.",
    process:
      "I moved from core layout and functional structure into a second visual pass, comparing V1 and V2 decisions to improve clarity, polish and brand expression.",
    designDecisions:
      "V2 reduced visual noise, sharpened spacing, clarified components and gave the product a more confident brand presence while keeping everyday usability central.",
    outcome:
      "The final portal direction demonstrates iterative product thinking and a clearer, more polished experience for a South African fintech platform.",
    coverImage: "/portfolio-assets/paycentral-portal/cover.webp",
    galleryImages: [
      "/portfolio-assets/paycentral-portal/v2-designs/1.webp",
      "/portfolio-assets/paycentral-portal/v2-designs/2.webp",
      "/portfolio-assets/paycentral-portal/v2-designs/3.webp",
      "/portfolio-assets/paycentral-portal/v2-designs/4.webp",
      "/portfolio-assets/paycentral-portal/v2-designs/5.webp",
      "/portfolio-assets/paycentral-portal/v2-designs/6.webp",
      "/portfolio-assets/paycentral-portal/v1-designs/1.webp",
      "/portfolio-assets/paycentral-portal/v1-designs/2.webp",
      "/portfolio-assets/paycentral-portal/v1-designs/3.webp",
      "/portfolio-assets/paycentral-portal/v1-designs/4.webp",
    ],
    featured: true,
    hidden: false,
    status: "published",
    order: 3,
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
    coverImage: "/portfolio-assets/darling-cellars/cover.webp",
    galleryImages: [
      "/portfolio-assets/darling-cellars/cover.webp",
      "/portfolio-assets/darling-cellars/before-after-mockup.webp",
      "/portfolio-assets/darling-cellars/youtube-mockup.webp",
      "/portfolio-assets/darling-cellars/youtube-banner.webp",
      "/portfolio-assets/darling-cellars/phone-mockup.webp",
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
      "I developed style tiles, user journeys, brainstorming boards, poster designs and a final refined mockup.",
    process:
      "The work began with ideation and journey mapping, moved into style exploration and culminated in posters and brand application mockups.",
    designDecisions:
      "Bold layout, strong type and expressive visual treatments were supported by UX research tools, creating a rare mix of strategy and print craft.",
    outcome:
      "The final project shows the design thinking behind the creative output, not just the finished visuals.",
    coverImage: "/portfolio-assets/brainwashed/cover.webp",
    galleryImages: [
      "/portfolio-assets/brainwashed/cover.webp",
      "/portfolio-assets/brainwashed/refined-mockup.webp",
      "/portfolio-assets/brainwashed/style-tile.webp",
      "/portfolio-assets/brainwashed/style-tile-2.webp",
    ],
    featured: false,
    hidden: false,
    status: "published",
    order: 7,
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
    coverImage: "/portfolio-assets/africology/cover.webp",
    galleryImages: [
      "/portfolio-assets/africology/cover.webp",
      "/portfolio-assets/africology/screen-1.webp",
      "/portfolio-assets/africology/screen-2.webp",
    ],
    featured: false,
    hidden: false,
    status: "published",
    order: 2,
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
    coverImage: "/portfolio-assets/waddle/cover.webp",
    galleryImages: [
      "/portfolio-assets/waddle/cover.webp",
      "/portfolio-assets/waddle/screen-2.webp",
    ],
    featured: false,
    hidden: false,
    status: "published",
    order: 1,
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
