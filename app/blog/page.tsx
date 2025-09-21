import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TrailWatches Blog: Latest Watch News, Reviews & Guides",
  description:
    "Stay updated with the latest G-Shock and Garmin news, in-depth reviews, buying guides, and expert tips from TrailWatches.",
  keywords: "watch blog, G-Shock news, Garmin news, watch reviews, watch guides, trail watches",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full translate-y-40 -translate-x-40 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                TrailWatches
                <span className="block text-accent">Blog</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty mb-8 leading-relaxed max-w-3xl mx-auto">
                Your ultimate source for G-Shock and Garmin insights, expert reviews, and buying guides. 
                <span className="text-accent font-semibold"> Stay ahead of the latest in rugged watches.</span>
              </p>


            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors">
                  All Articles
                </button>
                <button className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors">
                  G-Shock
                </button>
                <button className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors">
                  Garmin
                </button>
                <button className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors">
                  Hiking
                </button>
                <button className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors">
                  Comparison
                </button>
                <button className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors">
                  Budget
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <BlogGrid />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
