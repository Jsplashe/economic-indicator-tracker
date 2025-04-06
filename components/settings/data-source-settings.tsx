import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Database, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function DataSourceSettings() {
  const dataSources = [
    {
      id: "fred",
      name: "FRED (Federal Reserve Economic Data)",
      description: "U.S. economic time series data including GDP, inflation, employment, and more",
      enabled: true,
      premium: false,
      lastUpdated: "Today",
    },
    {
      id: "imf",
      name: "IMF (International Monetary Fund)",
      description: "Global economic indicators, financial statistics, and country-level data",
      enabled: true,
      premium: false,
      lastUpdated: "Yesterday",
    },
    {
      id: "worldbank",
      name: "World Bank",
      description: "Development indicators, global economic data, and sustainability metrics",
      enabled: true,
      premium: false,
      lastUpdated: "2 days ago",
    },
    {
      id: "alphavantage",
      name: "Alpha Vantage",
      description: "Real-time and historical market data, forex, and cryptocurrency information",
      enabled: false,
      premium: true,
      lastUpdated: "1 week ago",
    },
    {
      id: "eurostat",
      name: "Eurostat",
      description: "European Union statistical data covering economic, social, and demographic indicators",
      enabled: false,
      premium: true,
      lastUpdated: "2 weeks ago",
    },
    {
      id: "bls",
      name: "Bureau of Labor Statistics",
      description: "U.S. labor market data, employment statistics, and price indices",
      enabled: true,
      premium: false,
      lastUpdated: "3 days ago",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <div>
            <CardTitle>Data Source Settings</CardTitle>
            <CardDescription>Configure which data sources to use for economic indicators</CardDescription>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Enable or disable data sources for your economic indicators</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {dataSources.map((source) => (
            <div
              key={source.id}
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Label htmlFor={`source-${source.id}`} className="font-medium">
                    {source.name}
                  </Label>
                  {source.premium && (
                    <Badge variant="secondary" className="text-xs">
                      Premium
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{source.description}</p>
                <p className="text-xs text-muted-foreground">Last updated: {source.lastUpdated}</p>
              </div>
              <div className="flex items-center">
                <Switch
                  id={`source-${source.id}`}
                  checked={source.enabled}
                  disabled={source.premium && !source.enabled}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

