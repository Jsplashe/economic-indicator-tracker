import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"

interface SectorPerformanceTableProps {
  sector: string
}

export function SectorPerformanceTable({ sector }: SectorPerformanceTableProps) {
  // Mock data for top companies in the sector
  const companies = [
    {
      name: `${sector} Leader Corp`,
      ticker: "TLC",
      price: "$245.67",
      change: "+2.4%",
      marketCap: "$1.2T",
      peRatio: "32.5",
      trend: "up",
    },
    {
      name: `${sector} Innovations`,
      ticker: "SINV",
      price: "$178.32",
      change: "+1.8%",
      marketCap: "$820B",
      peRatio: "28.3",
      trend: "up",
    },
    {
      name: `Global ${sector} Group`,
      ticker: "GSG",
      price: "$92.45",
      change: "-0.7%",
      marketCap: "$410B",
      peRatio: "22.1",
      trend: "down",
    },
    {
      name: `${sector} Technologies`,
      ticker: "STEC",
      price: "$64.21",
      change: "+0.3%",
      marketCap: "$285B",
      peRatio: "19.8",
      trend: "up",
    },
    {
      name: `Advanced ${sector} Solutions`,
      ticker: "ADS",
      price: "$37.89",
      change: "0.0%",
      marketCap: "$124B",
      peRatio: "15.2",
      trend: "neutral",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Companies</CardTitle>
        <CardDescription>Leading companies in the {sector} sector by market capitalization</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Ticker</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Change</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead className="text-right">P/E Ratio</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.ticker}>
                <TableCell className="font-medium">{company.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{company.ticker}</Badge>
                </TableCell>
                <TableCell className="text-right">{company.price}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end">
                    {company.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
                    ) : company.trend === "down" ? (
                      <ArrowDownRight className="h-3 w-3 mr-1 text-red-500" />
                    ) : (
                      <Minus className="h-3 w-3 mr-1 text-gray-500" />
                    )}
                    <span
                      className={
                        company.trend === "up"
                          ? "text-green-500"
                          : company.trend === "down"
                            ? "text-red-500"
                            : "text-gray-500"
                      }
                    >
                      {company.change}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{company.marketCap}</TableCell>
                <TableCell className="text-right">{company.peRatio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

