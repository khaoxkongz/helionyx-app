"use client"

import { Check, Minus } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const products = [
  {
    name: "Basic",
    power: "20W",
    workArea: "100x100mm",
    features: {
      autoFocus: false,
      rotary: false,
      fumeExtractor: false,
      networkControl: false,
      camera: false,
    },
  },
  {
    name: "Professional",
    power: "30W",
    workArea: "200x200mm",
    features: {
      autoFocus: true,
      rotary: false,
      fumeExtractor: true,
      networkControl: true,
      camera: false,
    },
  },
  {
    name: "Enterprise",
    power: "50W",
    workArea: "300x300mm",
    features: {
      autoFocus: true,
      rotary: true,
      fumeExtractor: true,
      networkControl: true,
      camera: true,
    },
  },
]

export const ProductComparison = () => {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Features</TableHead>
            {products.map((product) => (
              <TableHead key={product.name} className="text-center">
                {product.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Laser Power</TableCell>
            {products.map((product) => (
              <TableCell key={product.name} className="text-center">
                {product.power}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Work Area</TableCell>
            {products.map((product) => (
              <TableCell key={product.name} className="text-center">
                {product.workArea}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Auto Focus</TableCell>
            {products.map((product) => (
              <TableCell key={product.name} className="text-center">
                {product.features.autoFocus ? (
                  <Check className="mx-auto size-4 text-green-500" />
                ) : (
                  <Minus className="mx-auto size-4 text-muted-foreground" />
                )}
              </TableCell>
            ))}
          </TableRow>
          {/* Add more feature rows */}
        </TableBody>
      </Table>
    </div>
  )
}
