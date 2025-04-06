"use client"

import Link from "next/link"
import { Star, FileText, Bell, User, Download, HelpCircle, ArrowRight, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { OnboardingTour } from "@/components/my-dashboard/onboarding-tour"
import { SavedSectorsEmptyState } from "@/components/my-dashboard/saved-sectors-empty-state"
import { RecentReportsEmptyState } from "@/components/my-dashboard/recent-reports-empty-state"

export default function MyDashboardPage() {
  // Mock data for saved sectors
  const savedSectors = [
    {
      id: "1",
      name: "Technology",
      lastViewed: "2 hours ago",
      indicators: ["GDP Growth", "R&D Spending", "Tech Adoption Rate"],
      trend: "up",
    },
    {
      id: "2",
      name: "Real Estate",
      lastViewed: "Yesterday",
      indicators: ["Housing Starts", "Mortgage Rates", "Home Price Index"],
      trend: "down",
    },
    {
      id: "3",
      name: "Finance",
      lastViewed: "3 days ago",
      indicators: ["Interest Rates", "Banking Index", "Credit Default Rates"],
      trend: "up",
    },
  ]

  // Mock data for recent reports
  const recentReports = [
    {
      id: "1",
      name: "Technology Sector Q2 Report",
      date: "Jun 15, 2023",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      id: "2",
      name: "Real Estate Market Analysis",
      date: "May 28, 2023",
      type: "PDF",
      size: "3.1 MB",
    },
    {
      id: "3",
      name: "Economic Indicators Monthly Summary",
      date: "May 10, 2023",
      type: "CSV",
      size: "1.8 MB",
    },
  ]

  // Mock user data
  const userData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    plan: "Premium",
    apiAccess: true,
    alertsCount: 3,
    reportsCount: 5,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
          <p className="text-muted-foreground">Your personalized economic indicator tracking hub</p>
        </div>
        <OnboardingTour />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Account Overview */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Plan</span>
              <Badge>{userData.plan}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">API Access</span>
              <Badge variant={userData.apiAccess ? "default" : "outline"}>
                {userData.apiAccess ? "Enabled" : "Disabled"}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Active Alerts</span>
              <span>{userData.alertsCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Saved Reports</span>
              <span>{userData.reportsCount}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/settings">Manage Subscription</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Alert Summary */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Alert Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Active Alerts</span>
              <Badge variant="outline">{userData.alertsCount}</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-sm">Recent Notifications:</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Inflation &gt; 3.0%</span>
                  <span className="text-xs text-muted-foreground">2 days ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Interest Rate {`>`} 4.5%</span>
                  <span className="text-xs text-muted-foreground">1 week ago</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/alerts">View Alert Center</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Quick Help */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Quick Help
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">New here?</h3>
              <p className="text-sm text-muted-foreground">
                Check out our quick start guide to get the most out of your economic indicator tracking.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Need assistance?</h3>
              <p className="text-sm text-muted-foreground">
                Our comprehensive documentation covers all features and functionalities.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button variant="outline" className="w-full">
              View Quick Start Guide
            </Button>
            <Button variant="ghost" className="w-full">
              Browse Documentation
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Saved Sectors */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Saved Sectors
            </CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <CardDescription>Quick access to your favorite economic sectors</CardDescription>
        </CardHeader>
        <CardContent>
          {savedSectors.length === 0 ? (
            <SavedSectorsEmptyState />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {savedSectors.map((sector) => (
                <Card key={sector.id} className="overflow-hidden">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{sector.name}</CardTitle>
                      <Badge variant={sector.trend === "up" ? "default" : "destructive"}>
                        {sector.trend === "up" ? "Rising" : "Falling"}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Last viewed: {sector.lastViewed}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-sm text-muted-foreground mb-2">Key indicators:</div>
                    <ul className="text-sm space-y-1">
                      {sector.indicators.map((indicator, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          {indicator}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                      <Link href={`/sectors/${sector.name.toLowerCase()}`}>
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Reports
            </CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <CardDescription>Your recently generated economic reports</CardDescription>
        </CardHeader>
        <CardContent>
          {recentReports.length === 0 ? (
            <RecentReportsEmptyState />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.name}</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {report.date}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{report.type}</Badge>
                    </TableCell>
                    <TableCell>{report.size}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
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

