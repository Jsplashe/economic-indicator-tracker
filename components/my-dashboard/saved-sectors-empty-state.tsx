import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SavedSectorsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-3 mb-4">
        <Star className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No saved sectors yet</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        Save your favorite sectors for quick access to their economic indicators and forecasts
      </p>
      <Button>Browse Sectors</Button>
    </div>
  )
}

