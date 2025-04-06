import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SectorTrendForecastProps {
  sector: string
}

export function SectorTrendForecast({ sector }: SectorTrendForecastProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Sector Trend Forecast</CardTitle>
          <CardDescription>Projected performance for the {sector} sector</CardDescription>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>AI-powered forecast based on historical data and market trends</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="6m">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="1m">1M</TabsTrigger>
              <TabsTrigger value="3m">3M</TabsTrigger>
              <TabsTrigger value="6m">6M</TabsTrigger>
              <TabsTrigger value="1y">1Y</TabsTrigger>
              <TabsTrigger value="5y">5Y</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Compare Sectors
              </Button>
              <Button variant="outline" size="sm">
                Export Data
              </Button>
            </div>
          </div>

          {/* Chart placeholder */}
          <div className="mt-4 border rounded-md p-6 flex flex-col items-center justify-center min-h-[300px] bg-muted/20">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-medium">Forecast Visualization</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Interactive chart showing historical data and AI-powered forecast for the {sector} sector
              </p>
              <p className="text-xs text-muted-foreground">(Chart integration coming soon)</p>
            </div>
          </div>

          {/* Forecast summary */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2 p-4 border rounded-md">
              <h3 className="text-sm font-medium">Bullish Scenario</h3>
              <p className="text-sm text-muted-foreground">
                In favorable conditions, the {sector} sector could see growth of 5.2% over the next 6 months, driven by
                technological innovation and favorable regulatory environment.
              </p>
              <div className="text-green-500 font-medium">+5.2%</div>
            </div>

            <div className="space-y-2 p-4 border rounded-md">
              <h3 className="text-sm font-medium">Base Scenario</h3>
              <p className="text-sm text-muted-foreground">
                Our baseline forecast predicts moderate growth of 3.7% for the {sector} sector, assuming current market
                conditions and policy stability.
              </p>
              <div className="text-blue-500 font-medium">+3.7%</div>
            </div>

            <div className="space-y-2 p-4 border rounded-md">
              <h3 className="text-sm font-medium">Bearish Scenario</h3>
              <p className="text-sm text-muted-foreground">
                In adverse conditions, growth may be limited to 1.3%, with potential headwinds from inflation, supply
                chain disruptions, and regulatory challenges.
              </p>
              <div className="text-red-500 font-medium">+1.3%</div>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}

