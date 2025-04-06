"use client"

import { HelpCircle, Play } from "lucide-react"
import { Banner } from "@/components/ui/banner"
import { Button } from "@/components/ui/button"

export function QuickStartBanner() {
  return (
    <Banner variant="info" className="mb-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <div className="flex-1">
          <p className="font-medium">New here? Take a quick tour or check the documentation.</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          <Button size="sm" className="gap-1.5 transition-all hover:gap-2">
            <Play className="h-3.5 w-3.5" />
            Start Tour
          </Button>
          <Button size="sm" variant="outline" className="gap-1.5">
            <HelpCircle className="h-3.5 w-3.5" />
            View Docs
          </Button>
        </div>
      </div>
    </Banner>
  )
}

