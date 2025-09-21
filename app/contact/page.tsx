import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Trail Watches Expert",
  description: "Get in touch with our watch experts. Have questions about G-Shock or Garmin watches? We're here to help!",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about watches? Need expert advice? We're here to help you find the perfect timepiece for your adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action="https://formspree.io/f/manpwoqd" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="watch-interest">Watch Interest (Optional)</Label>
                    <select
                      id="watch-interest"
                      name="watch-interest"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select a category</option>
                      <option value="g-shock">G-Shock Watches</option>
                      <option value="garmin">Garmin Watches</option>
                      <option value="comparison">Watch Comparison</option>
                      <option value="recommendation">Need a Recommendation</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your question or how we can help you..."
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * Required fields. We typically respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Need Help Choosing?</h4>
                  <a href="/trail-watch-quiz" className="text-sm text-accent hover:underline">
                    Take our Watch Quiz →
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-sm">Compare Models</h4>
                  <a href="/compare-trail-watches" className="text-sm text-accent hover:underline">
                    Watch Comparator →
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-sm">Expert Reviews</h4>
                  <a href="/blog" className="text-sm text-accent hover:underline">
                    Read Our Blog →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Quick answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">What is Trail Watches Expert?</h4>
                <p className="text-sm text-muted-foreground">
                  We're a comprehensive resource for outdoor watch enthusiasts, providing expert reviews, comparisons, and buying guides for adventure watches.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Do you have affiliate partnerships?</h4>
                <p className="text-sm text-muted-foreground">
                  We plan to include affiliate links in the future to support our content creation, but all reviews remain honest and unbiased.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">How can I find the right watch for me?</h4>
                <p className="text-sm text-muted-foreground">
                  Use our interactive quiz to get personalized recommendations, or browse our comparison tool to see detailed specs side-by-side.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">How often do you update your content?</h4>
                <p className="text-sm text-muted-foreground">
                  We regularly update our reviews and add new content as new watch models are released and tested by our team.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Can I suggest a watch to review?</h4>
                <p className="text-sm text-muted-foreground">
                  Absolutely! Send us your suggestions through the contact form. We're always looking for new models to test and review.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Do you provide technical support?</h4>
                <p className="text-sm text-muted-foreground">
                  While we can offer general guidance, technical issues should be addressed directly with the watch manufacturer's support team.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
