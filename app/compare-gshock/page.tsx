import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrailWatchComparison } from "@/components/trail-watch-comparison"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TrailWatches: Compare G-Shock & Garmin Watches 2025",
  description: "Compare G-Shock and Garmin models by price, features, and more at TrailWatches.",
  keywords: "watch comparison, compare G-Shock watches, compare Garmin watches, adventure watch features",
}

export default function CompareWatchesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Compare Watch Models</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Side-by-side comparison of G-Shock and Garmin watches to help you choose the perfect adventure watch
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <TrailWatchComparison />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
