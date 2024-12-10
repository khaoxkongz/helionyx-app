"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export const LoadingBar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [pathname, searchParams])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-x-0 top-0 z-50 h-1 bg-primary"
          initial={{ scaleX: 0, transformOrigin: "0%" }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0, transformOrigin: "100%" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </AnimatePresence>
  )
}
