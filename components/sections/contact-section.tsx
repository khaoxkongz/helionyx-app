import { Mail, MapPin, Phone } from "lucide-react"

import ShimmerButton from "@/components/magicui/shimmer-button"
import SparklesText from "@/components/magicui/sparkles-text"

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="size-6 text-blue-500" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <Mail className="size-6 text-green-500" />,
      title: "Email",
      details: "contact@helionyx.com",
      subtitle: "Online support",
    },
    {
      icon: <MapPin className="size-6 text-red-500" />,
      title: "Office",
      details: "123 Innovation Drive",
      subtitle: "Silicon Valley, CA 94025",
    },
  ]

  return (
    <section className="relative w-full max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 backdrop-blur-sm">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          <SparklesText
            text="Get in Touch"
            colors={{ first: "#3b82f6", second: "#22c55e" }}
            sparklesCount={10}
          />
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Have questions about our laser solutions? Our team of experts is here
          to help you find the perfect solution for your needs.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border border-black/5 bg-white/50 p-6 text-center backdrop-blur-sm"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-gray-100">
              {info.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold">{info.title}</h3>
            <p className="font-medium text-blue-600">{info.details}</p>
            <p className="text-sm text-muted-foreground">{info.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <ShimmerButton className="shadow-lg">
          <span className="whitespace-pre-wrap text-center text-base font-semibold leading-none tracking-tight text-white">
            Schedule a Consultation
          </span>
        </ShimmerButton>
      </div>
    </section>
  )
}
