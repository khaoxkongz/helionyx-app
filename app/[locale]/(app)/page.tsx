import { cn } from "@/lib/utils"
import GridPattern from "@/components/magicui/grid-pattern"
import { ContactSection } from "@/components/sections/contact-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { HeroSection } from "@/components/sections/hero-section"
import { LatestProjectsSection } from "@/components/sections/latest-projects-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"

export default async function IndexPage() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center justify-center gap-24 overflow-hidden bg-gradient-to-b from-background to-background/80 px-6 py-24 sm:px-20">
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <LatestProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />

      <GridPattern
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
    </div>
  )
}
