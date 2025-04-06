import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Copy, RefreshCw, Lock, Code } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ApiAccessPanel() {
  // Mock API key
  const apiKey = "sk_live_••••••••••••••••••••••••••"

  // Mock user tier - in a real app, this would come from user data
  const userTier = "Premium"
  const hasApiAccess = userTier === "Enterprise"

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <div>
            <CardTitle>API Access</CardTitle>
            <CardDescription>Access economic data programmatically</CardDescription>
          </div>
        </div>
        {!hasApiAccess && (
          <Badge variant="outline" className="gap-1">
            <Lock className="h-3 w-3" /> Enterprise Only
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <div className="flex gap-2">
            <Input id="api-key" value={apiKey} readOnly disabled={!hasApiAccess} className="font-mono text-sm" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" disabled={!hasApiAccess}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy API key</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="endpoints" disabled={!hasApiAccess}>
              Endpoints
            </TabsTrigger>
            <TabsTrigger value="usage" disabled={!hasApiAccess}>
              Usage
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">API Access Information</h3>
              <p className="text-sm text-muted-foreground">
                {hasApiAccess
                  ? "Your API key grants access to all endpoints. Keep it secure and do not share it publicly."
                  : "API access is available for Enterprise users only. Upgrade your plan to access our comprehensive API endpoints."}
              </p>
            </div>

            {!hasApiAccess && (
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start gap-4">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h4 className="text-sm font-medium">Enterprise Feature</h4>
                    <p className="text-sm text-muted-foreground">
                      Upgrade to our Enterprise plan to access the full API capabilities, including real-time data
                      retrieval and historical analysis.
                    </p>
                    <Button className="mt-2" size="sm">
                      Upgrade Plan
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="endpoints" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Available Endpoints</h3>
              <div className="space-y-2">
                <div className="rounded-md bg-muted p-2">
                  <p className="font-mono text-xs">/api/v1/indicators</p>
                </div>
                <div className="rounded-md bg-muted p-2">
                  <p className="font-mono text-xs">/api/v1/sectors</p>
                </div>
                <div className="rounded-md bg-muted p-2">
                  <p className="font-mono text-xs">/api/v1/forecasts</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="usage" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">API Usage</h3>
              <p className="text-sm text-muted-foreground">Your current plan includes 10,000 API calls per month.</p>
              <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[35%]"></div>
              </div>
              <p className="text-xs text-muted-foreground">3,500 / 10,000 calls used this month</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline" disabled={!hasApiAccess}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Generate New Key
        </Button>
      </CardFooter>
    </Card>
  )
}

