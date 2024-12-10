"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface BlurImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export const BlurImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
