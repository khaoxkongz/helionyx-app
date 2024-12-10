"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { Search, X } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export const SearchDialog = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const searchItems = [
    {
      title: "Laser Marking",
      href: "/products/laser-marking",
    },
    {
      title: "Laser Cutting",
      href: "/products/laser-cutting",
    },
    // Add more search items
  ]

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
      >
        <Search className="size-4" />
        <span>Search...</span>
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span>⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 p-0">
          <DialogHeader className="px-4 pb-4 pt-5">
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <Command>
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 size-4 shrink-0 opacity-50" />
              <input
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type to search..."
              />
            </div>
            <ul className="max-h-[300px] overflow-y-auto p-2">
              {searchItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => {
                      router.push(item.href)
                      setOpen(false)
                    }}
                    className="w-full rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
