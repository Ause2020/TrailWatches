import { TrailWatchQuiz } from "@/components/trail-watch-quiz"

export default function TrailWatchQuizPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Trail Watch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Answer 8 questions to get personalized recommendations from both G-Shock and Garmin watches
        </p>
      </div>
      <TrailWatchQuiz />
    </div>
  )
}
