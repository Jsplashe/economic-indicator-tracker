// Mock data generation for the Economic Indicator Tracker

// Generate time series data for indicators
export function generateMockData(sector: string, timeframe: string, indicators: string[]) {
  const data = []
  let points = 0

  // Determine number of data points based on timeframe
  switch (timeframe) {
    case "1M":
      points = 30
      break
    case "3M":
      points = 90
      break
    case "6M":
      points = 180
      break
    case "1Y":
      points = 365
      break
    case "5Y":
      points = 365 * 5
      break
    default:
      points = 365 // Default to 1Y
  }

  // Generate sample points (simplified for demo)
  const now = new Date()
  const sectorMultiplier = getSectorMultiplier(sector)

  for (let i = 0; i < points; i += Math.max(1, Math.floor(points / 30))) {
    const date = new Date(now)
    date.setDate(now.getDate() - (points - i))

    const point: any = {
      date: date.toISOString().split("T")[0],
    }

    // Add values for each indicator
    indicators.forEach((indicator, index) => {
      // Base value depends on the indicator
      let baseValue = 0
      switch (indicator) {
        case "GDP Growth":
          baseValue = 2.5
          break
        case "Inflation":
          baseValue = 3.0
          break
        case "Interest Rate":
          baseValue = 4.5
          break
        case "Unemployment":
          baseValue = 5.0
          break
        case "Consumer Confidence":
          baseValue = 100
          break
        default:
          baseValue = 50
      }

      // Add some randomness and sector-specific adjustments
      const randomFactor = Math.sin(i * 0.1) * 0.5 + (Math.random() - 0.5) * 0.3
      const sectorFactor = (index % 2 === 0 ? 1 : -1) * sectorMultiplier * 0.2

      point[indicator] = +(baseValue + randomFactor + sectorFactor).toFixed(2)
    })

    data.push(point)
  }

  return data
}

// Generate forecast data
export function generateForecastData(sector: string) {
  const data = []
  const now = new Date()
  const sectorMultiplier = getSectorMultiplier(sector)

  // Historical data (past 6 months)
  for (let i = 0; i < 180; i += 6) {
    const date = new Date(now)
    date.setDate(now.getDate() - (180 - i))

    const baseValue = 100 + i * 0.1 * sectorMultiplier
    const randomFactor = Math.sin(i * 0.1) * 2 + (Math.random() - 0.5) * 1

    data.push({
      date: date.toISOString().split("T")[0],
      historical: +(baseValue + randomFactor).toFixed(2),
      forecast: null,
      upperBound: null,
      lowerBound: null,
    })
  }

  // Forecast data (next 6 months)
  const lastHistorical = data[data.length - 1].historical

  for (let i = 0; i < 180; i += 6) {
    const date = new Date(now)
    date.setDate(now.getDate() + i)

    const trend = i * 0.15 * sectorMultiplier
    const forecast = +(lastHistorical + trend).toFixed(2)
    const uncertainty = i * 0.05 // Increasing uncertainty over time

    data.push({
      date: date.toISOString().split("T")[0],
      historical: null,
      forecast: forecast,
      upperBound: +(forecast + forecast * uncertainty).toFixed(2),
      lowerBound: +(forecast - forecast * uncertainty).toFixed(2),
    })
  }

  return data
}

// Get impact analysis data
export function getImpactData(sector: string) {
  const baseImpacts = [
    {
      indicator: "GDP Growth",
      value: "2.5%",
      impact: "Positive",
      description:
        "Strong GDP growth typically benefits most sectors through increased consumer spending and business investment.",
    },
    {
      indicator: "Inflation",
      value: "3.2%",
      impact: "Negative",
      description: "Rising inflation can increase costs and reduce purchasing power, affecting profit margins.",
    },
    {
      indicator: "Interest Rate",
      value: "4.75%",
      impact: "Negative",
      description: "Higher interest rates increase borrowing costs and can slow business expansion.",
    },
    {
      indicator: "Unemployment",
      value: "3.8%",
      impact: "Positive",
      description: "Low unemployment supports consumer spending and indicates a healthy economy.",
    },
    {
      indicator: "Consumer Confidence",
      value: "102.3",
      impact: "Positive",
      description: "Higher consumer confidence typically leads to increased spending and economic activity.",
    },
  ]

  // Customize impacts based on sector
  switch (sector) {
    case "Technology":
      baseImpacts[1].impact = "Neutral"
      baseImpacts[1].description = "Technology companies can often adjust pricing to offset inflation impacts."
      break
    case "Real Estate":
      baseImpacts[2].impact = "Strongly Negative"
      baseImpacts[2].description = "Real estate is highly sensitive to interest rates due to mortgage financing costs."
      break
    case "Energy":
      baseImpacts[1].impact = "Positive"
      baseImpacts[1].description = "Energy companies can often benefit from inflation as commodity prices rise."
      break
    case "Consumer Goods":
      baseImpacts[3].impact = "Strongly Positive"
      baseImpacts[3].description =
        "Consumer goods benefit directly from low unemployment through increased discretionary spending."
      break
    case "Finance":
      baseImpacts[2].impact = "Mixed"
      baseImpacts[2].description =
        "Banks can benefit from higher interest rates through increased margins, but may face reduced loan volume."
      break
    case "Industrials":
      baseImpacts[0].impact = "Strongly Positive"
      baseImpacts[0].description =
        "Industrial companies directly benefit from economic expansion and infrastructure investment."
      break
  }

  return baseImpacts
}

