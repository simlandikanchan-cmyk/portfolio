"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  Braces,
  Code2,
  Database,
  Layers3,
  Network,
  Terminal,
} from "lucide-react"

const stack = [
  { name: "Laravel", icon: Code2 },
  { name: "PHP", icon: Braces },
  { name: "MySQL", icon: Database },
  { name: "REST APIs", icon: Network },
] as const

const focusAreas = [
  "Backend Architecture",
  "Database Optimization",
  "Scalable Web Applications",
] as const

export function DeveloperProfileCard() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: reduceMotion ? 0 : 0.24,
        duration: reduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-[26rem] md:max-w-[24rem] lg:max-w-[26rem] lg:ml-auto"
    >
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full opacity-10 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 68%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-5 z-20 rounded-md border border-border/80 bg-surface/90 px-2.5 py-1 font-mono text-xs text-accent/80 shadow-sm backdrop-blur-sm"
      >
        {"{ }"}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-xl shadow-black/5 ring-1 ring-black/5 backdrop-blur-xl dark:shadow-black/20 dark:ring-white/5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />

        <div className="relative p-4 lg:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-accent/15" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-eyebrow font-medium uppercase text-foreground/85">
                Developer Profile
              </p>
            </div>
            <Terminal
              aria-hidden
              className="h-3.5 w-3.5 text-muted-foreground/50"
              strokeWidth={1.5}
            />
          </div>

          <div className="mt-4 h-px bg-border" />

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-eyebrow uppercase text-muted-foreground">
                Stack
              </p>
              <span aria-hidden className="font-mono text-meta text-muted-foreground/50">
                04
              </span>
            </div>
            <ul className="mt-2.5 grid grid-cols-2 gap-2">
              {stack.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-background/40 px-3 py-2.5"
                >
                  <Icon
                    aria-hidden
                    className="h-3.5 w-3.5 shrink-0 text-accent/75"
                    strokeWidth={1.6}
                  />
                  <span className="truncate font-mono text-meta text-foreground/80">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-eyebrow uppercase text-muted-foreground">
                Current Focus
              </p>
              <span aria-hidden className="font-mono text-meta text-muted-foreground/50">
                03
              </span>
            </div>
            <ul className="mt-2 space-y-1">
              {focusAreas.map((area, index) => (
                <li
                  key={area}
                  className="flex items-center gap-3 rounded-md px-1 py-1.5"
                >
                  <span className="flex h-2.5 w-2.5 items-center justify-center">
                    <span className="h-1 w-1 rounded-full bg-accent ring-4 ring-accent/5" />
                  </span>
                  <span className="text-body-sm text-foreground/75">{area}</span>
                  <span aria-hidden className="ml-auto font-mono text-meta text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-border/80 bg-background/50 p-3.5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-eyebrow uppercase text-accent">
                  Featured Project
                </p>
                <p className="mt-1.5 font-sans text-lg font-semibold leading-tight text-foreground">
                  DonateBazaar
                </p>
                <p className="mt-0.5 text-meta text-muted-foreground">
                  Charity &amp; Crowdfunding Platform
                </p>
              </div>
              <span className="shrink-0 rounded-md border border-accent/20 bg-accent/10 p-1.5 text-accent">
                <Layers3
                  aria-hidden
                  className="h-3.5 w-3.5"
                  strokeWidth={1.6}
                />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {["Laravel", "PHP", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border/70 bg-surface px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
