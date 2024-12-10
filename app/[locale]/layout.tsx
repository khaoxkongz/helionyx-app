import * as React from "react"

import { fontMono, fontSans } from "@/lib/fonts"
import { I18nProviderClient } from "@/lib/i18n/settings/client"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsent } from "@/components/common/cookie-consent"
import { FloatingContact } from "@/components/common/floating-contact"
import { ScrollToTop } from "@/components/common/scroll-to-top"

import "@/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <I18nProviderClient locale={locale}>
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <FloatingContact />
            <ScrollToTop />
            <CookieConsent />
            <Toaster />
          </div>
        </I18nProviderClient>
      </body>
    </html>
  )
}
