"use client"

import { useState } from "react"
import { Calculator, Info } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ROIInputs {
  monthlyParts: number
  laborCostPerHour: number
  currentProcessTimeMinutes: number
  laserProcessTimeMinutes: number
  systemCost: number
}

export const ROICalculator = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    monthlyParts: 1000,
    laborCostPerHour: 25,
    currentProcessTimeMinutes: 5,
    laserProcessTimeMinutes: 1,
    systemCost: 50000,
  })

  const [showResults, setShowResults] = useState(false)

  const calculateROI = () => {
    const currentAnnualCost =
      (inputs.monthlyParts * 12 * inputs.currentProcessTimeMinutes * (inputs.laborCostPerHour / 60))
    
    const laserAnnualCost =
      (inputs.monthlyParts * 12 * inputs.laserProcessTimeMinutes * (inputs.laborCostPerHour / 60))
    
    const annualSavings = currentAnnualCost - laserAnnualCost
    const roiMonths = (inputs.systemCost / (annualSavings / 12))
    
    return {
      annualSavings,
      roiMonths,
      fiveYearSavings: (annualSavings * 5) - inputs.systemCost,
    }
  }

  const results = calculateROI()

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="size-5" />
          ROI Calculator
        </CardTitle>
        <CardDescription>
          Calculate your potential savings with our laser systems
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Monthly Parts */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              Monthly Parts
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="size-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Average number of parts processed per month
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="number"
              value={inputs.monthlyParts}
              onChange={(e) =>
                setInputs({ ...inputs, monthlyParts: Number(e.target.value) })
              }
            />
          </div>

          {/* Labor Cost */}
          <div className="space-y-2">
            <Label>Labor Cost ($/hour)</Label>
            <Input
              type="number"
              value={inputs.laborCostPerHour}
              onChange={(e) =>
                setInputs({ ...inputs, laborCostPerHour: Number(e.target.value) })
              }
            />
          </div>

          {/* Current Process Time */}
          <div className="space-y-2">
            <Label>Current Process Time (minutes/part)</Label>
            <Input
              type="number"
              value={inputs.currentProcessTimeMinutes}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  currentProcessTimeMinutes: Number(e.target.value),
                })
              }
            />
          </div>

          {/* Laser Process Time */}
          <div className="space-y-2">
            <Label>Laser Process Time (minutes/part)</Label>
            <Input
              type="number"
              value={inputs.laserProcessTimeMinutes}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  laserProcessTimeMinutes: Number(e.target.value),
                })
              }
            />
          </div>

          {/* System Cost */}
          <div className="sm:col-span-2 space-y-2">
            <Label>System Cost ($)</Label>
            <Input
              type="number"
              value={inputs.systemCost}
              onChange={(e) =>
                setInputs({ ...inputs, systemCost: Number(e.target.value) })
              }
            />
          </div>
        </div>

        <Button
          className="w-full"
          onClick={() => setShowResults(true)}
        >
          Calculate ROI
        </Button>

        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 rounded-lg bg-muted p-4"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Annual Savings</p>
                <p className="text-2xl font-bold text-green-500">
                  ${Math.round(results.annualSavings).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ROI Period</p>
                <p className="text-2xl font-bold">
                  {Math.round(results.roiMonths)} months
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">5-Year Savings</p>
                <p className="text-2xl font-bold text-green-500">
                  ${Math.round(results.fiveYearSavings).toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
} 
