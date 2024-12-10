"use client"

import { usePathname, useRouter } from "next/navigation"

import { useCurrentLocale } from "@/lib/i18n/settings/client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languages = [
  { value: "en", label: "English", flag: "🇬🇧" },
  { value: "th", label: "ไทย", flag: "🇹🇭" },
] as const

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = useCurrentLocale()

  const switchLanguage = (locale: string) => {
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
    router.push(newPathname)
  }

  return (
    <Select value={currentLocale} onValueChange={switchLanguage}>
      <SelectTrigger className="w-[140px] [&>span]:flex [&>span]:items-center [&>span]:gap-2">
        <SelectValue>
          <span className="text-lg leading-none">
            {languages.find((lang) => lang.value === currentLocale)?.flag}
          </span>
          <span className="truncate">
            {languages.find((lang) => lang.value === currentLocale)?.label}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="[&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
        <SelectGroup>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              <span className="text-lg leading-none">{lang.flag}</span>
              <span className="truncate">{lang.label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
