import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { ProcessSection } from "@/components/sections/process-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <SolutionsSection />
      <ProcessSection />
      <WhyUsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
