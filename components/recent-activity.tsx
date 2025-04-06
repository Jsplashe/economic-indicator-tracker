import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Bell, FileText } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface RecentActivityProps {
  isLoading?: boolean
}

export function RecentActivity({ isLoading = false }: RecentActivityProps) {
  const activities = [
    {
      id: 1,
      description: "Viewed Technology sector dashboard",
      time: "2 hours ago",
      icon: Activity,
    },
    {
      id: 2,
      description: "Set alert on Inflation Rate",
      time: "Yesterday",
      icon: Bell,
    },
    {
      id: 3,
      description: "Exported Sector Report",
      time: "2 days ago",
      icon: FileText,
    },
    {
      id: 4,
      description: "Viewed Real Estate sector dashboard",
      time: "3 days ago",
      icon: Activity,
    },
    {
      id: 5,
      description: "Set alert on Interest Rates",
      time: "1 week ago",
      icon: Bell,
    },
  ]

  if (isLoading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-5 w-32" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-64" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Skeleton className="rounded-full h-8 w-8" />
                  <div className="space-y-1 flex-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest interactions with the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="rounded-full bg-muted p-3 mb-4">
                <Activity className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No recent activity</h3>
              <p className="text-sm text-muted-foreground">
                Your recent interactions with the platform will appear here
              </p>
            </div>
          ) : (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 group transition-all hover:bg-muted/50 p-2 rounded-md -mx-2"
              >
                <div className="rounded-full p-2 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <activity.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{activity.description}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}

