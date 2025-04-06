import { Database, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DataSourceEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-3 mb-4">
        <Database className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No data sources connected</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        Connect data sources to start tracking economic indicators across different sectors
      </p>
      <Button className="gap-1.5 transition-all hover:gap-2">
        <Plus className="h-4 w-4" />
        Connect Data Source
      </Button>
    </div>
  )
}

