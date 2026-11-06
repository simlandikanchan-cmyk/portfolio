"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { personalInfo } from "@/lib/resume-data"

const stack = ["Laravel", "PHP", "MySQL"] as const

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
      className="relative mx-auto w-full max-w-[22rem] md:max-w-[21rem] lg:ml-auto lg:max-w-[23rem]"
    >
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 68%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-4 z-20 rounded-md border border-border/80 bg-surface/90 px-2.5 py-1 font-mono text-xs text-accent/80 shadow-sm backdrop-blur-sm"
      >
        {"{ }"}
      </div>

      <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-xl shadow-black/10 ring-1 ring-black/5 dark:shadow-black/30 dark:ring-white/5">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/image/profile.png"
            alt={personalInfo.name}
            width={1086}
            height={1448}
            sizes="(min-width: 1024px) 23rem, (min-width: 768px) 21rem, 88vw"
            preload
            className="h-full w-full object-cover object-center"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
          />

          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
              {personalInfo.role}
            </p>
            <p className="mt-1 text-lg font-semibold leading-tight text-white">
              {personalInfo.name}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-white/15 bg-white/10 px-2 py-0.5 font-mono text-[11px] text-white/80 backdrop-blur-sm"
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
