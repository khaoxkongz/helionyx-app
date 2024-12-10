"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { useScopedI18n } from "@/lib/i18n/settings/client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"

export const SiteHeader = () => {
  const navigation = useScopedI18n("navigation")
  const pathname = usePathname()

  return (
    <header className="sticky inset-x-0 top-0 z-50 h-[72px] border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="relative text-2xl font-bold">
          <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
            Helionyx
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="text-md rounded-md px-4 py-2 font-medium text-neutral-800 transition-colors duration-300 hover:text-primary"
                  >
                    {navigation("home")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md rounded-md bg-transparent px-4 py-2 font-medium text-neutral-800 transition-colors duration-300 hover:bg-transparent hover:text-primary focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  {navigation("products")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-max rounded-md bg-white/80 p-4 shadow-lg backdrop-blur-xl">
                    {[
                      {
                        href: "/products/laser-marking-machines",
                        text: navigation("categories.laserMarking"),
                      },
                      {
                        href: "/products/laser-cutting-machines",
                        text: navigation("categories.laserCutting"),
                      },
                      {
                        href: "/products/laser-cleaning-machines",
                        text: navigation("categories.laserCleaning"),
                      },
                      {
                        href: "/products/dot-marking-machines",
                        text: navigation("categories.dotMarking"),
                      },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-md p-2 text-neutral-800 transition-colors duration-300 hover:text-primary"
                        >
                          <span>{item.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="text-md rounded-md px-4 py-2 font-medium text-neutral-800 transition-colors duration-300 hover:text-primary"
                  >
                    {navigation("about")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="text-md rounded-md px-4 py-2 font-medium text-neutral-800 transition-colors duration-300 hover:text-primary"
                  >
                    {navigation("contact")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center space-x-2 md:flex">
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white/80 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle className="text-neutral-800">
                Navigation Menu
              </SheetTitle>
            </SheetHeader>
            <nav>
              <ul className="mt-8 flex flex-col gap-4">
                {[
                  { href: "/", text: navigation("home") },
                  {
                    href: "/products",
                    text: navigation("products"),
                  },
                  { href: "/about", text: navigation("about") },
                  {
                    href: "/contact",
                    text: navigation("contact"),
                  },
                ].map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        pathname === item.href
                          ? "text-primary"
                          : "text-neutral-800 hover:text-primary"
                      )}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
