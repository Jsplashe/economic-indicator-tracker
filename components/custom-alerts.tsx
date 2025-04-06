import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"

interface CustomAlertsProps {
  isLoading?: boolean
}

export function CustomAlerts({ isLoading = false }: CustomAlertsProps) {
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
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
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
        <CardTitle>Set a Custom Alert</CardTitle>
        <CardDescription>Get notified when indicators reach specific thresholds</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="indicator">Indicator</Label>
          <Select>
            <SelectTrigger id="indicator" className="transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <SelectValue placeholder="Select indicator" />
            </SelectTrigger>
            <SelectContent className="animate-in fade-in-80 zoom-in-95">
              <SelectItem value="gdp">GDP Growth</SelectItem>
              <SelectItem value="inflation">Inflation Rate</SelectItem>
              <SelectItem value="interest">Interest Rates</SelectItem>
              <SelectItem value="unemployment">Unemployment</SelectItem>
              <SelectItem value="consumer">Consumer Confidence</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="threshold">Threshold</Label>
          <Input
            id="threshold"
            type="number"
            placeholder="Enter value"
            className="transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notification">Notification Method</Label>
          <Select>
            <SelectTrigger
              id="notification"
              className="transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <SelectValue placeholder="Select method" />
            </SelectTrigger>
            <SelectContent className="animate-in fade-in-80 zoom-in-95">
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="sms">SMS</SelectItem>
              <SelectItem value="app">In-App</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full transition-all hover:shadow-md">Create Alert</Button>
      </CardFooter>
    </Card>
  )
}

