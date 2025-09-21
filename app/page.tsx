import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { BlogGrid } from "@/components/blog-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroCarousel />

        {/* CTA Section - Moved from bottom */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Adventure Watch</h2>
            <p className="text-xl mb-8 text-accent-foreground/90">
              Take our interactive quiz to discover the ideal G-Shock or Garmin for your lifestyle
            </p>
            <Button asChild size="lg" className="text-lg px-8 bg-black hover:bg-black/90 text-white border-black">
              <Link href="/gshock-quiz">
                Take the Quiz Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Top Models 2025 */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Expert Reviews
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Editor's Pick Selection
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the most popular G-Shock and Garmin watches for outdoor adventures. 
                <span className="text-accent font-semibold"> Expert-tested and customer-approved.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* GA-2100 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/20 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-accent text-accent-foreground animate-pulse">Best Seller</Badge>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">Top Pick</Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/casio-g-shock-ga-2100-casioak-black-watch.jpg"
                      alt="GA-2100 Casioak"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="flex items-center justify-between text-xl">
                      <span>GA-2100</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">$79</div>
                        <div className="text-sm text-muted-foreground line-through">$99</div>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-base font-medium">Minimalist Casioak</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The iconic "Casioak" with carbon core guard structure and octagonal bezel design. 
                    <span className="text-accent font-medium"> Perfect for everyday wear and light adventures.</span>
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Shock Resistant Design</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>200m Water Resistance</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Carbon Core Guard</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Learn more about this watch in our detailed reviews</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/20 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-blue-500 text-white">Editor's Choice</Badge>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">GPS Enabled</Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/garmin-instinct-3-outdoor-hiking-watch.jpg"
                      alt="Garmin Instinct 3"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="flex items-center justify-between text-xl">
                      <span>Instinct 3</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">$399</div>
                        <div className="text-sm text-muted-foreground">MSRP $449</div>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-base font-medium">Rugged GPS Smartwatch</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Military-grade durability with advanced fitness tracking and GPS navigation.
                    <span className="text-accent font-medium"> Perfect for serious athletes and outdoor enthusiasts.</span>
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>GPS Navigation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>28+ Day Battery</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Fitness Tracking</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Learn more about this watch in our detailed reviews</p>
                  </div>
                </CardContent>
              </Card>

              {/* GMCB2100 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/20 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Premium</Badge>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">Limited Stock</Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/casio-g-shock-gmcb2100-metal-bezel-premium-watch.jpg"
                      alt="GMCB2100 Metal"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="flex items-center justify-between text-xl">
                      <span>GMCB2100</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">$800</div>
                        <div className="text-sm text-muted-foreground">Premium Price</div>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-base font-medium">Premium Metal Bezel</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Luxury G-Shock with metal bezel, Bluetooth connectivity, and solar charging.
                    <span className="text-accent font-medium"> The ultimate combination of style and durability.</span>
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Premium Metal Bezel</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Bluetooth Connectivity</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Solar Charging</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Learn more about this watch in our detailed reviews</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Blog Grid Section */}
        <BlogGrid />

        {/* Urgency & Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent-foreground/20 text-accent-foreground px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
                <span className="w-2 h-2 bg-accent-foreground rounded-full"></span>
                Expert Watch Reviews & Guides
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Don't Miss Out on Your Perfect Adventure Watch
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 text-accent-foreground/90 max-w-3xl mx-auto">
                Join thousands of adventurers who trust TrailWatches for expert watch reviews and buying guides. 
                <span className="font-semibold"> Discover the perfect watch for your adventures.</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-accent-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-accent-foreground/20">
                  <div className="text-3xl font-bold mb-2">Expert</div>
                  <div className="text-sm">Watch Reviews</div>
                </div>
                <div className="bg-accent-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-accent-foreground/20">
                  <div className="text-3xl font-bold mb-2">Latest</div>
                  <div className="text-sm">2025 Models</div>
                </div>
                <div className="bg-accent-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-accent-foreground/20">
                  <div className="text-3xl font-bold mb-2">Expert</div>
                  <div className="text-sm">Reviews</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-xl px-12 py-6 bg-accent-foreground text-accent hover:bg-accent-foreground/90 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <Link href="/trail-watch-quiz">
                    Find My Perfect Watch <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-xl px-12 py-6 border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent backdrop-blur-sm">
                  <Link href="/compare-gshock">Compare All Models</Link>
                </Button>
              </div>

              <p className="text-sm text-accent-foreground/70 mt-6">
                ⚡ Latest 2025 models • 📖 Expert reviews • 🎯 Perfect recommendations
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
