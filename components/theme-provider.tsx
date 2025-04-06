"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
})

interface ThemeProviderProps {
  attribute?: string
  defaultTheme?: Theme
  enableSystem?: boolean
  children: React.ReactNode
}

export function ThemeProvider({
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
    } else if (enableSystem) {
      setTheme(getSystemTheme())
    }
  }, [defaultTheme, enableSystem])

  useEffect(() => {
    if (attribute === "class") {
      if (theme === "system") {
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(getSystemTheme())
      } else if (theme) {
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(theme)
      }
    } else {
      document.documentElement.setAttribute("data-theme", theme)
    }

    if (theme !== "system") {
      localStorage.setItem("theme", theme)
    } else {
      localStorage.removeItem("theme")
    }
  }, [theme, attribute])

  const getSystemTheme = (): Theme => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

