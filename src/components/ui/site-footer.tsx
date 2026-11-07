"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUp, FileText, Mail, MapPin, Phone } from "lucide-react"
import { personalInfo } from "@/lib/resume-data"
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Featured", href: "#featured" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: LinkedInIcon,
  },
]

const phoneHref = `tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`

export function SiteFooter() {
  const reduceMotion = useReducedMotion()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="text-xl font-semibold leading-tight">
              {personalInfo.name}
            </p>
            <p className="mt-1 font-mono text-eyebrow uppercase text-accent">
              {personalInfo.role}
            </p>
            <p className="mt-3 text-body-sm text-muted-foreground">
              Backend and full-stack work for production web apps. Currently
              open to full-time roles.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-ui font-medium text-foreground transition-colors duration-200 hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Say hello
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-muted-foreground">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex text-ui text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-ui text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background [overflow-wrap:anywhere]"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 text-ui text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-ui text-muted-foreground">
                <MapPin
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  aria-hidden="true"
                />
                {personalInfo.location}
              </li>
              <li>
                <a
                  href="/resume"
                  className="inline-flex items-center gap-2 text-ui text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <FileText
                    className="h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  Resume
                </a>
              </li>
            </ul>

            <nav aria-label="Social links" className="mt-5">
              <ul className="flex flex-wrap items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => {
                  const isExternal = /^https?:\/\//.test(href)

                  return (
                    <li key={label}>
                      <a
                        href={href}
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-meta text-muted-foreground transition-colors duration-200 hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <Icon
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-meta text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with
            Next.js and Tailwind CSS.
          </p>
          <motion.button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: reduceMotion ? "auto" : "smooth",
              })
            }
            className="group inline-flex items-center gap-1.5 self-start text-meta text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:self-auto"
            whileHover={reduceMotion ? undefined : { y: -2 }}
          >
            Back to top
            <ArrowUp
              className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
