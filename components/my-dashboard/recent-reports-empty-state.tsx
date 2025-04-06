import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecentReportsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-3 mb-4">
        <FileText className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No reports generated yet</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        Generate reports to analyze economic indicators and sector performance
      </p>
      <Button>Create Your First Report</Button>
    </div>
  )
}

