"use client"
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserAccessTier } from "@/components/settings/user-access-tier"
import { SubscriptionManagement } from "@/components/settings/subscription-management"
import { ApiAccessPanel } from "@/components/settings/api-access-panel"
import { ApiAccessPanelSkeleton } from "@/components/settings/api-access-panel-skeleton"
import { ApiAccessUpgrade } from "@/components/settings/api-access-upgrade"
import { DataSourceSettings } from "@/components/settings/data-source-settings"
import { DataSourceSettingsSkeleton } from "@/components/settings/data-source-settings-skeleton"
import { DataSourceEmptyState } from "@/components/settings/data-source-empty-state"
import { UserPreferences } from "@/components/settings/user-preferences"
import { UserPreferencesSkeleton } from "@/components/settings/user-preferences-skeleton"
import { DownloadReports } from "@/components/settings/download-reports"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("account")

  // Mock user tier - in a real app, this would come from user data
  const userTier = "Premium"
  const hasApiAccess = userTier === "Enterprise"
  const hasDataSources = true // Mock state

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="transition-all">
          <TabsTrigger value="account" className="transition-all data-[state=active]:shadow-sm">
            Account
          </TabsTrigger>
          <TabsTrigger value="preferences" className="transition-all data-[state=active]:shadow-sm">
            Preferences
          </TabsTrigger>
          <TabsTrigger value="data" className="transition-all data-[state=active]:shadow-sm">
            Data Sources
          </TabsTrigger>
          <TabsTrigger value="api" className="transition-all data-[state=active]:shadow-sm">
            API
          </TabsTrigger>
          <TabsTrigger value="subscription" className="transition-all data-[state=active]:shadow-sm">
            Subscription
          </TabsTrigger>
          <TabsTrigger value="reports" className="transition-all data-[state=active]:shadow-sm">
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4 animate-in fade-in-50">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <UserAccessTier isLoading={isLoading} />
          </div>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4 animate-in fade-in-50">
          {isLoading ? <UserPreferencesSkeleton /> : <UserPreferences />}
        </TabsContent>

        <TabsContent value="data" className="space-y-4 animate-in fade-in-50">
          {isLoading ? (
            <DataSourceSettingsSkeleton />
          ) : hasDataSources ? (
            <DataSourceSettings />
          ) : (
            <DataSourceEmptyState />
          )}
        </TabsContent>

        <TabsContent value="api" className="space-y-4 animate-in fade-in-50">
          {isLoading ? <ApiAccessPanelSkeleton /> : hasApiAccess ? <ApiAccessPanel /> : <ApiAccessUpgrade />}
        </TabsContent>

        <TabsContent value="subscription" className="space-y-4 animate-in fade-in-50">
          <SubscriptionManagement />
        </TabsContent>

        <TabsContent value="reports" className="space-y-4 animate-in fade-in-50">
          <DownloadReports />
        </TabsContent>
      </Tabs>
    </div>
  )
}

