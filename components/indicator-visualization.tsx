import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface IndicatorVisualizationProps {
  sector: string | null
  isLoading?: boolean
}

export function IndicatorVisualization({ sector, isLoading = false }: IndicatorVisualizationProps) {
  if (isLoading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <Skeleton className="h-6 w-64" />
              <Skeleton className="h-4 w-full mt-1" />
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center border rounded-md h-[300px] bg-muted/20">
            <div className="text-center p-4 space-y-4">
              <Skeleton className="h-6 w-64 mx-auto" />
              <Skeleton className="h-4 w-80 mx-auto" />
              <Skeleton className="h-4 w-72 mx-auto" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            Time-Series Data & Forecasts
            {sector && <span className="ml-2 text-muted-foreground">({sector})</span>}
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-pointer transition-opacity hover:opacity-70" />
              </TooltipTrigger>
              <TooltipContent className="animate-in fade-in-50 zoom-in-95">
                <p>Chart integration coming soon – mock AI forecast</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>Historical data and AI-powered forecasts for key economic indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center border rounded-md h-[300px] bg-muted/20 transition-colors hover:bg-muted/30">
          <div className="text-center p-4">
            <p className="text-lg font-medium mb-2">Chart Visualization Placeholder</p>
            <p className="text-sm text-muted-foreground max-w-md">
              {sector
                ? `This area will display interactive charts for ${sector} sector indicators`
                : "Select a sector above to view indicator charts and forecasts"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

