"use client"

import { useEffect, useState } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import { navLinks } from "@/lib/resume-data"

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const [active, setActive] = useState("")
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => ({
        id: l.href.replace("#", ""),
        top: document.getElementById(l.href.replace("#", ""))?.offsetTop ?? 0,
      }))
      const scrollPos = window.scrollY + 120
      let current = sections[0]?.id ?? ""
      for (const s of sections) {
        if (scrollPos >= s.top) current = s.id
      }
      setActive(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      <div className="relative w-px h-32 bg-border">
        <motion.div
          className="absolute top-0 left-0 w-full bg-accent"
          style={{ height }}
        />
      </div>
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => {
          const id = link.href.replace("#", "")
          return (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({
                  behavior: reduceMotion ? "auto" : "smooth",
                })
              }
              className="group relative flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={link.label}
            >
              <span
                className={`h-2 w-2 rounded-full transition-[background-color,transform] duration-300 ${
                  active === id
                    ? "scale-125 bg-accent"
                    : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                }`}
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-meta text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {link.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
