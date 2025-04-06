"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { UserProvider, useUser } from "@/context/user-context"

// Create a middleware component to check authentication
function AuthCheck({ children }: { children: React.ReactNode }) {
  const { user } = useUser()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Add a small delay to ensure localStorage is checked
    const checkAuth = setTimeout(() => {
      if (!user) {
        router.push("/login")
      }
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(checkAuth)
  }, [user, router])

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-lg">Loading dashboard...</div>
      </div>
    )
  }

  // Don't render children until we confirm user is logged in
  if (!user) return null

  return <>{children}</>
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <AuthCheck>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <DashboardSidebar />
            <div className="flex flex-col flex-1">
              <TopNavbar />
              <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </AuthCheck>
    </UserProvider>
  )
}

