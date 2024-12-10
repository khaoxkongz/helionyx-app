import { ArrowRight, Scissors, Sparkles, Stamp } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import Marquee from "@/components/magicui/marquee"

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Stamp className="size-6 text-white" />,
      title: "Laser Marking",
      description:
        "High-precision marking solutions for permanent product identification and traceability.",
      gradient: "from-blue-500 to-cyan-500",
      arrowColor: "text-blue-500",
    },
    {
      icon: <Scissors className="size-6 text-white" />,
      title: "Laser Cutting",
      description:
        "Advanced cutting systems for precise material processing across various industries.",
      gradient: "from-red-500 to-orange-500",
      arrowColor: "text-red-500",
    },
    {
      icon: <Sparkles className="size-6 text-white" />,
      title: "Laser Cleaning",
      description:
        "Eco-friendly cleaning technology for surface preparation and rust removal.",
      gradient: "from-green-500 to-emerald-500",
      arrowColor: "text-green-500",
    },
    {
      icon: <Stamp className="size-6 text-white" />,
      title: "Dot Marking",
      description:
        "Precise dot matrix marking for durable and clear product identification and coding.",
      gradient: "from-purple-500 to-pink-500",
      arrowColor: "text-purple-500",
    },
  ]

  return (
    <section className="w-full">
      <div className="mb-16">
        <Marquee className="[--duration:20s]" pauseOnHover>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative mx-4 w-80 border-black/5 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow"
            >
              <CardContent className="p-6">
                <div
                  className={`mb-4 flex size-12 items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient}`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowRight className={`size-5 ${feature.arrowColor}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
