import Image from "next/image"
import { Check, Clock, Shield, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import SparklesText from "@/components/magicui/sparkles-text"

export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Shield className="size-12 text-blue-500" />,
      title: "Industry Leading Quality",
      description:
        "Our laser systems are built with premium components and undergo rigorous quality control to ensure exceptional performance and longevity.",
      imageSrc:
        "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80",
    },
    {
      icon: <Clock className="size-6 text-green-500" />,
      title: "24/7 Technical Support",
      description:
        "Round-the-clock expert assistance ensures your operations run smoothly with minimal downtime and maximum productivity.",
      imageSrc:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    },
    {
      icon: <Star className="size-6 text-yellow-500" />,
      title: "Customized Solutions",
      description:
        "We tailor our laser systems to meet your specific requirements, ensuring optimal performance for your unique applications.",
      imageSrc:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    },
    {
      icon: <Check className="size-6 text-purple-500" />,
      title: "Proven Track Record",
      description:
        "With years of experience and countless successful installations, we've earned the trust of industry leaders worldwide.",
      imageSrc:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80",
    },
  ]

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        <SparklesText
          text="Why Choose Us?"
          colors={{ first: "#3b82f6", second: "#22c55e" }}
          sparklesCount={10}
        />
      </h2>
      <div className="flex flex-col space-y-24">
        {reasons.map((reason, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-black/5 bg-white/50 backdrop-blur-sm"
          >
            <CardContent
              className={`flex flex-col gap-8 p-0 sm:flex-row ${
                index % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="relative h-64 w-full sm:h-auto sm:w-1/2">
                <Image
                  src={reason.imageSrc}
                  alt={reason.title}
                  width={800}
                  height={600}
                  className="size-full object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:w-1/2">
                <div className="mb-6">{reason.icon}</div>
                <h3 className="mb-4 text-2xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
