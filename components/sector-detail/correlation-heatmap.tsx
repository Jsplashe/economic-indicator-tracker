import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CorrelationHeatmapProps {
  sector: string
}

export function CorrelationHeatmap({ sector }: CorrelationHeatmapProps) {
  // Mock correlation data
  const indicators = ["GDP Growth", "Inflation", "Interest Rate", "Unemployment", "Consumer Confidence"]

  // Generate mock correlation matrix
  const correlationMatrix: Record<string, Record<string, number>> = {}

  indicators.forEach((row) => {
    correlationMatrix[row] = {}
    indicators.forEach((col) => {
      // Self-correlation is always 1
      if (row === col) {
        correlationMatrix[row][col] = 1.0
      } else {
        // Generate a random correlation between -0.8 and 0.8
        correlationMatrix[row][col] = Number.parseFloat((Math.random() * 1.6 - 0.8).toFixed(2))
      }
    })
  })

  // Function to get cell color based on correlation value
  const getCellColor = (value: number) => {
    if (value === 1) return "bg-gray-200 dark:bg-gray-700" // Diagonal (self-correlation)
    if (value > 0.7) return "bg-green-600/80 text-white"
    if (value > 0.3) return "bg-green-400/80"
    if (value > -0.3) return "bg-gray-100 dark:bg-gray-800"
    if (value > -0.7) return "bg-red-300/80"
    return "bg-red-600/80 text-white"
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Correlation Heatmap</CardTitle>
          <CardDescription>How economic indicators correlate within the {sector} sector</CardDescription>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Darker green indicates strong positive correlation, darker red indicates strong negative correlation
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Header row with indicator names */}
            <div className="grid grid-cols-[150px_repeat(5,1fr)] mb-2">
              <div className="text-sm font-medium"></div>
              {indicators.map((indicator) => (
                <div key={indicator} className="text-sm font-medium text-center px-2">
                  {indicator}
                </div>
              ))}
            </div>

            {/* Correlation matrix rows */}
            {indicators.map((row) => (
              <div key={row} className="grid grid-cols-[150px_repeat(5,1fr)] mb-1">
                <div className="text-sm font-medium pr-4">{row}</div>
                {indicators.map((col) => (
                  <div
                    key={`${row}-${col}`}
                    className={`text-center py-2 text-sm ${getCellColor(correlationMatrix[row][col])}`}
                  >
                    {correlationMatrix[row][col].toFixed(2)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-3 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-600/80"></div>
            <span className="text-xs">Strong negative</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-300/80"></div>
            <span className="text-xs">Moderate negative</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-100 dark:bg-gray-800"></div>
            <span className="text-xs">Weak/No correlation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400/80"></div>
            <span className="text-xs">Moderate positive</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-600/80"></div>
            <span className="text-xs">Strong positive</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

