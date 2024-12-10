"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bell, Star, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const WHATS_NEW_VERSION = "1.0.0" // Update this when you have new features

export const WhatsNewPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const lastVersion = localStorage.getItem("whats-new-version")
    if (lastVersion !== WHATS_NEW_VERSION) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem("whats-new-version", WHATS_NEW_VERSION)
    setIsOpen(false)
  }

  const features = [
    {
      icon: <Star className="size-5 text-yellow-500" />,
      title: "New Laser Cleaning Technology",
      description: "Advanced surface preparation with eco-friendly solutions.",
    },
    {
      icon: <Bell className="size-5 text-blue-500" />,
      title: "24/7 Support Chat",
      description: "Get instant help from our technical experts anytime.",
    },
    // Add more features as needed
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <Card>
            <CardHeader className="relative pb-2">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={handleClose}
              >
                <X className="size-4" />
              </Button>
              <CardTitle>What's New</CardTitle>
              <CardDescription>Check out our latest features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
