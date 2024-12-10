"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const materials = [
  {
    name: "Stainless Steel",
    markingPower: "20-30W",
    cuttingPower: "500W+",
    cleaningPower: "100-200W",
    applications: ["Medical", "Industrial", "Automotive"],
    notes: "Excellent for permanent marking and precision cutting",
  },
  {
    name: "Aluminum",
    markingPower: "30-40W",
    cuttingPower: "800W+",
    cleaningPower: "150-250W",
    applications: ["Aerospace", "Electronics", "Construction"],
    notes: "Requires higher power for effective marking",
  },
  {
    name: "Plastic",
    markingPower: "10-20W",
    cuttingPower: "100-200W",
    cleaningPower: "50-100W",
    applications: ["Consumer Goods", "Medical", "Electronics"],
    notes: "Low power required, risk of melting with excessive power",
  },
  // Add more materials as needed
]

export const MaterialGuide = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)

  const filteredMaterials = materials.filter((material) =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="pl-10"
          placeholder="Search materials..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Material</TableHead>
              <TableHead>Marking Power</TableHead>
              <TableHead>Cutting Power</TableHead>
              <TableHead>Cleaning Power</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMaterials.map((material) => (
              <TableRow
                key={material.name}
                className="cursor-pointer transition-colors hover:bg-muted/50"
                onClick={() => setSelectedMaterial(material.name)}
              >
                <TableCell className="font-medium">{material.name}</TableCell>
                <TableCell>{material.markingPower}</TableCell>
                <TableCell>{material.cuttingPower}</TableCell>
                <TableCell>{material.cleaningPower}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedMaterial && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border bg-card p-4"
        >
          {materials
            .filter((m) => m.name === selectedMaterial)
            .map((material) => (
              <div key={material.name} className="space-y-4">
                <h3 className="text-xl font-semibold">{material.name}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Applications:</span>{" "}
                    {material.applications.join(", ")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Notes:</span> {material.notes}
                  </p>
                </div>
              </div>
            ))}
        </motion.div>
      )}
    </div>
  )
} 
