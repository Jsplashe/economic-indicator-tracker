import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Check } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface UserAccessTierProps {
  isLoading?: boolean
}

export function UserAccessTier({ isLoading = false }: UserAccessTierProps) {
  // Mock user tier - in a real app, this would come from user data
  const userTier = "Premium"

  if (isLoading) {
    return (
      <Card className="animate-pulse">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-yellow-500" />
            <Skeleton className="h-5 w-32" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-48" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-20" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <div className="space-y-1">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Crown className="h-5 w-5 text-yellow-500" />
          Your Access Tier
        </CardTitle>
        <CardDescription>Current subscription plan and features</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Current Plan:</span>
          <Badge
            variant={userTier === "Free" ? "outline" : userTier === "Premium" ? "default" : "secondary"}
            className="px-3 transition-all hover:opacity-80"
          >
            {userTier}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Features included:</div>
          <ul className="space-y-1">
            <li className="text-sm flex items-center gap-2 transition-colors hover:text-primary">
              <Check className="h-4 w-4 text-primary" />
              Access to all sector dashboards
            </li>
            {userTier !== "Free" && (
              <>
                <li className="text-sm flex items-center gap-2 transition-colors hover:text-primary">
                  <Check className="h-4 w-4 text-primary" />
                  Sector comparisons
                </li>
                <li className="text-sm flex items-center gap-2 transition-colors hover:text-primary">
                  <Check className="h-4 w-4 text-primary" />
                  Advanced forecasting
                </li>
              </>
            )}
            {userTier === "Enterprise" && (
              <>
                <li className="text-sm flex items-center gap-2 transition-colors hover:text-primary">
                  <Check className="h-4 w-4 text-primary" />
                  API access
                </li>
                <li className="text-sm flex items-center gap-2 transition-colors hover:text-primary">
                  <Check className="h-4 w-4 text-primary" />
                  Webhook integrations
                </li>
              </>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full transition-all hover:shadow-md group"
          variant={userTier === "Enterprise" ? "outline" : "default"}
        >
          <span className="group-hover:mr-1 transition-all">
            {userTier === "Enterprise" ? "Manage Plan" : "Upgrade Plan"}
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

