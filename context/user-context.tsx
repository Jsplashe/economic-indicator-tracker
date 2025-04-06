"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  role: string
}

interface UserContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isInitialized: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const router = useRouter()

  // Check for user in localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage")
      localStorage.removeItem("user")
    } finally {
      setIsInitialized(true)
    }
  }, [])

  const login = (userData: User) => {
    // Ensure we have valid data even if fields are empty
    const validUserData = {
      id: userData.id || "1",
      name: userData.name || "Demo User",
      email: userData.email || "demo@example.com",
      role: userData.role || "analyst",
    }

    // Update state
    setUser(validUserData)

    // Update localStorage
    try {
      localStorage.setItem("user", JSON.stringify(validUserData))
    } catch (error) {
      console.error("Failed to save user to localStorage", error)
    }
  }

  const logout = () => {
    setUser(null)
    try {
      localStorage.removeItem("user")
    } catch (error) {
      console.error("Failed to remove user from localStorage", error)
    }
    router.push("/login")
  }

  return <UserContext.Provider value={{ user, login, logout, isInitialized }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

