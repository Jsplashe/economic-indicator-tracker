import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function CorrelationHeatmapSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>
            <Skeleton className="h-6 w-48" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-72 mt-1" />
          </CardDescription>
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Header row */}
            <div className="grid grid-cols-[150px_repeat(5,1fr)] mb-2">
              <div className="text-sm font-medium"></div>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex justify-center">
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
            </div>

            {/* Matrix rows */}
            {Array(5)
              .fill(0)
              .map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-[150px_repeat(5,1fr)] mb-1">
                  <div className="pr-4">
                    <Skeleton className="h-4 w-28" />
                  </div>
                  {Array(5)
                    .fill(0)
                    .map((_, colIndex) => (
                      <div key={colIndex} className="flex justify-center py-2">
                        <Skeleton
                          className={`h-6 w-12 ${rowIndex === colIndex ? "bg-gray-300 dark:bg-gray-700" : ""}`}
                        />
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-3 justify-center">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="w-3 h-3" />
                <Skeleton className="h-3 w-20" />
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

