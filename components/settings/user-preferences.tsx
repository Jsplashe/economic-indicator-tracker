import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Settings, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function UserPreferences() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          <div>
            <CardTitle>User Preferences</CardTitle>
            <CardDescription>Customize your dashboard experience</CardDescription>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Personalize how data is displayed in your dashboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select defaultValue="utc">
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
              <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
              <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
              <SelectItem value="mst">MST (Mountain Standard Time)</SelectItem>
              <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
              <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
              <SelectItem value="cet">CET (Central European Time)</SelectItem>
              <SelectItem value="jst">JST (Japan Standard Time)</SelectItem>
              <SelectItem value="aest">AEST (Australian Eastern Standard Time)</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground mt-1">
            All time-based data will be displayed in your selected timezone
          </p>
        </div>

        <div className="space-y-2">
          <Label>Currency Format</Label>
          <RadioGroup defaultValue="usd" className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="usd" id="usd" />
              <Label htmlFor="usd" className="font-normal">
                USD ($) - United States Dollar
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="eur" id="eur" />
              <Label htmlFor="eur" className="font-normal">
                EUR (€) - Euro
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gbp" id="gbp" />
              <Label htmlFor="gbp" className="font-normal">
                GBP (£) - British Pound
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="jpy" id="jpy" />
              <Label htmlFor="jpy" className="font-normal">
                JPY (¥) - Japanese Yen
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cny" id="cny" />
              <Label htmlFor="cny" className="font-normal">
                CNY (¥) - Chinese Yuan
              </Label>
            </div>
          </RadioGroup>
          <p className="text-xs text-muted-foreground mt-1">
            Monetary values will be converted and displayed in your selected currency
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="refresh-rate">Data Refresh Rate</Label>
          <Select defaultValue="daily">
            <SelectTrigger id="refresh-rate">
              <SelectValue placeholder="Select refresh rate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="realtime">Real-time (Premium only)</SelectItem>
              <SelectItem value="hourly">Hourly (Premium only)</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground mt-1">How frequently your dashboard data will be updated</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="chart-style">Chart Style</Label>
          <Select defaultValue="modern">
            <SelectTrigger id="chart-style">
              <SelectValue placeholder="Select chart style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="classic">Classic</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
              <SelectItem value="detailed">Detailed</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground mt-1">Visual style for charts and data visualizations</p>
        </div>
      </CardContent>
    </Card>
  )
}

