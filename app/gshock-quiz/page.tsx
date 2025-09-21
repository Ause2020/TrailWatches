import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GShockQuiz } from "@/components/gshock-quiz"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TrailWatches: Which Adventure Watch is Right for You? 2025 Quiz",
  description: "Take TrailWatches' quiz to find the perfect G-Shock or Garmin for sports, daily use, or collecting.",
  keywords: "watch quiz, which watch, adventure watch finder, watch recommendation",
}

export default function GShockQuizPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Which Adventure Watch is Right for You?</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Answer 3 simple questions to find your perfect G-Shock or Garmin match
            </p>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <GShockQuiz />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
