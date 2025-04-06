import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Clock, Calendar } from "lucide-react"

interface SectorNewsFeedProps {
  sector: string
}

export function SectorNewsFeed({ sector }: SectorNewsFeedProps) {
  // Mock news data
  const news = [
    {
      id: 1,
      title: `New Regulations Impact ${sector} Companies`,
      source: "Economic Times",
      date: "2 hours ago",
      snippet: `Recent regulatory changes are reshaping how ${sector} companies operate, with implications for investors and market participants.`,
      category: "Regulation",
      url: "#",
    },
    {
      id: 2,
      title: `${sector} Market Shows Strong Q2 Growth`,
      source: "Market Watch",
      date: "Yesterday",
      snippet: `The ${sector} sector outperformed market expectations in Q2, with leading companies reporting better-than-expected earnings.`,
      category: "Market",
      url: "#",
    },
    {
      id: 3,
      title: `Innovation Trends in ${sector} for 2023`,
      source: "Tech Insights",
      date: "3 days ago",
      snippet: `Emerging technologies are transforming the ${sector} landscape, creating new opportunities and challenges for established players.`,
      category: "Innovation",
      url: "#",
    },
    {
      id: 4,
      title: `Global Supply Chain Issues Affect ${sector}`,
      source: "Global Economics",
      date: "1 week ago",
      snippet: `Ongoing supply chain disruptions continue to impact ${sector} companies, with varying effects across different regions.`,
      category: "Supply Chain",
      url: "#",
    },
    {
      id: 5,
      title: `Analyst Predictions for ${sector} in 2023`,
      source: "Investor Daily",
      date: "1 week ago",
      snippet: `Leading analysts share their outlook for the ${sector} sector, highlighting key trends and potential investment opportunities.`,
      category: "Analysis",
      url: "#",
    },
  ]

  // Mock reports data
  const reports = [
    {
      id: 1,
      title: `${sector} Quarterly Outlook`,
      type: "PDF",
      date: "Jun 15, 2023",
      pages: 24,
      url: "#",
    },
    {
      id: 2,
      title: `${sector} Market Analysis`,
      type: "PDF",
      date: "May 28, 2023",
      pages: 42,
      url: "#",
    },
    {
      id: 3,
      title: `Emerging Trends in ${sector}`,
      type: "PDF",
      date: "Apr 10, 2023",
      pages: 18,
      url: "#",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>News & Reports</CardTitle>
        <CardDescription>Latest news, analysis, and reports for the {sector} sector</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="news">
          <TabsList className="mb-4">
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <Badge variant="outline" className="ml-2 whitespace-nowrap">
                    {item.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.snippet}</p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <span>{item.source}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.date}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 gap-1" asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Read more
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}

            <Button variant="outline" className="w-full">
              View All News
            </Button>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <h3 className="font-medium">{report.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {report.date}
                    </span>
                    <span>{report.pages} pages</span>
                    <span>{report.type}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            ))}

            <Button variant="outline" className="w-full">
              View All Reports
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

