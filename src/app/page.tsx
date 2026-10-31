import { Navbar } from "@/components/ui/navbar"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { SiteFooter } from "@/components/ui/site-footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { CaseStudy } from "@/components/sections/case-study"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Education } from "@/components/sections/education"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <Experience />
        <CaseStudy />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
