import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Code } from "lucide-react"

export function ApiAccessPanelSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <div>
            <CardTitle>API Access</CardTitle>
            <CardDescription>Access economic data programmatically</CardDescription>
          </div>
        </div>
        <Skeleton className="h-5 w-32" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-10" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid w-full grid-cols-3 gap-1">
            <Skeleton className="h-10 rounded-l-md rounded-r-none" />
            <Skeleton className="h-10 rounded-none" />
            <Skeleton className="h-10 rounded-r-md rounded-l-none" />
          </div>

          <div className="space-y-2 pt-4">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
          </div>

          <div className="rounded-md bg-muted p-4">
            <div className="flex items-start gap-4">
              <Skeleton className="h-5 w-5" />
              <div className="flex-1">
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-[95%] mb-2" />
                <Skeleton className="h-9 w-28" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  )
}

