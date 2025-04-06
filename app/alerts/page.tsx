"use client"

import { useState, useEffect } from "react"
import { Bell, Plus, Trash2, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { AlertEmptyState } from "@/components/alerts/alert-empty-state"
import { AlertTableSkeleton } from "@/components/alerts/alert-table-skeleton"

export default function AlertCenterPage() {
  const [isAddAlertOpen, setIsAddAlertOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Mock alerts data
  const [alerts, setAlerts] = useState([
    {
      id: "1",
      indicator: "GDP Growth",
      sector: "Technology",
      threshold: "< 2.5%",
      method: "Email",
      status: true,
      lastTriggered: "Never",
    },
    {
      id: "2",
      indicator: "Inflation",
      sector: "All Sectors",
      threshold: "> 3.0%",
      method: "In-App",
      status: true,
      lastTriggered: "2 days ago",
    },
    {
      id: "3",
      indicator: "Interest Rate",
      sector: "Real Estate",
      threshold: "> 4.5%",
      method: "Email, SMS",
      status: false,
      lastTriggered: "1 week ago",
    },
  ])

  // Form state
  const [newAlert, setNewAlert] = useState({
    indicator: "",
    sector: "",
    threshold: "",
    thresholdValue: "",
    method: "",
  })

  // Toggle alert status
  const toggleAlertStatus = (id: string) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, status: !alert.status } : alert)))
  }

  // Delete alert
  const deleteAlert = (id: string) => {
    setAlerts(alerts.filter((alert) => alert.id !== id))
  }

  // Add new alert
  const addAlert = () => {
    // Simulate loading
    setIsLoading(true)

    setTimeout(() => {
      const newAlertItem = {
        id: Math.random().toString(36).substring(2, 9),
        indicator: newAlert.indicator,
        sector: newAlert.sector || "All Sectors",
        threshold: `${newAlert.threshold} ${newAlert.thresholdValue}`,
        method: newAlert.method,
        status: true,
        lastTriggered: "Never",
      }

      setAlerts([...alerts, newAlertItem])
      setNewAlert({
        indicator: "",
        sector: "",
        threshold: "",
        thresholdValue: "",
        method: "",
      })
      setIsAddAlertOpen(false)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Bell className="h-6 w-6" />
            Alert Center
          </h1>
          <p className="text-muted-foreground">Manage your custom alerts for economic indicators</p>
        </div>
        <Button onClick={() => setIsAddAlertOpen(!isAddAlertOpen)} className="transition-all hover:shadow-md group">
          <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
          Add Alert
        </Button>
      </div>

      {/* Add/Edit Alert Form */}
      <Collapsible open={isAddAlertOpen} onOpenChange={setIsAddAlertOpen}>
        <CollapsibleContent className="mt-4 animate-in slide-in-from-top-5 duration-300">
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Create New Alert</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 transition-opacity hover:opacity-70">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="animate-in fade-in-50 zoom-in-95">
                      <p>Set up alerts to be notified when indicators reach specific thresholds</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CardDescription>Get notified when economic indicators reach your specified thresholds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="indicator">Indicator</Label>
                  <Select
                    value={newAlert.indicator}
                    onValueChange={(value) => setNewAlert({ ...newAlert, indicator: value })}
                  >
                    <SelectTrigger
                      id="indicator"
                      className="transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <SelectValue placeholder="Select indicator" />
                    </SelectTrigger>
                    <SelectContent className="animate-in fade-in-80 zoom-in-95">
                      <SelectItem value="GDP Growth">GDP Growth</SelectItem>
                      <SelectItem value="Inflation">Inflation</SelectItem>
                      <SelectItem value="Interest Rate">Interest Rate</SelectItem>
                      <SelectItem value="Unemployment">Unemployment</SelectItem>
                      <SelectItem value="Consumer Confidence">Consumer Confidence</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sector">Sector (Optional)</Label>
                  <Select
                    value={newAlert.sector}
                    onValueChange={(value) => setNewAlert({ ...newAlert, sector: value })}
                  >
                    <SelectTrigger
                      id="sector"
                      className="transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <SelectValue placeholder="All Sectors" />
                    </SelectTrigger>
                    <SelectContent className="animate-in fade-in-80 zoom-in-95">
                      <SelectItem value="All Sectors">All Sectors</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Real Estate">Real Estate</SelectItem>
                      <SelectItem value="Energy">Energy</SelectItem>
                      <SelectItem value="Consumer Goods">Consumer Goods</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                      <SelectItem value="Industrials">Industrials</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="method">Notification Method</Label>
                  <Select
                    value={newAlert.method}
                    onValueChange={(value) => setNewAlert({ ...newAlert, method: value })}
                  >
                    <SelectTrigger
                      id="method"
                      className="transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent className="animate-in fade-in-80 zoom-in-95">
                      <SelectItem value="Email">Email</SelectItem>
                      <SelectItem value="SMS">SMS</SelectItem>
                      <SelectItem value="In-App">In-App</SelectItem>
                      <SelectItem value="Email, SMS">Email & SMS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="threshold">Threshold Condition</Label>
                  <Select
                    value={newAlert.threshold}
                    onValueChange={(value) => setNewAlert({ ...newAlert, threshold: value })}
                  >
                    <SelectTrigger
                      id="threshold"
                      className="transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent className="animate-in fade-in-80 zoom-in-95">
                      <SelectItem value=">">Greater than (&gt;)</SelectItem>
                      <SelectItem value="<">Less than (&lt;)</SelectItem>
                      <SelectItem value="=">Equal to (=)</SelectItem>
                      <SelectItem value=">=">Greater than or equal to (≥)</SelectItem>
                      <SelectItem value="<=">Less than or equal to (≤)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="threshold-value">Threshold Value</Label>
                  <div className="flex">
                    <Input
                      id="threshold-value"
                      type="text"
                      placeholder="e.g. 3.5%"
                      value={newAlert.thresholdValue}
                      onChange={(e) => setNewAlert({ ...newAlert, thresholdValue: e.target.value })}
                      className="transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setIsAddAlertOpen(false)}
                className="transition-all hover:bg-muted"
              >
                Cancel
              </Button>
              <Button
                onClick={addAlert}
                disabled={
                  isLoading ||
                  !newAlert.indicator ||
                  !newAlert.threshold ||
                  !newAlert.thresholdValue ||
                  !newAlert.method
                }
                className="transition-all hover:shadow-md"
              >
                {isLoading ? "Creating..." : "Create Alert"}
              </Button>
            </CardFooter>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Alerts Table */}
      <Card className="transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle>Your Alerts</CardTitle>
          <CardDescription>Manage and monitor your custom economic indicator alerts</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <AlertTableSkeleton />
          ) : alerts.length === 0 ? (
            <AlertEmptyState />
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-muted/50">
                  <TableHead>Indicator</TableHead>
                  <TableHead>Sector</TableHead>
                  <TableHead>Threshold</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Triggered</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.map((alert) => (
                  <TableRow key={alert.id} className="transition-colors hover:bg-muted/50">
                    <TableCell className="font-medium">{alert.indicator}</TableCell>
                    <TableCell>{alert.sector}</TableCell>
                    <TableCell>{alert.threshold}</TableCell>
                    <TableCell>{alert.method}</TableCell>
                    <TableCell>
                      <Switch
                        checked={alert.status}
                        onCheckedChange={() => toggleAlertStatus(alert.id)}
                        className="transition-opacity hover:opacity-80"
                      />
                    </TableCell>
                    <TableCell className="text-muted-foreground">{alert.lastTriggered}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteAlert(alert.id)}
                        className="transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

