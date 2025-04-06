"use client"

import { FileText, Download, HelpCircle } from "lucide-react"
import { EnhancedExportForm } from "@/components/reports/enhanced-export-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ReportsPage() {
  // Mock data for available reports
  const availableReports = [
    {
      id: "1",
      title: "Sector Performance Report",
      description: "Comprehensive analysis of sector performance metrics",
      lastGenerated: "Jun 15, 2023",
    },
    {
      id: "2",
      title: "Economic Indicators Summary",
      description: "Overview of key economic indicators across all sectors",
      lastGenerated: "May 28, 2023",
    },
    {
      id: "3",
      title: "Correlation Analysis",
      description: "Detailed correlation analysis between economic indicators",
      lastGenerated: "May 10, 2023",
    },
    {
      id: "4",
      title: "Forecast Accuracy Report",
      description: "Analysis of forecast accuracy compared to actual outcomes",
      lastGenerated: "Apr 22, 2023",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Reports
          </h1>
          <p className="text-muted-foreground">Generate and download economic indicator reports</p>
        </div>
      </div>

      <Tabs defaultValue="export" className="space-y-4">
        <TabsList>
          <TabsTrigger value="export">Export Reports</TabsTrigger>
          <TabsTrigger value="available">Available Reports</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="export" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <EnhancedExportForm />

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Report Export Guide
                  </CardTitle>
                </div>
                <CardDescription>Tips for creating effective economic reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Selecting Sectors</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose multiple sectors to compare their performance or select a single sector for in-depth
                    analysis.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Date Range</h3>
                  <p className="text-sm text-muted-foreground">
                    Select a specific time period to analyze trends and patterns. Longer periods provide better trend
                    visibility.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Format Selection</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose PDF for presentation-ready reports with visualizations or CSV for raw data analysis in
                    spreadsheet software.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-md">
                  <p className="text-sm font-medium mb-2">Pro Tip</p>
                  <p className="text-sm text-muted-foreground">
                    Premium users can schedule automated reports to be delivered on a regular basis. Upgrade your plan
                    to access this feature.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="available" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableReports.map((report) => (
              <Card key={report.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Last generated: {report.lastGenerated}</p>
                </CardContent>
                <CardContent className="pt-0 flex gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          PDF
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
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          CSV
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Export feature coming soon</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Set up automated report generation and delivery</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-3 mb-4">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">Premium Feature</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-6">
                Scheduled reports are available for Premium and Enterprise users. Upgrade your plan to access this
                feature.
              </p>
              <Button>Upgrade Plan</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

