import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Shield, Star, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About TrailWatches: Your Adventure Watch Experts",
  description: "Learn about TrailWatches, your go-to for G-Shock and Garmin watches, reviews, and guides.",
  keywords: "about TrailWatches, watch experts, G-Shock reviews, Garmin reviews, adventure watches",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About TrailWatches</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Your trusted source for G-Shock and Garmin expertise since 2025
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Mission Statement */}
              <Card className="mb-12">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    TrailWatches is your trusted source for G-Shock and Garmin reviews, guides, and comparisons in 2025. We
                    help you find the perfect adventure watch for any lifestyle, whether you're an athlete, collector, or
                    someone who simply appreciates legendary durability and style.
                  </p>
                </CardContent>
              </Card>

              {/* What We Offer */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="text-center">
                  <CardHeader>
                    <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">Expert Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      In-depth analysis of every G-Shock and Garmin model with comprehensive research and honest opinions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">Buying Guides</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive guides to help you choose the perfect adventure watch for your needs and budget.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Connect with fellow watch enthusiasts and share your passion for these iconic timepieces.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">Latest News</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Stay updated with the latest G-Shock and Garmin releases, limited editions, and industry news.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Why Trust Us */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-center mb-4">Why Trust TrailWatches?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-3">Unbiased Reviews</h3>
                      <p className="text-muted-foreground mb-4">
                        We provide honest, unbiased reviews based on extensive research and industry knowledge. Our goal is
                        to help you make informed decisions by sharing relevant information and insights.
                      </p>

                      <h3 className="font-semibold mb-3">Expert Knowledge</h3>
                      <p className="text-muted-foreground">
                        Our team has years of experience with G-Shock and Garmin watches, from vintage models to the latest
                        releases. We understand the technology, history, and craftsmanship behind every timepiece.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Comprehensive Research</h3>
                      <p className="text-muted-foreground mb-4">
                        Every review is backed by thorough research, including technical specifications, user feedback,
                        and industry insights to provide you with accurate and relevant information.
                      </p>

                      <h3 className="font-semibold mb-3">Community Focused</h3>
                      <p className="text-muted-foreground">
                        We're not just reviewers - we're watch enthusiasts ourselves. We understand what matters to
                        collectors, athletes, and everyday users.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Mission */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    TrailWatches is dedicated to providing honest, unbiased reviews and comprehensive guides about adventure watches. 
                    We believe that everyone deserves to find the perfect watch for their outdoor adventures, whether you're a 
                    seasoned hiker or just starting your journey into the great outdoors.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Our team of outdoor enthusiasts and watch experts work tirelessly to bring you the most accurate and 
                    up-to-date information about G-Shock, Garmin, and other adventure watch brands.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>Have questions about adventure watches or suggestions for our site?</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
