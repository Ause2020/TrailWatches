import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "TrailWatches: Best G-Shock & Garmin Watches 2025 | Reviews & Guides",
  description:
    "Discover the best G-Shock and Garmin watches for sports, daily wear, and collectors at TrailWatches. Compare models, take our quiz, and find deals.",
  generator: "TrailWatches",
  keywords: "G-Shock, Garmin, rugged watches, sports watches, watch reviews, watch comparison, trail watches",
  authors: [{ name: "TrailWatches" }],
  creator: "TrailWatches",
  publisher: "TrailWatches",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "TrailWatches: Find Your Perfect Adventure Watch in 2025",
    description: "Expert Reviews, Guides, and Comparisons for Rugged Watches",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000",
    siteName: "TrailWatches",
    images: [
      {
        url: "/og-image.png", // Necesitarás crear esta imagen
        width: 1200,
        height: 630,
        alt: "TrailWatches - Expert Adventure Watch Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrailWatches: Best G-Shock & Garmin Watches 2025",
    description: "Expert Reviews, Guides, and Comparisons for Rugged Watches",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://trailwatches.com",
  },
  verification: {
    google: "SPVoeyIHa3t5IjBrJAEk0IU7ixdTs19TgB99ZT5qKoI",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
