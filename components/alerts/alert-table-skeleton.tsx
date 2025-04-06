import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function AlertTableSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-32" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-64" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="h-10 px-4 border-b flex items-center">
            <div className="grid grid-cols-7 w-full">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-24" />
              <div className="flex justify-end">
                <Skeleton className="h-4 w-8" />
              </div>
            </div>
          </div>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-16 px-4 border-b last:border-0 flex items-center">
                <div className="grid grid-cols-7 w-full">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20" />
                  <div className="flex items-center">
                    <Skeleton className="h-6 w-10 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-20" />
                  <div className="flex justify-end">
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

