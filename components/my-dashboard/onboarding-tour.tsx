"use client"

import { useState } from "react"
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function OnboardingTour() {
  const [step, setStep] = useState(1)
  const [open, setOpen] = useState(false)

  const totalSteps = 3

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      setOpen(false)
      setStep(1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const getStepContent = () => {
    switch (step) {
      case 1:
        return {
          title: "Welcome to Your Dashboard",
          description:
            "This is your personalized hub for tracking economic indicators across different sectors. Let's take a quick tour to help you get started.",
          image: "/placeholder.svg?height=200&width=400",
        }
      case 2:
        return {
          title: "Track Your Favorite Sectors",
          description:
            "Save your most important sectors for quick access. View detailed analytics, forecasts, and correlations for each sector.",
          image: "/placeholder.svg?height=200&width=400",
        }
      case 3:
        return {
          title: "Set Up Custom Alerts",
          description:
            "Create alerts to get notified when economic indicators reach specific thresholds. Stay informed about important changes in the economy.",
          image: "/placeholder.svg?height=200&width=400",
        }
      default:
        return {
          title: "",
          description: "",
          image: "",
        }
    }
  }

  const content = getStepContent()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <HelpCircle className="h-4 w-4 mr-2" />
          Quick Tour
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <DialogDescription>{content.description}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-4">
          <img
            src={content.image || "/placeholder.svg"}
            alt={`Step ${step} illustration`}
            className="rounded-md border"
          />
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-0">
          <div className="flex items-center">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className={`h-2 w-2 rounded-full mx-1 ${i + 1 === step ? "bg-primary" : "bg-muted"}`} />
            ))}
          </div>
          <div className="flex justify-end space-x-2 mt-4 sm:mt-0">
            {step > 1 && (
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            <Button onClick={nextStep}>{step === totalSteps ? "Finish" : "Next"}</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

