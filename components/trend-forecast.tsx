"use client"

import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLine,
  ChartGrid,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"
import { generateForecastData } from "@/lib/mock-data"

interface TrendForecastProps {
  sector: string
}

export function TrendForecast({ sector }: TrendForecastProps) {
  // Generate mock forecast data
  const data = generateForecastData(sector)

  return (
    <div className="h-[300px]">
      <ChartContainer>
        <Chart data={data}>
          <ChartGrid horizontal vertical />
          <ChartXAxis tickCount={5} />
          <ChartYAxis />

          {/* Historical data line */}
          <ChartLine dataKey="historical" stroke="#2563eb" strokeWidth={2} dot={false} />

          {/* Forecast data line (dashed) */}
          <ChartLine dataKey="forecast" stroke="#2563eb" strokeWidth={2} strokeDasharray="5 5" dot={false} />

          {/* Upper bound area */}
          <ChartArea dataKey="upperBound" fill="#2563eb" fillOpacity={0.1} stroke="transparent" />

          {/* Lower bound area */}
          <ChartArea dataKey="lowerBound" fill="#2563eb" fillOpacity={0.1} stroke="transparent" baseLine={0} />

          <ChartTooltip content={<ChartTooltipContent />} />
        </Chart>
      </ChartContainer>

      <div className="flex justify-between text-sm text-muted-foreground mt-4">
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-primary mr-2"></div>
          <span>Historical</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-primary mr-2 border-dashed border-t-2 border-primary"></div>
          <span>Forecast</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary/10 mr-2"></div>
          <span>Confidence Interval</span>
        </div>
      </div>
    </div>
  )
}

