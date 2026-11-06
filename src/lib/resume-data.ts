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
    "3+ years building secure Laravel backends and dashboards that hold up in production — payments, security, and clean data models.",
  intro:
    "I'm a full-stack developer with over three years of experience building and improving web applications, primarily with PHP, Laravel, and MySQL. I've worked on everything from payment processing and application security to database optimization and dashboards that turn complex data into useful insights. I enjoy solving problems that go beyond getting a feature to work. For me, good development means building systems that are reliable, maintainable, and ready for the challenges of real-world use.",
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
    { title: "Analytical Thinking", icon: "brain" },
    { title: "Ownership & Accountability", icon: "target" },
    { title: "Attention to Detail", icon: "search" },
    { title: "Self-Motivation", icon: "zap" },
    { title: "Clear Communication", icon: "message-square" },
    { title: "Team Collaboration", icon: "users" },
    { title: "Time Management", icon: "clock" },
  ] as const,
}

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Hair Rap by YoYo Pvt Ltd",
    period: "Jul 2025 – Present",
    achievements: [
      "Owned the backend of DonateBazaar, a fundraising platform built from the ground up — architecture, database design, business logic, and core features.",
      "Built a **five-step Razorpay** payment flow covering verification, webhooks, duplicate requests, and refunds — keeping donations reliable and records consistent.",
      "Hardened the application with **18 security controls**: CSRF protection, rate limiting, role-based permissions, KYC, account-status checks, and audit logging.",
      "Integrated an **Anthropic Claude** support chatbot so donors get quick answers and the donation flow stays accessible.",
      "Queued background emails for welcomes, receipts, campaign updates, and security alerts — without slowing the main app.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Infomaticae Technology Pvt Ltd",
    period: "Dec 2023 – Jul 2025",
    achievements: [
      "Built and maintained features across client web apps, including [Tata Pravesh](https://tatapravesh.com/) and [Lead Tata Pravesh](https://lead.tatapravesh.com/), supporting business operations and user workflows.",
      "Delivered Laravel, PHP, and MySQL features from business requirements while improving the stability of existing systems.",
      "Optimized schemas, SQL queries, and indexes for a **~40% reduction** in query execution time.",
      "Integrated third-party REST APIs and strengthened error handling, logging, and failure recovery.",
      "Collaborated through requirement discussions, sprint planning, code reviews, testing, and releases to ship features on schedule.",
    ],
  },
  {
    role: "Developer",
    company: "Alongkari",
    period: "Feb 2024 – Feb 2025",
    note: "Concurrent contract",
    achievements: [
      "Developed and maintained WordPress websites using custom themes, plugins, and page builders.",
      "Customized layouts and functionality to meet client requirements and improve UX.",
      "Built responsive pages optimized for desktop, tablet, and mobile.",
      "Integrated and configured WordPress plugins for forms, functionality, and content management.",
      "Managed updates, troubleshooting, and performance improvements to keep sites running smoothly.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "FliqaIndia",
    period: "May 2022 – Dec 2023",
    achievements: [
      "Developed and customized WordPress websites using themes, plugins, and page builders.",
      "Created responsive website layouts using Elementor, HTML, CSS, and JavaScript.",
      "Integrated WordPress plugins for client-specific functionality and improved UX.",
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
      "RESTful APIs",
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
        "Built and enhanced features for the Tata Pravesh website using Laravel and PHP, improving database performance and supporting production releases.",
      tech: ["Laravel", "PHP", "MySQL"],
      highlights: [
        "Live production site serving the Tata Pravesh brand",
        "Feature development and performance improvements",
      ],
      href: "https://tatapravesh.com/",
      linkLabel: "Visit site",
    },
    {
      title: "Lead Tata Pravesh",
      description:
        "Built and enhanced backend features for the Tata Pravesh lead management platform using Laravel, PHP, and MySQL to support business operations and user workflows.",
      tech: ["Laravel", "PHP", "MySQL"],
      highlights: [
        "Live platform at lead.tatapravesh.com",
        "Lead workflows backed by reliable Laravel/PHP features",
      ],
      href: "https://lead.tatapravesh.com/",
      linkLabel: "Visit platform",
    },
  {
    title: "Jewelbox",
    description:
      "A live storefront for lab-grown diamond jewellery. The Next.js frontend serves a WordPress-managed catalogue with responsive product imagery and a clean shopping experience.",
    tech: ["Next.js", "Headless WordPress"],
    highlights: [
      "Production e-commerce site at jewelbox.co.in",
      "Next.js storefront backed by WordPress-managed content",
    ],
    href: "https://jewelbox.co.in/",
    linkLabel: "Visit site",
  },
  {
    title: "Paris Beans",
    description:
      "A Paris-inspired café microsite for Hair Rap by YoYo. Built with React, Vite, and Framer Motion, it introduces the café experience with smooth motion and a responsive layout.",
    tech: ["React", "Vite", "Framer Motion"],
    highlights: [
      "Live at parisbeans.vercel.app",
      "Fast single-page experience with motion-led storytelling",
    ],
    href: "https://parisbeans.vercel.app/",
    linkLabel: "Visit site",
  },
  {
    title: "Vehicle Theft Analysis",
    description:
      "A regional vehicle theft dashboard built with PostgreSQL and Power BI. I analyzed theft patterns across regions, found a 70.6% rise, and broke the results down so they could be used for planning and enforcement.",
    tech: ["PostgreSQL", "Power BI", "DAX"],
    highlights: [
      "Found a 70.6% rise across monitored regions",
      "Risk scoring and heatmaps by region",
    ],
  },
  {
    title: "Blinkit Sales Dashboard",
    description:
      "A Blinkit sales dashboard built in Power BI with custom DAX measures, dynamic KPIs, and trend analysis for sales tracking.",
    tech: ["Power BI", "DAX"],
    highlights: [
      "Custom KPI definitions and live tracking",
      "Sales trends with drill-downs",
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
