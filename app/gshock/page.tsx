import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Shield, Zap, Award, Star, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "G-Shock Watches - Coming Soon | TrailWatches",
  description: "Our comprehensive G-Shock collection is coming soon. Explore classic models to premium editions with expert reviews and detailed comparisons.",
  keywords: "G-Shock watches, Casio G-Shock, rugged watches, outdoor watches, adventure watches",
}

export default function GShockPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full translate-y-40 -translate-x-40 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Coming Soon Badge */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 border border-accent/30">
                  <Clock className="w-5 h-5 text-accent animate-pulse" />
                  <span className="text-accent font-semibold">Coming Soon</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                G-Shock
                <span className="block text-accent">Collection</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty mb-8 leading-relaxed max-w-3xl mx-auto">
                We're preparing the most comprehensive G-Shock guide with expert reviews, detailed comparisons, and 
                <span className="text-accent font-semibold"> everything you need to find your perfect rugged companion.</span>
              </p>
              
              {/* What to Expect */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">20+</div>
                  <div className="text-sm text-primary-foreground/80">G-Shock Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">Expert</div>
                  <div className="text-sm text-primary-foreground/80">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">Detailed</div>
                  <div className="text-sm text-primary-foreground/80">Comparisons</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">Best</div>
                  <div className="text-sm text-primary-foreground/80">Recommendations</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                  <Link href="/trail-watch-quiz">
                    <Star className="w-5 h-5 mr-2" />
                    Take Our Watch Quiz
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/20 hover:bg-primary-foreground/10">
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
                We're crafting the ultimate G-Shock resource with everything you need to make the perfect choice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">Complete Model Reviews</CardTitle>
                  <CardDescription className="text-base">
                    In-depth reviews of every G-Shock model from classics like the DW-5600 to premium MR-G series
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Classic Square Series (DW-5600, GW-M5610)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      CasiOak Collection (GA-2100, GM-2100)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Premium MT-G & MR-G Series
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Outdoor Master Series (Mudmaster, Rangeman)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Interactive Comparisons</CardTitle>
                  <CardDescription className="text-base">
                    Side-by-side comparisons with detailed specs, features, and expert recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Price Range Comparisons
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Feature-by-Feature Analysis
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Use Case Recommendations
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Pros & Cons Breakdown
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Expert Buying Guides</CardTitle>
                  <CardDescription className="text-base">
                    Comprehensive guides to help you choose the perfect G-Shock for your needs and budget
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Budget-Based Recommendations
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Activity-Specific Guides
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Size & Fit Recommendations
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Latest 2025 Models
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Explore Now CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Explore Our Current Resources</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  While we prepare the complete G-Shock collection, explore our current watch guides, 
                  take our interactive quiz, and compare different watch brands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/blog">
                      <Star className="w-4 h-4 mr-2" />
                      Read Our Blog
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="hover:bg-accent/10">
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