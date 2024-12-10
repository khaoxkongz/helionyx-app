import Image from "next/image"
import { ArrowRightIcon, PlayCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import AnimatedShinyText from "@/components/magicui/animated-shiny-text"
import ShimmerButton from "@/components/magicui/shimmer-button"
import SparklesText from "@/components/magicui/sparkles-text"

import NumberTicker from "../magicui/number-ticker"

export const HeroSection = () => {
  return (
    <section className="relative w-full max-w-6xl">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
          alt="Laser Technology Background"
          fill
          className="object-cover opacity-10 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-24 text-center">
        {/* Welcome Badge */}
        <div
          className={cn(
            "group relative overflow-hidden rounded-full border border-black/5 bg-neutral-100/80 text-base text-white backdrop-blur-sm transition-all hover:cursor-pointer hover:bg-neutral-200/80"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-6 py-2 font-medium transition ease-out hover:text-neutral-600 hover:duration-300">
            <span>✨ Welcome to Helionyx</span>
            <ArrowRightIcon className="ml-2 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </AnimatedShinyText>
        </div>

        {/* Main Heading */}
        <h1 className="z-10 text-balance text-center text-5xl font-bold tracking-tight text-black sm:text-7xl">
          Next-Gen
          <SparklesText
            text="Laser Technology"
            colors={{ first: "#22c55e", second: "#3b82f6" }}
            sparklesCount={15}
          />
          Solutions
        </h1>

        {/* Description */}
        <p className="z-10 max-w-prose text-pretty text-center text-lg text-muted-foreground sm:text-xl">
          Experience cutting-edge laser solutions with Helionyx - your trusted
          partner in advanced marking, cutting, and cleaning technologies. We
          combine innovation with precision to deliver industry-leading laser
          systems that transform your manufacturing capabilities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <ShimmerButton className="min-w-[200px] shadow-lg">
            <span className="whitespace-pre-wrap text-center text-base font-semibold leading-none tracking-tight text-white">
              Get Started
            </span>
          </ShimmerButton>

          <Button
            variant="outline"
            className="min-w-[200px] gap-2 border-blue-500/20 bg-white/50"
          >
            <PlayCircle className="size-4" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: 99, label: "Accuracy Rate", suffix: "%" },
            { value: 24, label: "Support", suffix: "/7" },
            { value: 50, label: "Countries", suffix: "+" },
            { value: 1000, label: "Installations", suffix: "+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary">
                <NumberTicker
                  value={stat.value}
                  className="mr-0.5 text-primary"
                />
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
