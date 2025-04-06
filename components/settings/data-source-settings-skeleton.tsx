import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Database } from "lucide-react"

export function DataSourceSettingsSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <div>
            <CardTitle>Data Source Settings</CardTitle>
            <CardDescription>Configure which data sources to use for economic indicators</CardDescription>
          </div>
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b last:border-0 last:pb-0"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-48" />
                    {i % 3 === 0 && <Skeleton className="h-5 w-16" />}
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-32" />
                </div>
                <Skeleton className="h-6 w-10 rounded-full" />
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

