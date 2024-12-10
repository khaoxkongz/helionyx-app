import { Loader2 } from "lucide-react"

export default function SolutionsLoading() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="size-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading solutions...</p>
      </div>
    </div>
  )
} 
