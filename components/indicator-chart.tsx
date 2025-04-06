"use client"

import { useState } from "react"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartLine,
  ChartGrid,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { generateMockData } from "@/lib/mock-data"

interface IndicatorChartProps {
  sector: string
  timeframe: string
}

export function IndicatorChart({ sector, timeframe }: IndicatorChartProps) {
  const [indicators, setIndicators] = useState<string[]>(["GDP Growth", "Inflation", "Interest Rate"])
  const [hoveredIndicator, setHoveredIndicator] = useState<string | null>(null)

  // Generate mock data based on sector and timeframe
  const data = generateMockData(sector, timeframe, indicators)

  // Available timeframes
  const timeframes = ["1M", "3M", "6M", "1Y", "5Y"]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {timeframes.map((tf) => (
          <Button key={tf} variant={timeframe === tf ? "default" : "outline"} size="sm" className="px-3">
            {tf}
          </Button>
        ))}
      </div>

      <div className="h-[300px]">
        <ChartContainer>
          <Chart data={data}>
            <ChartGrid horizontal vertical />
            <ChartXAxis tickCount={5} />
            <ChartYAxis />

            {indicators.map((indicator, index) => {
              const colors = ["#2563eb", "#16a34a", "#dc2626", "#9333ea", "#f59e0b", "#0891b2"]
              const isHovered = hoveredIndicator === indicator

              return (
                <ChartLine
                  key={indicator}
                  dataKey={indicator}
                  stroke={colors[index % colors.length]}
                  strokeWidth={isHovered ? 3 : 2}
                  activeDot={{ r: 6 }}
                />
              )
            })}

            <ChartTooltip content={<ChartTooltipContent />} />
          </Chart>
        </ChartContainer>
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        <ChartLegend>
          {indicators.map((indicator, index) => {
            const colors = ["#2563eb", "#16a34a", "#dc2626", "#9333ea", "#f59e0b", "#0891b2"]

            return (
              <ChartLegendItem
                key={indicator}
                name={indicator}
                color={colors[index % colors.length]}
                onMouseEnter={() => setHoveredIndicator(indicator)}
                onMouseLeave={() => setHoveredIndicator(null)}
              />
            )
          })}
        </ChartLegend>
      </div>
    </div>
  )
}

