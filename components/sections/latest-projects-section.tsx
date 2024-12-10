import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import ShimmerButton from "@/components/magicui/shimmer-button"
import SparklesText from "@/components/magicui/sparkles-text"

export const LatestProjectsSection = () => {
  const projects = [
    {
      title: "Automotive Parts Marking",
      description: "High-speed laser marking system for automotive components",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      category: "Manufacturing",
    },
    {
      title: "Medical Device Engraving",
      description: "Precision laser engraving for medical instruments",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80",
      category: "Healthcare",
    },
    {
      title: "Metal Surface Cleaning",
      description: "Industrial laser cleaning for large metal structures",
      image:
        "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=80",
      category: "Industrial",
    },
  ]

  return (
    <section className="w-full max-w-7xl">
      <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          <SparklesText
            text="Latest Projects"
            colors={{ first: "#3b82f6", second: "#22c55e" }}
            sparklesCount={10}
          />
        </h2>
        <ShimmerButton className="bg-white/10">
          <span className="flex items-center whitespace-pre-wrap text-center text-base font-semibold leading-none tracking-tight text-white">
            View All Projects
            <ArrowUpRight className="ml-2 size-4" />
          </span>
        </ShimmerButton>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-black/5 bg-white/50 backdrop-blur-sm"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-6">
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                {project.category}
              </span>
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <div className="absolute right-4 top-4 rounded-full bg-white/90 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ArrowUpRight className="size-5 text-blue-500" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
