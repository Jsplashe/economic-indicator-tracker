import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AlertEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-3 mb-4">
        <Bell className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No alerts set up yet</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        Create alerts to get notified when economic indicators reach specific thresholds
      </p>
      <Button>Create Your First Alert</Button>
    </div>
  )
}

