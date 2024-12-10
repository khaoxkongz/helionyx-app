import * as React from "react"

import { SiteFooter } from "@/components/common/site-footer"
import { SiteHeader } from "@/components/common/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <React.Fragment>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </React.Fragment>
  )
}
