import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chef Narayan Shrestha | Professional Chef Portfolio",
  description:
    "Professional chef specializing in modern French cuisine with a Mediterranean twist. Private chef services, catering, and cooking classes.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}