import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { PrintButton } from "@/components/ui/print-button"
import { RichText } from "@/components/ui/rich-text"
import {
  certifications,
  education,
  experiences,
  personalInfo,
  projects,
  skillGroups,
} from "@/lib/resume-data"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Kanchan Simlandi — Full-Stack / Backend Developer specializing in Laravel, PHP, MySQL, and System Design.",
  alternates: {
    canonical: "/resume",
  },
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="border-b border-neutral-200 pb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
      {children}
    </h2>
  )
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-10 text-neutral-900 sm:px-6 sm:py-14 print:bg-white print:p-0">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-4 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-ui text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2 text-ui font-medium text-neutral-800 transition-colors duration-200 hover:border-neutral-400 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download PDF
            </a>
            <PrintButton />
          </div>
        </div>

        <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-10 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <header className="border-b border-neutral-200 pb-6">
            <h1 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl">
              {personalInfo.name}
            </h1>
            <p className="mt-1 font-sans text-lg font-medium text-neutral-700">
              {personalInfo.role}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#3f5721]">
              {personalInfo.tagline}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-neutral-600">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {personalInfo.phone}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {personalInfo.location}
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900"
              >
                LinkedIn
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900"
              >
                GitHub
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-3 text-[12.5px] leading-relaxed text-neutral-600">
              <span className="font-medium text-[#3f5721]">
                {personalInfo.availability}
              </span>
              {" · "}Notice period: {personalInfo.noticePeriod}
              {" · "}Preferred locations:{" "}
              {personalInfo.preferredLocations.join(", ")}
            </p>
          </header>

          <section className="mt-6 print:break-inside-avoid">
            <SectionTitle>Summary</SectionTitle>
            <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-700">
              {personalInfo.intro}
            </p>
          </section>

          <section className="mt-6">
            <SectionTitle>Experience</SectionTitle>
            <div className="mt-4 space-y-5">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.period}`} className="print:break-inside-avoid">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-sans text-[15px] font-semibold">
                      {exp.role}
                      <span className="font-normal text-neutral-600">
                        {" "}
                        · {exp.company}
                      </span>
                      {exp.note && (
                        <span className="ml-2 rounded border border-neutral-300 px-1 py-0.5 font-mono text-[9px] uppercase tracking-wide text-neutral-500">
                          {exp.note}
                        </span>
                      )}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-[13px] leading-relaxed text-neutral-700"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#4e6b27]" />
                        <span>
                          <RichText text={achievement} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 print:break-inside-avoid">
            <SectionTitle>Selected Projects</SectionTitle>
            <div className="mt-4 space-y-3">
              {projects.map((project) => (
                <div key={project.title}>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="font-sans text-[14px] font-semibold">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-neutral-500">
                      {project.tech.join(" · ")}
                    </span>
                    {project.href?.startsWith("http") && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[11px] font-medium text-[#3f5721] underline decoration-[#4e6b27]/40 underline-offset-2 hover:decoration-[#4e6b27]"
                      >
                        {project.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-neutral-700">
                    {project.highlights[0]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 print:break-inside-avoid">
            <SectionTitle>Skills</SectionTitle>
            <div className="mt-3 space-y-2">
              {skillGroups.map((group) => (
                <div key={group.category} className="text-[13px] leading-relaxed">
                  <span className="font-semibold text-neutral-800">
                    {group.category}:
                  </span>{" "}
                  <span className="text-neutral-700">
                    {group.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <section className="print:break-inside-avoid">
              <SectionTitle>Education</SectionTitle>
              <div className="mt-3 space-y-3">
                {education.map((item) => (
                  <div key={`${item.degree}-${item.institution}`}>
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-sans text-[13.5px] font-semibold">
                        {item.degree}
                        {item.field ? `, ${item.field}` : ""}
                      </h3>
                      <span className="font-mono text-[10.5px] uppercase tracking-wide text-neutral-500">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-[12.5px] text-neutral-600">
                      {[item.institution, item.location, item.score]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="print:break-inside-avoid">
              <SectionTitle>Certifications &amp; Languages</SectionTitle>
              <div className="mt-3 space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.title}>
                    <h3 className="font-sans text-[13.5px] font-semibold">
                      {cert.title}
                    </h3>
                    <p className="text-[12.5px] text-neutral-600">{cert.issuer}</p>
                  </div>
                ))}
                <div>
                  <h3 className="font-sans text-[13.5px] font-semibold">
                    Languages
                  </h3>
                  <p className="text-[12.5px] text-neutral-600">
                    {personalInfo.languages
                      .map((language) => `${language.name} (${language.level})`)
                      .join(", ")}
                  </p>
                </div>
              </div>
            </section>
          </div>

          <footer className="mt-8 border-t border-neutral-200 pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
            {personalInfo.name} · Updated {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </footer>
        </article>
      </div>
    </main>
  )
}
