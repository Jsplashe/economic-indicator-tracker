"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Trash2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { getIndicatorOptions } from "@/lib/mock-data"

interface AlertsSetupProps {
  sector: string
}

const alertFormSchema = z.object({
  indicator: z.string().min(1, "Please select an indicator"),
  condition: z.enum(["above", "below", "change"]),
  value: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Value must be a number",
  }),
})

type AlertFormValues = z.infer<typeof alertFormSchema>

export function AlertsSetup({ sector }: AlertsSetupProps) {
  const [alerts, setAlerts] = useState<(AlertFormValues & { id: string })[]>([
    {
      id: "1",
      indicator: "GDP Growth",
      condition: "below",
      value: "0.5",
    },
    {
      id: "2",
      indicator: "Inflation",
      condition: "above",
      value: "3.0",
    },
  ])

  const indicatorOptions = getIndicatorOptions(sector)

  const form = useForm<AlertFormValues>({
    resolver: zodResolver(alertFormSchema),
    defaultValues: {
      indicator: "",
      condition: "above",
      value: "",
    },
  })

  function onSubmit(data: AlertFormValues) {
    const newAlert = {
      ...data,
      id: Math.random().toString(36).substring(2, 9),
    }

    setAlerts([...alerts, newAlert])
    form.reset()
  }

  function deleteAlert(id: string) {
    setAlerts(alerts.filter((alert) => alert.id !== id))
  }

  function getConditionText(condition: string) {
    switch (condition) {
      case "above":
        return "rises above"
      case "below":
        return "falls below"
      case "change":
        return "changes by"
      default:
        return condition
    }
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="indicator"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Indicator</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select indicator" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {indicatorOptions.map((indicator) => (
                        <SelectItem key={indicator} value={indicator}>
                          {indicator}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Condition</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="above">Rises Above</SelectItem>
                      <SelectItem value="below">Falls Below</SelectItem>
                      <SelectItem value="change">Changes By</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter threshold value" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Add Alert</Button>
        </form>
      </Form>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-medium mb-4">Current Alerts</h3>

          {alerts.length === 0 ? (
            <p className="text-muted-foreground">No alerts set up yet.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Indicator</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-medium">{alert.indicator}</TableCell>
                    <TableCell>{getConditionText(alert.condition)}</TableCell>
                    <TableCell>
                      {alert.value}
                      {alert.condition === "change" && "%"}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="flex items-center gap-1 w-24 justify-center">
                        <Bell className="h-3 w-3" /> Active
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => deleteAlert(alert.id)}>
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

