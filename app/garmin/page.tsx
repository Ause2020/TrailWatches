import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, MapPin, Heart, Activity, Star, ArrowRight, Zap, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Garmin Watches - Coming Soon | TrailWatches",
  description: "Our comprehensive Garmin collection is coming soon. Explore fitness trackers to premium multisport watches with expert reviews and detailed comparisons.",
  keywords: "Garmin watches, Garmin fitness, smartwatches, multisport watches, outdoor watches, GPS watches",
}

export default function GarminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full translate-y-40 -translate-x-40 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Coming Soon Badge */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/30">
                  <Clock className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <span className="text-cyan-400 font-semibold">Coming Soon</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                Garmin
                <span className="block text-cyan-400">Collection</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 text-pretty mb-8 leading-relaxed max-w-3xl mx-auto">
                We're building the ultimate Garmin smartwatch guide with comprehensive reviews, GPS performance tests, and 
                <span className="text-cyan-400 font-semibold"> everything you need for your active lifestyle.</span>
              </p>
              
              {/* What to Expect */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-sm text-white/80">Garmin Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">GPS</div>
                  <div className="text-sm text-white/80">Performance Tests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">Fitness</div>
                  <div className="text-sm text-white/80">Feature Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">Expert</div>
                  <div className="text-sm text-white/80">Recommendations</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8">
                  <Link href="/trail-watch-quiz">
                    <Star className="w-5 h-5 mr-2" />
                    Take Our Watch Quiz
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white/20 hover:bg-white/10 text-white">
                  <Link href="/compare-trail-watches">
                    <Zap className="w-5 h-5 mr-2" />
                    Compare Watches Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Coming Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                What's Coming Soon
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're creating the most comprehensive Garmin resource with detailed reviews, performance tests, and expert guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Complete Model Reviews</CardTitle>
                  <CardDescription className="text-base">
                    Comprehensive reviews of every Garmin series from entry-level Venu to premium Fenix and Epix models
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Forerunner Series (165, 265, 965)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Fenix Series (7, 8) & Epix Pro
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Venu & Vivoactive Collections
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Instinct Series (2, 3) & Enduro
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-500/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">GPS & Fitness Testing</CardTitle>
                  <CardDescription className="text-base">
                    Real-world GPS accuracy tests, fitness tracking validation, and performance comparisons
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      GPS Accuracy & Battery Tests
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Heart Rate Monitoring Analysis
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Training Metrics Validation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Solar Charging Performance
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Sport-Specific Guides</CardTitle>
                  <CardDescription className="text-base">
                    Tailored recommendations for runners, cyclists, swimmers, hikers, and multisport athletes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Running & Marathon Training
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Cycling & Triathlon Features
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Hiking & Outdoor Navigation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Swimming & Water Sports
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Explore Now CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Explore Our Current Resources</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  While we prepare the complete Garmin collection, explore our current watch guides, 
                  take our interactive quiz, and compare different watch brands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/blog">
                      <Star className="w-4 h-4 mr-2" />
                      Read Our Blog
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="hover:bg-blue-50">
                    <Link href="/trail-watch-quiz">
                      <Award className="w-4 h-4 mr-2" />
                      Take the Quiz
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}