import { Metadata } from "next"

import { ApplicationSelector } from "@/components/products/application-selector"
import { MaterialGuide } from "@/components/products/material-guide"
import { ROICalculator } from "@/components/products/roi-calculator"
import { SectionReveal } from "@/components/common/section-reveal"

export const metadata: Metadata = {
  title: "Solutions | Helionyx",
  description: "Explore our laser solutions and find the perfect match for your industry",
}

export default function SolutionsPage() {
  return (
    <div className="container mx-auto space-y-24 px-4 py-24">
      {/* Applications Section */}
      <SectionReveal>
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold">Laser Solutions</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover the perfect laser solution for your industry
          </p>
        </div>
        <ApplicationSelector />
      </SectionReveal>

      {/* Material Guide Section */}
      <SectionReveal>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold">Material Processing Guide</h2>
          <p className="mt-4 text-muted-foreground">
            Find the optimal processing parameters for your materials
          </p>
        </div>
        <MaterialGuide />
      </SectionReveal>

      {/* ROI Calculator Section */}
      <SectionReveal>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold">Calculate Your ROI</h2>
          <p className="mt-4 text-muted-foreground">
            See how quickly your investment in laser technology pays off
          </p>
        </div>
        <div className="flex justify-center">
          <ROICalculator />
        </div>
      </SectionReveal>
    </div>
  )
} 
