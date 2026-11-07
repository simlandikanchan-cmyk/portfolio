"use client"

import { useState, useEffect, useRef } from "react"
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion"
import { FileText, X } from "lucide-react"
import { LiveClock } from "./live-clock"
import { ThemeToggle } from "./theme-toggle"
import { navLinks, personalInfo } from "@/lib/resume-data"
import { cn } from "@/lib/utils"

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const linkItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
}

const instantStagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
}

const instantItem = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("")
  const reduceMotion = useReducedMotion()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  })
  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("")

  const drawerStagger = reduceMotion ? instantStagger : stagger
  const drawerItem = reduceMotion ? instantItem : linkItem

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollPos = window.scrollY + 140
      let current = ""
      for (const link of navLinks) {
        const el = document.getElementById(link.href.replace("#", ""))
        if (el && scrollPos >= el.offsetTop) current = link.href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const menuButton = menuButtonRef.current
    const frame = requestAnimationFrame(() => closeButtonRef.current?.focus())
    return () => {
      cancelAnimationFrame(frame)
      menuButton?.focus()
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
  }

  const handleBrandClick = () => {
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
          scrolled || mobileOpen
            ? "border-b border-border bg-background/80 shadow-sm shadow-black/5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 dark:shadow-black/20"
            : "bg-transparent"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-300 sm:px-8",
            scrolled && !mobileOpen ? "h-14" : "h-16"
          )}
        >
          <button
            onClick={handleBrandClick}
            className="group flex items-center gap-2.5 rounded-xl py-1 pr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-mono text-[0.7rem] font-bold tracking-tight text-accent-foreground shadow-sm ring-1 ring-accent/20 transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none">
              {initials}
              <span
                aria-hidden
                className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-secondary"
              />
            </span>
            <span className="hidden flex-col items-start leading-none sm:flex">
              <span className="text-sm font-semibold tracking-tight transition-colors duration-200 group-hover:text-accent">
                {personalInfo.name}
              </span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Full-Stack Developer
              </span>
            </span>
            <span className="sr-only">Back to top</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  "group relative rounded-lg px-3 py-2 text-ui font-medium transition-colors duration-200 hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  active === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={active === link.href ? "page" : undefined}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ease-out",
                    active === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </button>
            ))}
            <div className="ml-3 flex items-center gap-2">
              <LiveClock className="mr-1" />
              <span className="hidden items-center gap-1.5 rounded-full border border-border/70 bg-surface/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground xl:inline-flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Available
              </span>
              <ThemeToggle />
              <a
                href="/resume"
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-ui font-medium text-accent-foreground shadow-sm shadow-accent/20 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none"
              >
                <FileText className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                Resume
              </a>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              onClick={() => setMobileOpen(true)}
              className="relative w-9 h-9 flex items-center justify-center rounded-md border border-border/70 bg-surface/60 hover:bg-muted transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block w-5 h-px bg-foreground" />
                <span className="block w-5 h-px bg-foreground" />
                <span className="block w-5 h-px bg-foreground" />
              </div>
            </button>
          </div>
        </nav>
        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className={cn(
            "absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-accent via-accent to-secondary transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[60] flex h-[100dvh] flex-col bg-background lg:hidden"
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4 sm:px-8">
              <button
                onClick={handleBrandClick}
                className="flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-mono text-[0.7rem] font-bold tracking-tight text-accent-foreground shadow-sm ring-1 ring-accent/20">
                  {initials}
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-secondary"
                  />
                </span>
                <span className="flex flex-col items-start leading-none">
                  <span className="text-sm font-semibold tracking-tight">
                    {personalInfo.name}
                  </span>
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Full-Stack Developer
                  </span>
                </span>
                <span className="sr-only">Back to top</span>
              </button>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  ref={closeButtonRef}
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface hover:bg-muted transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div className="flex min-h-full flex-col">
                <motion.nav
                  variants={drawerStagger}
                  initial={reduceMotion ? false : "hidden"}
                  animate="visible"
                  className="flex-1 px-3 py-4 sm:px-5"
                >
                  {navLinks.map((link, i) => {
                    const isActive = active === link.href
                    return (
                      <motion.button
                        key={link.href}
                        variants={drawerItem}
                        onClick={() => handleNav(link.href)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group flex w-full items-center gap-4 rounded-xl px-3 py-4 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          isActive
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            "font-mono text-meta tabular-nums transition-colors duration-200",
                            isActive
                              ? "text-accent"
                              : "text-muted-foreground group-hover:text-accent"
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-sans text-2xl font-semibold tracking-tight">
                          {link.label}
                        </span>
                        <span
                          className={cn(
                            "h-px transition-all duration-200",
                            isActive
                              ? "w-8 bg-accent"
                              : "w-6 bg-border group-hover:w-8 group-hover:bg-accent"
                          )}
                        />
                      </motion.button>
                    )
                  })}
                </motion.nav>

                <motion.div
                  variants={drawerItem}
                  initial={reduceMotion ? false : "hidden"}
                  animate="visible"
                  className="border-t border-border bg-background p-4 sm:p-5"
                >
                  <a
                    href="/resume"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-ui font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <FileText className="w-4 h-4" />
                    View Resume
                  </a>
                  <p className="mt-3 text-center font-mono text-meta text-muted-foreground">
                    Available for opportunities
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
