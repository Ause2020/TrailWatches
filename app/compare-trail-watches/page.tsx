import { TrailWatchComparison } from "@/components/trail-watch-comparison"

export default function CompareTrailWatchesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Compare Trail Watches</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Side-by-side comparison of G-Shock and Garmin watches to help you make the right choice
        </p>
      </div>
      <TrailWatchComparison />
    </div>
  )
}
