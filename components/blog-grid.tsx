"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, ArrowRight, Calendar, TrendingUp } from "lucide-react"

const blogArticles = [
  {
    id: 7,
    title: "Top Models: G-Shock and Garmin in Action - Smartwatches for Adventure 2025",
    excerpt: "Discover the top G-Shock and Garmin smartwatches for adventure in 2025, featuring rugged MUDMASTER models, AI-powered fitness tracking, and cutting-edge outdoor technology.",
    category: "Adventure",
    readTime: "10 min read",
    image: "/content/blogs/top-gshock-garmin-models-action-2025/images/portada.png",
    slug: "top-gshock-garmin-models-action-2025",
    publishDate: "2025-01-26",
    featured: true,
  },
  {
    id: 1,
    title: "Best Trail Watches for Hiking in 2025: Rugged and Reliable Options",
    excerpt: "Discover the top 6 trail watches for hiking in 2025, featuring G-Shock and Garmin models with GPS, durability, and long battery life.",
    category: "Hiking",
    readTime: "8 min read",
    image: "/hiking-watch-comparison.jpg",
    slug: "best-trail-watches-hiking-2025",
    publishDate: "2025-01-15",
    featured: true,
  },
  {
    id: 2,
    title: "Top G-Shock Watches for Outdoor Adventures: Durable Picks for 2025",
    excerpt: "Explore the best G-Shock models for outdoor adventures, from budget-friendly options to advanced GPS-enabled watches.",
    category: "G-Shock",
    readTime: "6 min read",
    image: "/extreme-sports-gshock.jpg",
    slug: "top-gshock-watches-outdoor-adventures-2025",
    publishDate: "2025-01-12",
    featured: false,
  },
  {
    id: 3,
    title: "Best Garmin Watches for Runners and Athletes: 2025 Guide",
    excerpt: "Complete guide to Garmin's top running watches, featuring GPS tracking, health metrics, and training features for athletes.",
    category: "Garmin",
    readTime: "10 min read",
    image: "/garmin-instinct-3-review.jpg",
    slug: "best-garmin-watches-runners-athletes-2025",
    publishDate: "2025-01-10",
    featured: true,
  },
  {
    id: 4,
    title: "G-Shock vs Garmin: Which is Better for Trail Running?",
    excerpt: "Detailed comparison between G-Shock and Garmin watches for trail running, covering durability, features, and value.",
    category: "Comparison",
    readTime: "7 min read",
    image: "/trail-running-watches-budget.jpg",
    slug: "gshock-vs-garmin-trail-running-2025",
    publishDate: "2025-01-08",
    featured: false,
  },
  {
    id: 5,
    title: "Affordable Rugged Watches Under $200: Trail-Ready Options",
    excerpt: "Find the best budget-friendly rugged watches under $200, perfect for beginners and budget-conscious adventurers.",
    category: "Budget",
    readTime: "5 min read",
    image: "/digital-vs-analog-watches.jpg",
    slug: "affordable-rugged-watches-under-200-2025",
    publishDate: "2025-01-05",
    featured: false,
  },
  {
    id: 6,
    title: "Premium Features of Garmin Watches for Endurance Sports",
    excerpt: "Explore Garmin's premium watches designed for endurance sports, featuring solar charging and advanced training metrics.",
    category: "Endurance",
    readTime: "9 min read",
    image: "/solar-charging-watches.jpg",
    slug: "premium-garmin-watches-endurance-sports-2025",
    publishDate: "2025-01-03",
    featured: false,
  },
]

export function BlogGrid() {
  const featuredArticles = blogArticles.filter(article => article.featured)
  const regularArticles = blogArticles.filter(article => !article.featured)

  return (
    <div className="space-y-16">
      {/* Featured Articles */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-bold">Featured Articles</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="block group">
              <Card className="hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full border-2 hover:border-accent/20 overflow-hidden">
                <CardHeader className="p-0 relative">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg overflow-hidden relative">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-accent text-accent-foreground animate-pulse">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base mb-6 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Regular Articles */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="block group">
              <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer h-full border hover:border-accent/20 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg overflow-hidden">
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
                  </div>
                  
                  <CardTitle className="text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm mb-4 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}