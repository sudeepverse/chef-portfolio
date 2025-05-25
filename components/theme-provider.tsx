"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add suppressHydrationWarning to prevent hydration mismatch errors
  return (
    <NextThemesProvider {...props} enableSystem={false} defaultTheme="light">
      <div suppressHydrationWarning>{children}</div>
    </NextThemesProvider>
  )
}