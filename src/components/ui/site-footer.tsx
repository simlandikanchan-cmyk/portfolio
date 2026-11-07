"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { personalInfo } from "@/lib/resume-data"
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons"

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

export function SiteFooter() {
  const reduceMotion = useReducedMotion()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <p className="text-xl font-semibold leading-tight">
              {personalInfo.name}
            </p>
            <p className="mt-1 font-mono text-eyebrow uppercase text-accent">
              {personalInfo.role}
            </p>
            <p className="mt-3 text-body-sm text-muted-foreground">
              Backend and full-stack work for production web apps.
            </p>
          </div>

          <nav
            aria-label="Social links"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:justify-end"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => {
              const isExternal = /^https?:\/\//.test(href)

              return (
                <a
                  key={label}
                  href={href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group inline-flex items-center gap-1.5 text-ui text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Icon
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  {label}
                </a>
              )
            })}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-meta text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalInfo.name}.
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
