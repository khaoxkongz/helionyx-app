"use client"

import { useState } from "react"
import { Check, HelpCircle, Minus } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const productSpecs = {
  basic: {
    name: "Basic",
    specs: {
      power: "20W",
      workArea: "100x100mm",
      precision: "0.1mm",
      software: "Basic Suite",
      support: "Email",
      warranty: "1 Year",
    },
    features: {
      autoFocus: false,
      networkControl: false,
      visionSystem: false,
      rotaryAxis: false,
    },
  },
  professional: {
    name: "Professional",
    specs: {
      power: "30W",
      workArea: "200x200mm",
      precision: "0.05mm",
      software: "Pro Suite",
      support: "24/7 Phone",
      warranty: "2 Years",
    },
    features: {
      autoFocus: true,
      networkControl: true,
      visionSystem: false,
      rotaryAxis: false,
    },
  },
  enterprise: {
    name: "Enterprise",
    specs: {
      power: "50W",
      workArea: "300x300mm",
      precision: "0.01mm",
      software: "Enterprise Suite",
      support: "Dedicated Team",
      warranty: "3 Years",
    },
    features: {
      autoFocus: true,
      networkControl: true,
      visionSystem: true,
      rotaryAxis: true,
    },
  },
}

const tooltips = {
  autoFocus: "Automatic focal length adjustment for different material heights",
  networkControl: "Remote operation and monitoring capabilities",
  visionSystem: "Integrated camera system for precise positioning",
  rotaryAxis: "Additional axis for cylindrical object marking",
}

export const SpecsComparison = () => {
  const [highlightedFeature, setHighlightedFeature] = useState<string | null>(
    null
  )

  return (
    <TooltipProvider>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Specifications</th>
              {Object.values(productSpecs).map((product) => (
                <th key={product.name} className="p-4 text-center">
                  {product.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(productSpecs.enterprise.specs).map(([key, _]) => (
              <tr
                key={key}
                className="border-b transition-colors hover:bg-muted/50"
              >
                <td className="p-4 font-medium capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </td>
                {Object.values(productSpecs).map((product) => (
                  <td
                    key={`${product.name}-${key}`}
                    className="p-4 text-center"
                  >
                    {product.specs[key as keyof typeof product.specs]}
                  </td>
                ))}
              </tr>
            ))}
            {Object.entries(tooltips).map(([feature, tooltip]) => (
              <tr
                key={feature}
                className={cn(
                  "border-b transition-colors hover:bg-muted/50",
                  highlightedFeature === feature && "bg-muted/50"
                )}
                onMouseEnter={() => setHighlightedFeature(feature)}
                onMouseLeave={() => setHighlightedFeature(null)}
              >
                <td className="p-4 font-medium">
                  <div className="flex items-center gap-2">
                    {feature.replace(/([A-Z])/g, " $1").trim()}
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="size-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>{tooltip}</TooltipContent>
                    </Tooltip>
                  </div>
                </td>
                {Object.values(productSpecs).map((product) => (
                  <td
                    key={`${product.name}-${feature}`}
                    className="p-4 text-center"
                  >
                    {product.features[
                      feature as keyof typeof product.features
                    ] ? (
                      <Check className="mx-auto size-5 text-green-500" />
                    ) : (
                      <Minus className="mx-auto size-5 text-muted-foreground" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TooltipProvider>
  )
}
