"use client"

import { useState, useEffect } from "react"
import { StatsOverview } from "@/components/stats-overview"
import { SectorSelection } from "@/components/sector-selection"
import { IndicatorVisualization } from "@/components/indicator-visualization"
import { ImpactAnalysis } from "@/components/impact-analysis"
import { CustomAlerts } from "@/components/custom-alerts"
import { RecentActivity } from "@/components/recent-activity"
import { UserAccessTier } from "@/components/settings/user-access-tier"
import { QuickStartBanner } from "@/components/quick-start-banner"

export default function Dashboard() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <QuickStartBanner />

      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground">Welcome to your economic indicator tracking dashboard.</p>

      <StatsOverview isLoading={isLoading} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <SectorSelection selectedSector={selectedSector} onSelectSector={setSelectedSector} isLoading={isLoading} />

          <IndicatorVisualization sector={selectedSector} isLoading={isLoading} />

          <ImpactAnalysis sector={selectedSector} isLoading={isLoading} />
        </div>

        <div className="space-y-6">
          <UserAccessTier isLoading={isLoading} />
          <CustomAlerts isLoading={isLoading} />
          <RecentActivity isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

