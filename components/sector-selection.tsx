"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface SectorSelectionProps {
  selectedSector: string | null
  onSelectSector: (sector: string) => void
  isLoading?: boolean
}

export function SectorSelection({ selectedSector, onSelectSector, isLoading = false }: SectorSelectionProps) {
  const sectors = [
    {
      name: "Technology",
      trend: "up",
      description: "Tech sector indicators including R&D spending and adoption rates",
    },
    {
      name: "Real Estate",
      trend: "down",
      description: "Housing market indicators including starts and price indices",
    },
    {
      name: "Energy",
      trend: "up",
      description: "Energy sector metrics including prices and production",
    },
    {
      name: "Consumer Goods",
      trend: "down",
      description: "Retail and consumer spending indicators",
    },
    {
      name: "Finance",
      trend: "up",
      description: "Banking and financial services metrics",
    },
    {
      name: "Industrials",
      trend: "up",
      description: "Manufacturing and industrial production indicators",
    },
  ]

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-9 w-20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-4 w-full mt-1" />
                </CardHeader>
                <CardFooter>
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Sector Selection</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {sectors.map((sector) => (
          <Card
            key={sector.name}
            className={`cursor-pointer transition-all hover:border-primary hover:shadow-md ${
              selectedSector === sector.name ? "border-primary" : ""
            }`}
            onClick={() => onSelectSector(sector.name)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{sector.name}</CardTitle>
                <Badge variant={sector.trend === "up" ? "default" : "destructive"} className="flex items-center gap-1">
                  {sector.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {sector.trend === "up" ? "Rising" : "Falling"}
                </Badge>
              </div>
              <CardDescription>{sector.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full justify-between group">
                View Details
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

