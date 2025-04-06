import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { FileDown, FileText, Table } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function DownloadReports() {
  const sectors = ["Technology", "Real Estate", "Energy", "Consumer Goods", "Finance", "Industrials"]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Export Sector Report
        </CardTitle>
        <CardDescription>Download economic data reports for any sector</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="sector">Select Sector</Label>
          <Select>
            <SelectTrigger id="sector">
              <SelectValue placeholder="Choose a sector" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((sector) => (
                <SelectItem key={sector} value={sector.toLowerCase()}>
                  {sector}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time-range">Time Range</Label>
          <Select defaultValue="1y">
            <SelectTrigger id="time-range">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last Month</SelectItem>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="1y">Last Year</SelectItem>
              <SelectItem value="5y">Last 5 Years</SelectItem>
              <SelectItem value="all">All Available Data</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex gap-2 w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="flex-1" variant="outline">
                  <FileDown className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export feature coming soon</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="flex-1" variant="outline">
                  <Table className="h-4 w-4 mr-2" />
                  Download CSV
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export feature coming soon</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Reports include all indicators, trends, and forecasts for the selected sector
        </p>
      </CardFooter>
    </Card>
  )
}

