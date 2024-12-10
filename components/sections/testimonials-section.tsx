import Image from "next/image"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import Marquee from "@/components/magicui/marquee"
import SparklesText from "@/components/magicui/sparkles-text"

export const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "The laser marking system has revolutionized our production line. The precision and speed are unmatched.",
      author: "Sarah Chen",
      role: "Production Manager",
      company: "TechManu Industries",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      rating: 5,
    },
    {
      content:
        "Exceptional customer service and technical support. They're always there when we need them.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "Global Electronics",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      rating: 5,
    },
    {
      content:
        "The customized laser cleaning solution saved us both time and money. Highly recommended!",
      author: "Emma Thompson",
      role: "Quality Control Manager",
      company: "PrecisionTech",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      rating: 5,
    },
  ]

  return (
    <section className="w-full max-w-7xl">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <SparklesText
            text="What Our Clients Say"
            colors={{ first: "#3b82f6", second: "#22c55e" }}
            sparklesCount={10}
          />
        </h2>
      </div>

      <Marquee className="py-4 [--duration:40s]" pauseOnHover reverse>
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="mx-4 w-[380px] border-black/5 bg-white/50 backdrop-blur-sm"
          >
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn("size-4 fill-yellow-400 text-yellow-400")}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </Marquee>
    </section>
  )
}
