import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface ImpactAnalysisProps {
  sector: string | null
  isLoading?: boolean
}

export function ImpactAnalysis({ sector, isLoading = false }: ImpactAnalysisProps) {
  // Mock data for impact analysis
  const impactData = [
    {
      indicator: "GDP Growth",
      impact: "Positive",
      lastUpdated: "2023-03-15",
    },
    {
      indicator: "Inflation Rate",
      impact: "Negative",
      lastUpdated: "2023-03-14",
    },
    {
      indicator: "Interest Rates",
      impact: "Negative",
      lastUpdated: "2023-03-10",
    },
    {
      indicator: "Unemployment",
      impact: "Neutral",
      lastUpdated: "2023-03-05",
    },
    {
      indicator: "Consumer Confidence",
      impact: "Positive",
      lastUpdated: "2023-03-01",
    },
  ]

  if (isLoading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-40" />
            {sector && <Skeleton className="h-4 w-24 ml-2" />}
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-72" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="h-10 px-4 border-b flex items-center">
              <div className="grid grid-cols-3 w-full">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-12 px-4 border-b last:border-0 flex items-center">
                  <div className="grid grid-cols-3 w-full">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>
          Impact Analysis
          {sector && <span className="ml-2 text-muted-foreground">({sector})</span>}
        </CardTitle>
        <CardDescription>How economic indicators affect sector performance</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-muted/50">
              <TableHead>Indicator</TableHead>
              <TableHead>Impact on Sector</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {impactData.map((item) => (
              <TableRow key={item.indicator} className="transition-colors hover:bg-muted/50">
                <TableCell className="font-medium">{item.indicator}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.impact === "Positive" ? "default" : item.impact === "Negative" ? "destructive" : "outline"
                    }
                    className="transition-all hover:opacity-80"
                  >
                    {item.impact}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{item.lastUpdated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

