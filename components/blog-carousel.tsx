"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from "lucide-react"

const blogArticles = [
  {
    id: 1,
    title: "G-Shock vs Garmin: Which is Better for Hiking?",
    excerpt: "Complete comparison of durability, features, and battery life for outdoor adventures.",
    category: "Comparison",
    readTime: "8 min read",
    image: "/hiking-watch-comparison.jpg",
    slug: "gshock-vs-garmin-hiking",
  },
  {
    id: 2,
    title: "Top 5 G-Shock Models for Extreme Sports",
    excerpt: "Discover the most durable G-Shock watches tested in extreme conditions.",
    category: "G-Shock",
    readTime: "6 min read",
    image: "/extreme-sports-gshock.jpg",
    slug: "top-gshock-extreme-sports",
  },
  {
    id: 3,
    title: "Garmin Instinct 3 Review: Ultimate Outdoor Companion",
    excerpt: "In-depth review of Garmin's latest rugged smartwatch with GPS and fitness tracking.",
    category: "Garmin",
    readTime: "10 min read",
    image: "/garmin-instinct-3-review.jpg",
    slug: "garmin-instinct-3-review",
  },
  {
    id: 4,
    title: "Best Trail Running Watches Under $300",
    excerpt: "Budget-friendly options for serious trail runners who need reliable tracking.",
    category: "Buying Guide",
    readTime: "7 min read",
    image: "/trail-running-watches-budget.jpg",
    slug: "best-trail-running-watches-budget",
  },
  {
    id: 5,
    title: "How to Choose Between Digital and Analog Watches",
    excerpt: "Understanding the pros and cons of different display types for outdoor activities.",
    category: "Guide",
    readTime: "5 min read",
    image: "/digital-vs-analog-watches.jpg",
    slug: "digital-vs-analog-watches",
  },
  {
    id: 6,
    title: "Solar Charging vs Battery Life: What Matters More?",
    excerpt: "Comparing power solutions in modern adventure watches for extended expeditions.",
    category: "Technology",
    readTime: "9 min read",
    image: "/solar-charging-watches.jpg",
    slug: "solar-charging-vs-battery-life",
  },
]

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const articlesPerView = 3

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + articlesPerView
        return nextIndex >= blogArticles.length ? 0 : nextIndex
      })
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + articlesPerView
      return nextIndex >= blogArticles.length ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - articlesPerView
      return prevIndex < 0 ? Math.max(0, blogArticles.length - articlesPerView) : prevIndex
    })
  }

  const visibleArticles = blogArticles.slice(currentIndex, currentIndex + articlesPerView)

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Trail Watch Insights</h2>
            <p className="text-lg text-muted-foreground">Expert reviews, comparisons, and buying guides</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={prevSlide} className="h-10 w-10 p-0 bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextSlide} className="h-10 w-10 p-0 bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow group">
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm mb-4 line-clamp-2">{article.excerpt}</CardDescription>
                <Button asChild variant="ghost" size="sm" className="p-0 h-auto font-semibold">
                  <Link href={`/blog/${article.slug}`} className="flex items-center">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
