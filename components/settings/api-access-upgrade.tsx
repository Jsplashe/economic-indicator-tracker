import { Code, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ApiAccessUpgrade() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-3 mb-4">
        <Code className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="inline-flex items-center gap-1.5 bg-muted px-2.5 py-0.5 rounded-full text-xs font-medium mb-4">
        <Lock className="h-3 w-3" /> Enterprise Feature
      </div>
      <h3 className="text-lg font-medium mb-2">API Access Restricted</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        Upgrade to our Enterprise plan to access the full API capabilities, including real-time data retrieval and
        historical analysis.
      </p>
      <Button className="gap-1.5 transition-all hover:gap-2">Upgrade to Enterprise</Button>
    </div>
  )
}

