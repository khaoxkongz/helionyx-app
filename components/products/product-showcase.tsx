"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface ProductShowcaseProps {
  products: {
    name: string
    image: string
    description: string
    features: string[]
  }[]
}

export const ProductShowcase = ({ products }: ProductShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]))
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]))

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x)
      mouseY.set(y)
    }
  }

  const resetRotation = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="w-full max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* 3D Product Display */}
        <div
          ref={containerRef}
          className="relative aspect-square"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
        >
          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="size-full"
          >
            <Card className="size-full overflow-hidden border-black/5 bg-white/50 backdrop-blur-sm">
              <Image
                src={products[activeIndex].image}
                alt={products[activeIndex].name}
                fill
                className="object-cover"
                priority
              />
            </Card>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-2 text-2xl font-bold">
              {products[activeIndex].name}
            </h3>
            <p className="text-muted-foreground">
              {products[activeIndex].description}
            </p>
            <ul className="mt-4 space-y-2">
              {products[activeIndex].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Navigation */}
          <div className="flex gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "size-2 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
