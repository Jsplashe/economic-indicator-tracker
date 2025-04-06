"use client"

import { Skeleton } from "@/components/ui/skeleton"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ChevronRight,
  HelpCircle,
  TrendingUp,
  BarChart3,
  Percent,
  DollarSign,
  Users,
  Building,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { CorrelationHeatmap } from "@/components/sector-detail/correlation-heatmap"
import { CorrelationHeatmapSkeleton } from "@/components/sector-detail/correlation-heatmap-skeleton"
import { SectorTrendForecast } from "@/components/sector-detail/sector-trend-forecast"
import { SectorNewsFeed } from "@/components/sector-detail/sector-news-feed"
import { SectorPerformanceTable } from "@/components/sector-detail/sector-performance-table"
import { SectorInsight } from "@/components/sector-detail/sector-insight"
import { SectorInsightSkeleton } from "@/components/sector-detail/sector-insight-skeleton"

export default function SectorDetailPage() {
  const params = useParams()
  const sectorSlug = params?.slug as string
  const [isLoading, setIsLoading] = useState(true)

  // Convert slug to sector name (e.g., "real-estate" to "Real Estate")
  const sectorName = sectorSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Mock data for key indicators
  const keyIndicators = [
    {
      name: "GDP Growth",
      value: "3.2%",
      change: "+0.4%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      name: "Inflation Impact",
      value: "Moderate",
      change: "Stable",
      trend: "neutral",
      icon: Percent,
    },
    {
      name: "Market Cap",
      value: "$2.4T",
      change: "+5.6%",
      trend: "up",
      icon: DollarSign,
    },
    {
      name: "Employment",
      value: "12.3M",
      change: "-0.2%",
      trend: "down",
      icon: Users,
    },
    {
      name: "Companies",
      value: "1,450",
      change: "+23",
      trend: "up",
      icon: Building,
    },
    {
      name: "Growth Rate",
      value: "4.7%",
      change: "+0.8%",
      trend: "up",
      icon: BarChart3,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Breadcrumb navigation */}
      <div className="flex items-center text-sm text-muted-foreground">
        <Link href="/dashboard" className="hover:text-foreground transition-colors">
          Dashboard
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/sectors" className="hover:text-foreground transition-colors">
          Sectors
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="font-medium text-foreground">{sectorName}</span>
      </div>

      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{sectorName} Sector</h1>
          <p className="text-muted-foreground">
            Comprehensive analysis and forecasts for the {sectorName.toLowerCase()} sector
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="transition-all hover:bg-primary/10">
            Add to Favorites
          </Button>
          <Button size="sm" className="transition-all hover:shadow-md">
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Sector Indicators */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Key Sector Indicators</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 transition-opacity hover:opacity-70">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="animate-in fade-in-50 zoom-in-95">
                <p>Key economic indicators specific to this sector</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <Card key={i} className="animate-pulse overflow-hidden">
                    <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-4" />
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Skeleton className="h-8 w-16 mb-1" />
                      <Skeleton className="h-3 w-12" />
                    </CardContent>
                  </Card>
                ))
            : keyIndicators.map((indicator) => (
                <Card key={indicator.name} className="overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-sm font-medium">{indicator.name}</CardTitle>
                    <indicator.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">{indicator.value}</div>
                    <div className="flex items-center text-xs">
                      {indicator.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
                      ) : indicator.trend === "down" ? (
                        <ArrowDownRight className="h-3 w-3 mr-1 text-red-500" />
                      ) : null}
                      <span
                        className={
                          indicator.trend === "up"
                            ? "text-green-500"
                            : indicator.trend === "down"
                              ? "text-red-500"
                              : "text-muted-foreground"
                        }
                      >
                        {indicator.change}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="transition-all">
          <TabsTrigger value="overview" className="transition-all data-[state=active]:shadow-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="trends" className="transition-all data-[state=active]:shadow-sm">
            Trends & Forecasts
          </TabsTrigger>
          <TabsTrigger value="correlations" className="transition-all data-[state=active]:shadow-sm">
            Correlations
          </TabsTrigger>
          <TabsTrigger value="news" className="transition-all data-[state=active]:shadow-sm">
            News & Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 animate-in fade-in-50">
          {/* Sector Summary */}
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Sector Summary</CardTitle>
              <CardDescription>Key insights and performance overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Performance Overview</h3>
                <p>
                  The {sectorName} sector has shown {keyIndicators[0].trend === "up" ? "strong" : "moderate"}{" "}
                  performance over the past quarter with a GDP growth of {keyIndicators[0].value}. Market capitalization
                  has {keyIndicators[2].trend === "up" ? "increased" : "decreased"} by{" "}
                  {keyIndicators[2].change.replace("+", "")}, indicating{" "}
                  {keyIndicators[2].trend === "up" ? "positive" : "cautious"} investor sentiment.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Key Drivers</h3>
                <p>
                  Major factors influencing the {sectorName.toLowerCase()} sector include regulatory changes,
                  technological innovation, and shifting consumer preferences. Employment figures show
                  {keyIndicators[3].trend === "up" ? "growth" : "a slight decline"} at {keyIndicators[3].change}, while
                  inflation impact remains {keyIndicators[1].value.toLowerCase()}.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Outlook</h3>
                <p>
                  The {sectorName} sector is projected to{" "}
                  {keyIndicators[5].trend === "up" ? "continue growing" : "stabilize"}
                  in the coming quarters, with a forecasted growth rate of {keyIndicators[5].value}. Investors should
                  monitor regulatory developments and technological disruption as potential catalysts for change within
                  the sector.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Badge variant="outline" className="text-xs">
                Last updated: Today
              </Badge>
            </CardFooter>
          </Card>

          {/* Performance Table */}
          <SectorPerformanceTable sector={sectorName} />

          {/* Sector Insight - NEW COMPONENT */}
          {isLoading ? <SectorInsightSkeleton /> : <SectorInsight sector={sectorName} />}
        </TabsContent>

        <TabsContent value="trends" className="space-y-4 animate-in fade-in-50">
          <SectorTrendForecast sector={sectorName} />
        </TabsContent>

        <TabsContent value="correlations" className="space-y-4 animate-in fade-in-50">
          {isLoading ? <CorrelationHeatmapSkeleton /> : <CorrelationHeatmap sector={sectorName} />}

          {/* Sector Insight below correlation heatmap */}
          {isLoading ? <SectorInsightSkeleton /> : <SectorInsight sector={sectorName} />}
        </TabsContent>

        <TabsContent value="news" className="space-y-4 animate-in fade-in-50">
          <SectorNewsFeed sector={sectorName} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