// Get correlation data
export function getCorrelationData(sector: string) {
  const indicators = ["GDP Growth", "Inflation", "Interest Rate", "Unemployment", "Consumer Confidence"]

  // Create empty correlation matrix
  const correlationMatrix: Record<string, Record<string, number>> = {}

  // Initialize with empty objects
  indicators.forEach((indicator) => {
    correlationMatrix[indicator] = {}
  })

  // Fill correlation matrix
  indicators.forEach((row, i) => {
    indicators.forEach((col, j) => {
      if (i === j) {
        // Self-correlation is always 1
        correlationMatrix[row][col] = 1.0
      } else {
        // Base correlations (these would normally be calculated from actual data)
        let correlation = 0

        // Some logical correlations
        if ((row === "GDP Growth" && col === "Unemployment") || (row === "Unemployment" && col === "GDP Growth")) {
          correlation = -0.7 // Strong negative
        } else if (
          (row === "GDP Growth" && col === "Consumer Confidence") ||
          (row === "Consumer Confidence" && col === "GDP Growth")
        ) {
          correlation = 0.8 // Strong positive
        } else if (
          (row === "Inflation" && col === "Interest Rate") ||
          (row === "Interest Rate" && col === "Inflation")
        ) {
          correlation = 0.6 // Moderate positive
        } else if (
          (row === "Unemployment" && col === "Consumer Confidence") ||
          (row === "Consumer Confidence" && col === "Unemployment")
        ) {
          correlation = -0.5 // Moderate negative
        } else {
          // Random correlation for other pairs
          correlation = Math.random() * 1.6 - 0.8 // Between -0.8 and 0.8
        }

        // Adjust based on sector
        if (
          sector === "Technology" &&
          ((row === "Interest Rate" && col === "GDP Growth") || (row === "GDP Growth" && col === "Interest Rate"))
        ) {
          correlation *= 0.7 // Technology less affected by interest rates
        } else if (
          sector === "Real Estate" &&
          ((row === "Interest Rate" && col === "GDP Growth") || (row === "GDP Growth" && col === "Interest Rate"))
        ) {
          correlation *= 1.3 // Real estate more affected by interest rates
        }

        correlationMatrix[row][col] = +correlation.toFixed(2)
      }
    })
  })

  return correlationMatrix
}

// Get indicator options for alerts
export function getIndicatorOptions(sector: string) {
  const baseIndicators = [
    "GDP Growth",
    "Inflation",
    "Interest Rate",
    "Unemployment",
    "Consumer Confidence",
    "Manufacturing PMI",
    "Services PMI",
    "Retail Sales",
  ]

  // Add sector-specific indicators
  switch (sector) {
    case "Technology":
      return [...baseIndicators, "R&D Spending", "Tech Adoption Rate", "Semiconductor Index"]
    case "Real Estate":
      return [...baseIndicators, "Housing Starts", "Home Price Index", "Mortgage Rates"]
    case "Energy":
      return [...baseIndicators, "Oil Price", "Natural Gas Price", "Renewable Energy Investment"]
    case "Consumer Goods":
      return [...baseIndicators, "Consumer Spending", "Disposable Income", "E-commerce Sales"]
    case "Finance":
      return [...baseIndicators, "Banking Index", "Yield Curve", "Credit Default Rates"]
    case "Industrials":
      return [...baseIndicators, "Industrial Production", "Capacity Utilization", "Durable Goods Orders"]
    default:
      return baseIndicators
  }
}

// Helper function to get sector-specific multiplier
function getSectorMultiplier(sector: string) {
  switch (sector) {
    case "Technology":
      return 1.2
    case "Real Estate":
      return 0.8
    case "Energy":
      return 1.1
    case "Consumer Goods":
      return 0.9
    case "Finance":
      return 1.0
    case "Industrials":
      return 1.05
    default:
      return 1.0
  }
}

