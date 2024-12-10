"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const productOptions = {
  power: [
    { value: "20w", label: "20W", price: 5000 },
    { value: "30w", label: "30W", price: 7500 },
    { value: "50w", label: "50W", price: 10000 },
  ],
  workArea: [
    { value: "100x100", label: "100x100mm", price: 0 },
    { value: "200x200", label: "200x200mm", price: 1500 },
    { value: "300x300", label: "300x300mm", price: 3000 },
  ],
  features: [
    { value: "auto-focus", label: "Auto Focus System", price: 800 },
    { value: "rotary", label: "Rotary Attachment", price: 1200 },
    { value: "fume-extractor", label: "Fume Extractor", price: 600 },
  ],
}

export const ProductConfigurator = () => {
  const [config, setConfig] = useState({
    power: "20w",
    workArea: "100x100",
    features: [] as string[],
  })

  const calculateTotal = () => {
    let total = 0

    // Add power cost
    total +=
      productOptions.power.find((p) => p.value === config.power)?.price || 0

    // Add work area cost
    total +=
      productOptions.workArea.find((w) => w.value === config.workArea)?.price ||
      0

    // Add features cost
    config.features.forEach((f) => {
      total +=
        productOptions.features.find((feat) => feat.value === f)?.price || 0
    })

    return total
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Configure Your Laser System</CardTitle>
        <CardDescription>
          Customize your laser system to match your specific requirements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Power Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Laser Power</label>
          <Select
            value={config.power}
            onValueChange={(value) => setConfig({ ...config, power: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select power" />
            </SelectTrigger>
            <SelectContent>
              {productOptions.power.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center justify-between gap-4">
                    <span>{option.label}</span>
                    <span className="text-muted-foreground">
                      ${option.price.toLocaleString()}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Work Area Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Work Area</label>
          <Select
            value={config.workArea}
            onValueChange={(value) => setConfig({ ...config, workArea: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select work area" />
            </SelectTrigger>
            <SelectContent>
              {productOptions.workArea.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center justify-between gap-4">
                    <span>{option.label}</span>
                    <span className="text-muted-foreground">
                      {option.price > 0
                        ? `+$${option.price.toLocaleString()}`
                        : "Included"}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Additional Features */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Additional Features</label>
          <div className="grid gap-2">
            {productOptions.features.map((feature) => (
              <Button
                key={feature.value}
                variant="outline"
                className={cn(
                  "justify-between",
                  config.features.includes(feature.value) && "border-primary"
                )}
                onClick={() => {
                  setConfig({
                    ...config,
                    features: config.features.includes(feature.value)
                      ? config.features.filter((f) => f !== feature.value)
                      : [...config.features, feature.value],
                  })
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex size-4 items-center justify-center rounded-sm border",
                      config.features.includes(feature.value)
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted"
                    )}
                  >
                    {config.features.includes(feature.value) && (
                      <Check className="size-3" />
                    )}
                  </div>
                  <span>{feature.label}</span>
                </div>
                <span className="text-muted-foreground">
                  +${feature.price.toLocaleString()}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Total Price */}
        <motion.div
          className="mt-6 flex items-center justify-between rounded-lg bg-muted p-4"
          initial={false}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.2 }}
          key={calculateTotal()}
        >
          <span className="font-medium">Total Price:</span>
          <span className="text-xl font-bold">
            ${calculateTotal().toLocaleString()}
          </span>
        </motion.div>

        <Button className="w-full" size="lg">
          Request Quote
        </Button>
      </CardContent>
    </Card>
  )
}
