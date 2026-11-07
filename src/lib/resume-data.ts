export interface Experience {
  role: string
  company: string
  period: string
  note?: string
  achievements: string[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  highlights: string[]
  href?: string
  linkLabel?: string
  image?: string
  imageAlt?: string
}

export interface Education {
  degree: string
  field?: string
  institution: string
  location: string
  period: string
  score?: string
}

export interface Certification {
  title: string
  issuer: string
}

export const personalInfo = {
  name: "Kanchan Simlandi",
  role: "Full-Stack / Backend Developer",
  tagline: "Laravel · PHP · MySQL · System Design",
  heroSummary:
    "I've spent four years building Laravel backends and dashboards for production apps. Most of that work has been payments, application security, and database design that has to hold up after launch.",
  intro:
    "I'm a full-stack developer with over four years of experience, mostly in PHP, Laravel, and MySQL. I've worked on payment processing, application security, database optimisation, and Power BI dashboards that turn raw data into something teams can act on. I like the parts of development that don't show up in a demo: edge cases, data flow, and code that the next developer can follow. That is what keeps an application dependable once it is live.",
  phone: "+91-8617830875",
  email: "1707368kanchan@gmail.com",
  location: "Suri, Birbhum, West Bengal 731101",
  availability: "Open to full-time roles",
  noticePeriod: "2–3 months, open to discussion",
  preferredLocations: [
    "Kolkata",
    "Bhubaneswar",
    "Bangalore",
    "Noida",
    "Hyderabad",
    "Ahmedabad",
  ],
  linkedin: "https://www.linkedin.com/in/kanchan-simlandi-47932219b",
  github: "https://github.com/simlandikanchan-cmyk/",
  languages: [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Fluent" },
  ] as const,
  strengths: [
    { title: "Debugging edge cases", icon: "brain" },
    { title: "Owning features end to end", icon: "target" },
    { title: "Detailed code reviews", icon: "search" },
    { title: "Learning new tools quickly", icon: "zap" },
    { title: "Clear written updates", icon: "message-square" },
    { title: "Working with product and QA", icon: "users" },
    { title: "Shipping on schedule", icon: "clock" },
  ] as const,
}

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Hair Rap by YoYo Pvt Ltd",
    period: "Jul 2025 – Present",
    achievements: [
      "Owned the backend of DonateBazaar from the first schema to launch: architecture, database design, business logic, and core donation features.",
      "Built a **five-step Razorpay** payment flow with server-side verification, webhooks, duplicate-request handling, and refunds, so donation records stay accurate.",
      "Added **18 security controls**, including CSRF protection, rate limiting, role-based permissions, KYC checks, account-status enforcement, and audit logging.",
      "Integrated an **Anthropic Claude** support chatbot to answer common donor questions without pulling the team into every enquiry.",
      "Moved welcome emails, receipts, campaign updates, and security alerts onto queued jobs so they don't slow the main request.",
      "Worked with the team through planning, code review, testing, and releases to keep DonateBazaar features shipping on schedule.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Infomaticae Technology Pvt Ltd",
    period: "Dec 2023 – Jul 2025",
    achievements: [
      "Built and maintained features for client applications, including [Tata Pravesh](https://tatapravesh.com/) and [Lead Tata Pravesh](https://lead.tatapravesh.com/), which support day-to-day business workflows.",
      "Turned business requirements into Laravel, PHP, and MySQL features, and fixed stability issues in the existing codebase.",
      "Reworked schemas, SQL queries, and indexes, cutting query execution time by about **40%**.",
      "Integrated third-party REST APIs, with error handling, logging, and retries for when they fail.",
      "Took part in requirement discussions, sprint planning, code reviews, testing, and releases.",
    ],
  },
  {
    role: "Developer",
    company: "Alongkari",
    period: "Feb 2024 – Feb 2025",
    note: "Concurrent contract",
    achievements: [
      "Built and maintained WordPress sites using custom themes, plugins, and page builders.",
      "Customised layouts and functionality around each client's requirements.",
      "Built responsive pages that hold up on desktop, tablet, and mobile.",
      "Set up plugins for forms, content management, and client-specific features.",
      "Handled updates, troubleshooting, and performance fixes to keep live sites running.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "FliqaIndia",
    period: "May 2022 – Dec 2023",
    achievements: [
      "Developed and customised WordPress websites using themes, plugins, and page builders.",
      "Built responsive layouts with Elementor, HTML, CSS, and JavaScript.",
      "Integrated plugins for client-specific functionality and smoother user flows.",
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages and Frameworks",
    skills: ["PHP", "Laravel", "JavaScript", "HTML5", "CSS3", "SQL", "OOP", "MVC"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "GitHub", "RESTful APIs", "Postman"],
  },
  {
    category: "Databases and Data Modeling",
    skills: [
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "ER Modeling",
      "Database Indexing",
      "Triggers",
      "Schema Design",
    ],
  },
  {
    category: "Payments and Integrations",
    skills: [
      "Razorpay",
      "Anthropic Claude API",
      "Webhooks",
      "Payment Verification",
      "Refund Workflows",
    ],
  },
  {
    category: "Security Engineering",
    skills: [
      "CSRF Protection",
      "HMAC Signature Verification",
      "Role-Based Access Control",
      "Middleware",
      "KYC Workflows",
      "Rate Limiting",
      "Audit Logging",
    ],
  },
  {
    category: "Data and BI",
    skills: [
      "Power BI",
      "DAX",
      "KPI Reporting",
      "Data Cleaning",
      "Dashboard Development",
      "ETL Fundamentals",
    ],
  },
]

export const featuredStats = [
  { label: "Eloquent Models", value: 50, suffix: "+" },
  { label: "Database Migrations", value: 90, suffix: "+" },
  { label: "Controllers", value: 70, suffix: "+" },
  { label: "Security Controls", value: 18, suffix: "" },
  { label: "Middleware Components", value: 8, suffix: "" },
  { label: "Payment Verification Layers", value: 5, suffix: "" },
]

export const projects: Project[] = [
  {
    title: "Tata Pravesh",
    description:
      "Maintained and improved the Tata Pravesh website in Laravel and PHP, including database performance work and production releases.",
    tech: ["Laravel", "PHP", "MySQL"],
    highlights: [
      "Live site at tatapravesh.com",
      "Laravel and PHP feature work on a production site",
      "Query and schema tuning alongside releases",
    ],
    href: "https://tatapravesh.com/",
    linkLabel: "Visit site",
    image: "/image/tatapravesh.png",
    imageAlt: "Tata Pravesh website homepage",
  },
  {
    title: "Lead Tata Pravesh",
    description:
      "Built Laravel, PHP, and MySQL features for the Tata Pravesh lead management platform and its internal workflows.",
    tech: ["Laravel", "PHP", "MySQL"],
    highlights: [
      "Live platform at lead.tatapravesh.com",
      "Backend features for lead management workflows",
      "Laravel, PHP, and MySQL",
    ],
    href: "https://lead.tatapravesh.com/",
    linkLabel: "Visit platform",
    image: "/image/lead.png",
    imageAlt: "Lead Tata Pravesh lead management platform",
  },
  {
    title: "Jewelbox",
    description:
      "A live Next.js storefront for lab-grown diamond jewellery, with products managed through WordPress.",
    tech: ["Next.js", "Headless WordPress"],
    highlights: [
      "Live e-commerce site at jewelbox.co.in",
      "Next.js frontend served from headless WordPress",
      "Responsive product imagery and browsing",
    ],
    href: "https://jewelbox.co.in/",
    linkLabel: "Visit site",
    image: "/image/jewelbox.png",
    imageAlt: "Jewelbox jewellery storefront homepage",
  },
  {
    title: "Paris Beans",
    description:
      "A single-page café microsite for Hair Rap by YoYo, built with React, Vite, and Framer Motion.",
    tech: ["React", "Vite", "Framer Motion"],
    highlights: [
      "Live at parisbeans.vercel.app",
      "React and Vite single-page build",
      "Scroll and entry transitions with Framer Motion",
    ],
    href: "https://parisbeans.vercel.app/",
    linkLabel: "Visit site",
    image: "/image/parisbeans.png",
    imageAlt: "Paris Beans cafe microsite homepage",
  },
  {
    title: "Vehicle Theft Analysis",
    description:
      "A Power BI dashboard over PostgreSQL data that surfaced a 70.6% rise in vehicle theft, with regional risk scores and heatmaps.",
    tech: ["PostgreSQL", "Power BI", "DAX"],
    highlights: [
      "Uncovered a 70.6% rise across monitored regions",
      "Risk scores and heatmaps broken down by region",
      "PostgreSQL, Power BI, and DAX",
    ],
    image: "/image/vechile.png",
    imageAlt: "Vehicle theft analysis dashboard with regional risk insights",
  },
  {
    title: "Blinkit Sales Dashboard",
    description:
      "A Power BI sales dashboard with custom DAX measures, period comparisons, and drill-downs into the numbers.",
    tech: ["Power BI", "DAX"],
    highlights: [
      "Custom DAX measures for KPI definitions",
      "Trend analysis with drill-downs",
      "Power BI and DAX",
    ],
  },
]

export const education: Education[] = [
  {
    degree: "B.E. / B.Tech",
    field: "Electronics and Electrical Engineering",
    institution: "KIIT University",
    location: "Bhubaneswar, Odisha",
    period: "2017 – 2021",
    score: "71.6%",
  },
  {
    degree: "Class 12 (Higher Secondary)",
    institution: "Birbhum Zilla School",
    location: "Birbhum",
    period: "2014 – 2016",
    score: "72.6%",
  },
  {
    degree: "Class 10 (Secondary)",
    institution: "Birbhum Zilla School",
    location: "Birbhum",
    period: "2014",
    score: "86%",
  },
]

export const certifications: Certification[] = [
  {
    title: "Power BI Certification (Basic to Advanced)",
    issuer: "Rajdeep Dar Pathshala",
  },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const
