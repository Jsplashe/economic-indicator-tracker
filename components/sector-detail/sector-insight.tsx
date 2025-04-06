import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

interface SectorInsightProps {
  sector: string
}

export function SectorInsight({ sector }: SectorInsightProps) {
  // Generate mock insight based on sector
  const getInsightText = (sector: string) => {
    switch (sector.toLowerCase()) {
      case "technology":
        return {
          summary: `The technology sector shows strong growth potential in Q3 2023, driven by increasing consumer adoption of AI-powered solutions and cloud services. Enterprise spending on digital transformation remains robust despite broader economic concerns.`,
          opportunities: `Emerging opportunities in edge computing, quantum technologies, and sustainable tech solutions present new avenues for growth. Companies focusing on AI ethics and responsible innovation may gain competitive advantages.`,
          risks: `Regulatory scrutiny around data privacy, antitrust concerns, and potential tech-specific taxation pose challenges. The sector also faces talent shortages in specialized fields like cybersecurity and AI research.`,
        }
      case "real estate":
        return {
          summary: `The real estate sector is experiencing moderate pressure due to elevated interest rates, though commercial properties in prime locations continue to demonstrate resilience. Residential markets show regional variations with urban centers stabilizing after post-pandemic adjustments.`,
          opportunities: `Adaptive reuse projects converting commercial spaces to mixed-use developments show promise. Sustainable and energy-efficient buildings command premium valuations and attract ESG-focused investors.`,
          risks: `Extended high interest rate environment may further constrain financing options. Remote work trends continue to impact office space demand in certain markets, requiring strategic repositioning.`,
        }
      case "energy":
        return {
          summary: `The energy sector displays mixed performance with traditional fossil fuel companies benefiting from supply constraints while renewable energy investments accelerate. Policy shifts toward decarbonization are reshaping long-term capital allocation strategies.`,
          opportunities: `Grid modernization initiatives and energy storage solutions present significant growth potential. Hydrogen economy development and carbon capture technologies attract increasing investment.`,
          risks: `Volatile commodity prices and geopolitical tensions create short-term uncertainty. The transition timeline to renewable sources remains subject to policy and technological variables.`,
        }
      case "finance":
        return {
          summary: `The finance sector demonstrates stability despite interest rate fluctuations, with banks benefiting from wider net interest margins. Fintech disruption continues to drive digital transformation across traditional financial institutions.`,
          opportunities: `Embedded finance, decentralized finance (DeFi), and digital asset services represent emerging growth areas. Wealth management services targeting millennials show promising adoption rates.`,
          risks: `Regulatory changes in response to recent banking stresses may increase compliance costs. Competition from non-traditional financial service providers intensifies margin pressure.`,
        }
      default:
        return {
          summary: `The ${sector} sector shows moderate performance in the current economic climate, with specific subsectors demonstrating varying degrees of resilience. Market leaders are adapting to changing consumer behaviors and technological disruption.`,
          opportunities: `Innovation in sustainable practices and digital transformation present growth opportunities. Companies with strong balance sheets are positioned to gain market share through strategic acquisitions.`,
          risks: `Inflationary pressures and supply chain disruptions continue to impact operational efficiency. Changing regulatory landscapes require agile response strategies.`,
        }
    }
  }

  const insight = getInsightText(sector)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          <CardTitle>Sector Insight</CardTitle>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>AI-generated insights coming soon</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Summary</h3>
          <p className="text-sm text-muted-foreground">{insight.summary}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Opportunities</h3>
          <p className="text-sm text-muted-foreground">{insight.opportunities}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Risks & Challenges</h3>
          <p className="text-sm text-muted-foreground">{insight.risks}</p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Badge variant="outline" className="text-xs">
            Last updated: Today
          </Badge>
          <Badge variant="secondary" className="text-xs">
            AI-Generated
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

