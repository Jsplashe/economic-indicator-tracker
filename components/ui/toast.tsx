"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  title: string
  description?: string
  onClose?: () => void
}

export function Toast({ title, description, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onClose?.()
      }, 300)
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 max-w-md rounded-lg border bg-background p-4 shadow-lg transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full flex-col gap-1">
          <div className="text-sm font-semibold">{title}</div>
          {description && <div className="text-sm text-muted-foreground">{description}</div>}
        </div>
        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(() => {
              onClose?.()
            }, 300)
          }}
          className="rounded-full p-1 hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export function Toaster() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  // This would normally be connected to a global toast state
  // For this UI-only implementation, we'll just show a demo toast

  return (
    <>
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          {...toast}
          onClose={() => {
            setToasts((prev) => prev.filter((_, i) => i !== index))
          }}
        />
      ))}
    </>
  )
}

