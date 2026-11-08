"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { DeveloperProfileCard } from "@/components/ui/developer-profile-card"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons"
import { personalInfo } from "@/lib/resume-data"

function SplitText({
  text,
  className,
  delay = 0,
  reduceMotion = false,
}: {
  text: string
  className?: string
  delay?: number
  reduceMotion?: boolean | null
}) {
  return (
    <span className={className}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={
              reduceMotion ? false : { y: "100%", clipPath: "inset(0 0 100% 0)" }
            }
            animate={{ y: 0, clipPath: "inset(0 0 0% 0)" }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : delay + wi * 0.06,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])
  const glowYSecondary = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)")
    const update = () => setIsDesktop(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:pb-20 lg:pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={reduceMotion ? undefined : { y: glowY }}
          className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-accent/8 blur-[100px]"
        />
        <motion.div
          style={reduceMotion ? undefined : { y: glowYSecondary }}
          className="absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-accent/5 blur-[80px]"
        />
      </div>

      <motion.div
        style={
          isDesktop && !reduceMotion ? { opacity: contentOpacity } : undefined
        }
        className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-8"
      >
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono text-eyebrow font-medium text-accent">
              Hello, I&apos;m
            </span>
            <span className="h-px flex-1 max-w-20 bg-border" />
          </motion.div>

          <h1 className="font-sans text-hero font-bold">
            <span className="block">
              <SplitText
                text={personalInfo.name.split(" ")[0]}
                delay={0.1}
                reduceMotion={reduceMotion}
              />
            </span>
            <span className="mt-1 block text-accent">
              <SplitText
                text={personalInfo.name.split(" ")[1]}
                delay={0.16}
                reduceMotion={reduceMotion}
              />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.4 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-meta text-accent bg-accent/10 px-3 py-1 rounded-full">
              role: Full-Stack / Backend
            </span>
            <span className="font-mono text-meta text-muted-foreground">
              Laravel • PHP • MySQL • System Design
            </span>
          </motion.div>

          <p className="mt-4 max-w-lg text-body text-muted-foreground">
            {personalInfo.heroSummary}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              href="#experience"
              variant="primary"
            >
              View Work
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
            </MagneticButton>
            <MagneticButton
              href="/resume"
              variant="outline"
            >
              View Resume
            </MagneticButton>
            <div className="flex items-center gap-2 sm:ml-1 sm:border-l sm:border-border sm:pl-4">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.4 }}
            className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-meta text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-foreground/80">
              {personalInfo.availability}
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>Notice {personalInfo.noticePeriod}</span>
          </motion.div>
        </div>

        <div className="relative w-full lg:col-span-5">
          <DeveloperProfileCard />
        </div>
      </motion.div>

      <motion.button
        onClick={() =>
          document.querySelector("#about")?.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
          })
        }
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full p-1 text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.25 }}
        aria-label="Scroll to about"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
          }
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
