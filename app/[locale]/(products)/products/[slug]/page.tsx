import { Metadata } from "next"

import { SectionReveal } from "@/components/common/section-reveal"
import { ProductComparison } from "@/components/products/product-comparison"
import { ProductConfigurator } from "@/components/products/product-configurator"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  // Add your metadata generation logic here
  return {
    title: "Laser System Configuration - Helionyx",
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Add your product data fetching logic here
  // if (!product) return notFound()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        <SectionReveal>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Configure Your Laser System</h1>
            <p className="text-lg text-muted-foreground">
              Customize your laser system with our interactive configurator.
              Choose from various power options and features to match your
              specific requirements.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <ProductConfigurator />
        </SectionReveal>
      </div>

      <SectionReveal className="mt-24">
        <h2 className="mb-8 text-3xl font-bold">Compare Models</h2>
        <ProductComparison />
      </SectionReveal>
    </div>
  )
}
