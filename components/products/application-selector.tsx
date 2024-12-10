"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Factory, Hospital, Microscope } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const applications = [
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Manufacturing",
    description: "Laser solutions for large-scale manufacturing processes",
    products: ["Laser Marking System", "Surface Cleaning System"],
    color: "blue",
  },
  {
    id: "medical",
    icon: Hospital,
    title: "Medical & Healthcare",
    description: "Precision marking for medical devices and instruments",
    products: ["Medical Device Marker", "Surgical Tool Engraver"],
    color: "green",
  },
  {
    id: "research",
    icon: Microscope,
    title: "Research & Development",
    description: "Advanced laser systems for research institutions",
    products: ["Research Grade Laser", "Custom Solutions"],
    color: "purple",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Applications",
    description: "Versatile solutions for business needs",
    products: ["Desktop Marker", "Small Business System"],
    color: "orange",
  },
]

export const ApplicationSelector = () => {
  const [selectedApp, setSelectedApp] = useState(applications[0])

  return (
    <div className="w-full max-w-6xl">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">Find Your Solution</h2>
        <p className="mt-2 text-muted-foreground">
          Select your industry to discover tailored laser solutions
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Application Selection */}
        <div className="grid grid-cols-2 gap-4">
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => setSelectedApp(app)}
              className="group relative"
            >
              <Card
                className={cn(
                  "border-2 transition-all duration-300",
                  selectedApp.id === app.id
                    ? `border-${app.color}-500`
                    : "border-transparent hover:border-muted"
                )}
              >
                <CardContent className="p-4">
                  <app.icon
                    className={cn(
                      "mb-2 size-6",
                      `text-${app.color}-500`
                    )}
                  />
                  <h3 className="text-sm font-medium">{app.title}</h3>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* Application Details */}
        <motion.div
          key={selectedApp.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 rounded-lg border bg-card p-6"
        >
          <div className="flex items-center gap-4">
            <selectedApp.icon
              className={cn(
                "size-8",
                `text-${selectedApp.color}-500`
              )}
            />
            <div>
              <h3 className="text-xl font-semibold">{selectedApp.title}</h3>
              <p className="text-sm text-muted-foreground">
                {selectedApp.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-medium">Recommended Products:</h4>
            <ul className="space-y-2">
              {selectedApp.products.map((product, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div
                    className={cn(
                      "size-1.5 rounded-full",
                      `bg-${selectedApp.color}-500`
                    )}
                  />
                  {product}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
