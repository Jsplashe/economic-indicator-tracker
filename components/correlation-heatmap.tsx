"use client"

import { useEffect, useRef } from "react"
import { getCorrelationData } from "@/lib/mock-data"

interface CorrelationHeatmapProps {
  sector: string
}

export function CorrelationHeatmap({ sector }: CorrelationHeatmapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const correlationData = getCorrelationData(sector)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const indicators = Object.keys(correlationData)
    const cellSize = Math.min((canvas.width - 150) / indicators.length, (canvas.height - 150) / indicators.length)
    const startX = 150
    const startY = 30

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw labels
    ctx.font = "12px Arial"
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"

    indicators.forEach((indicator, i) => {
      // Y-axis labels
      ctx.fillText(indicator, startX - 10, startY + i * cellSize + cellSize / 2)

      // X-axis labels (rotated)
      ctx.save()
      ctx.translate(startX + i * cellSize + cellSize / 2, startY - 10)
      ctx.rotate(-Math.PI / 4)
      ctx.textAlign = "right"
      ctx.fillText(indicator, 0, 0)
      ctx.restore()
    })

    // Draw heatmap cells
    indicators.forEach((rowInd, i) => {
      indicators.forEach((colInd, j) => {
        const value = correlationData[rowInd][colInd]

        // Color based on correlation value
        let color
        if (i === j) {
          color = "rgb(200, 200, 200)" // Diagonal (self-correlation)
        } else if (value > 0.7) {
          color = "rgb(0, 128, 0, 0.8)" // Strong positive
        } else if (value > 0.3) {
          color = "rgb(144, 238, 144, 0.8)" // Moderate positive
        } else if (value > -0.3) {
          color = "rgb(255, 255, 255, 0.8)" // Weak/no correlation
        } else if (value > -0.7) {
          color = "rgb(255, 182, 193, 0.8)" // Moderate negative
        } else {
          color = "rgb(220, 20, 60, 0.8)" // Strong negative
        }

        // Draw cell
        ctx.fillStyle = color
        ctx.fillRect(startX + j * cellSize, startY + i * cellSize, cellSize, cellSize)

        // Draw value
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(value.toFixed(2), startX + j * cellSize + cellSize / 2, startY + i * cellSize + cellSize / 2)
      })
    })

    // Draw legend
    const legendX = 20
    const legendY = startY + indicators.length * cellSize + 30
    const legendWidth = 20
    const legendHeight = 15

    const legendItems = [
      { color: "rgb(0, 128, 0, 0.8)", label: "Strong positive (>0.7)" },
      { color: "rgb(144, 238, 144, 0.8)", label: "Moderate positive (0.3-0.7)" },
      { color: "rgb(255, 255, 255, 0.8)", label: "Weak/no correlation (-0.3-0.3)" },
      { color: "rgb(255, 182, 193, 0.8)", label: "Moderate negative (-0.7--0.3)" },
      { color: "rgb(220, 20, 60, 0.8)", label: "Strong negative (<-0.7)" },
    ]

    legendItems.forEach((item, i) => {
      ctx.fillStyle = item.color
      ctx.fillRect(legendX, legendY + i * (legendHeight + 5), legendWidth, legendHeight)

      ctx.fillStyle = "black"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(item.label, legendX + legendWidth + 10, legendY + i * (legendHeight + 5) + legendHeight / 2)
    })
  }, [sector, correlationData])

  return (
    <div className="w-full h-[500px] flex justify-center">
      <canvas ref={canvasRef} width={800} height={600} className="max-w-full h-auto" />
    </div>
  )
}

