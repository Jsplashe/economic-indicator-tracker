import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function SubscriptionManagement() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Basic access to sector dashboards",
      features: [
        { name: "View sector dashboards", included: true },
        { name: "Basic indicators", included: true },
        { name: "Historical data (1 year)", included: true },
        { name: "Sector comparisons", included: false },
        { name: "Forecasting", included: false },
        { name: "API access", included: false },
      ],
      current: false,
    },
    {
      name: "Premium",
      price: "$29",
      period: "per month",
      description: "Advanced features for analysts and investors",
      features: [
        { name: "View sector dashboards", included: true },
        { name: "Advanced indicators", included: true },
        { name: "Historical data (10 years)", included: true },
        { name: "Sector comparisons", included: true },
        { name: "Forecasting", included: true },
        { name: "API access", included: false },
      ],
      current: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "Full access with API integration",
      features: [
        { name: "View sector dashboards", included: true },
        { name: "All indicators", included: true },
        { name: "Historical data (unlimited)", included: true },
        { name: "Sector comparisons", included: true },
        { name: "Advanced forecasting", included: true },
        { name: "API access & webhooks", included: true },
      ],
      current: false,
    },
  ]

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Manage Subscription</h2>
        <p className="text-muted-foreground">Choose the plan that best fits your needs</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.current ? "border-primary" : ""}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-2xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> {plan.period}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground mt-0.5" />
                    )}
                    <span className="text-sm">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.current ? "outline" : "default"} disabled={plan.current}>
                {plan.current ? "Current Plan" : "Select Plan"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

