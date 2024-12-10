"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Cookie, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed inset-x-0 bottom-0 z-50 bg-background/80 backdrop-blur-sm"
        >
          <div className="container mx-auto flex items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-4">
              <Cookie className="size-8 text-primary" />
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your experience. By continuing to
                visit this site you agree to our use of cookies.{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsVisible(false)}
              >
                Decline
              </Button>
              <Button size="sm" onClick={acceptCookies}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
