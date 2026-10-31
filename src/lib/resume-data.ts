export interface Experience {
  role: string
  company: string
  period: string
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
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
}

export interface Certification {
  title: string
  issuer: string
}

export const personalInfo = {
  name: "Kanchan Simlandi",
  role: "Full-Stack / Backend Developer",
  tagline: "Laravel · PHP · MySQL · System Design",
  intro:
    "I'm a full-stack developer with over three years of experience building and improving web applications, primarily with PHP, Laravel, and MySQL. I've worked on everything from payment processing and application security to database optimization and dashboards that turn complex data into useful insights. I enjoy solving problems that go beyond getting a feature to work. For me, good development means building systems that are reliable, maintainable, and ready for the challenges of real-world use.",
  phone: "+91-8617830875",
  email: "1707368kanchan@gmail.com",
  location: "Suri, Birbhum, 731101",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/simlandikanchan-cmyk/",
  languages: ["English", "Hindi", "Bengali"] as const,
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
      "Took ownership of building DonateBaazar, a fundraising platform developed from the ground up. Worked across the application’s backend architecture, database design, business logic, and core features, building a foundation that supports its growing functionality.",
      "Built a secure, five-step Razorpay payment flow that handles payment verification, webhook events, duplicate requests, and refunds, helping ensure donations are processed reliably and financial records remain consistent.",
      "Strengthened application security with 18 implemented controls, covering CSRF protection, rate limiting, role-based permissions, KYC verification, account-status checks, and audit logging.",
      "Integrated an AI-powered support chatbot using Anthropic Claude to help donors find answers to common questions quickly and make the donation experience more accessible.",
      "Set up background email processing for welcome messages, donation receipts, campaign updates, and security alerts, allowing routine communication to run without slowing down the main application.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Infomaticae Technology Pvt Ltd",
    period: "Dec 2023 – Jul 2025",
    achievements: [
      "Contributed to the development and maintenance of multiple web applications, including [Tata Pravesh](https://tatapravesh.com/) and its lead management platform, [Lead Tata Pravesh](https://lead.tatapravesh.com/), building and enhancing features to support business operations and user workflows.",
      "Developed backend functionality using Laravel, PHP, and MySQL, translating business requirements into reliable application features while maintaining existing systems and improving overall application stability.",
      "Optimized database schemas, SQL queries, and indexes to improve application performance, achieving an approximately 40% reduction in query execution time in the areas optimized.",
      "Integrated third-party REST APIs and strengthened error handling, logging, and failure recovery to make integrations more reliable and troubleshooting more efficient.",
      "Worked closely with the development team across requirement discussions, sprint planning, code reviews, testing, and releases, helping deliver features on schedule while maintaining code quality.",
    ],
  },
  {
    role: "Developer",
    company: "Alongkari",
    period: "Feb 2024 – Feb 2025",
    achievements: [
      "Developed and maintained WordPress websites using custom themes, plugins, and page builders.",
      "Customized website layouts and functionality to meet client requirements and improve user experience.",
      "Built responsive, user-friendly web pages optimized for desktop, tablet, and mobile devices.",
      "Integrated and configured WordPress plugins for forms, website functionality, and content management.",
      "Managed website updates, troubleshooting, and performance improvements to ensure smooth operation.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "FliqaIndia",
    period: "May 2022 – Dec 2023",
    achievements: [
      "Developed and customized WordPress websites using themes, plugins, and page builders.",
      "Created responsive website layouts using Elementor, HTML, CSS, and JavaScript.",
      "Integrated and configured WordPress plugins to deliver client-specific functionality and improve user experience.",
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages and Frameworks",
    skills: ["PHP", "Laravel", "JavaScript", "HTML5", "CSS3", "SQL"],
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
    institution: "KIIT University",
    location: "Bhubaneswar",
    period: "2017 – 2021",
  },
  {
    degree: "Class 12 (Higher Secondary)",
    institution: "Birbhum Zilla School",
    location: "Birbhum",
    period: "2014 – 2016",
  },
  {
    degree: "Class 10 (Secondary)",
    institution: "Birbhum Zilla School",
    location: "Birbhum",
    period: "2014",
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
