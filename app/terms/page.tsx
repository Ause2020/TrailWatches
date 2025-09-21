import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - TrailWatches",
  description: "Terms and conditions for using TrailWatches website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using TrailWatches ("the Service"), you accept and agree to be 
                  bound by the terms and provision of this agreement. If you do not agree to abide 
                  by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TrailWatches is a website that provides information, reviews, and comparisons 
                  about adventure watches, particularly G-Shock and Garmin models. We offer 
                  interactive tools including quizzes and comparison features to help users 
                  make informed decisions about watch purchases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Use License</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Permission is granted to temporarily access the materials on TrailWatches 
                  for personal, non-commercial transitory viewing only. This is the grant of 
                  a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p className="text-muted-foreground">
                  This license shall automatically terminate if you violate any of these 
                  restrictions and may be terminated by us at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. User Content and Conduct</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  When using our contact forms or interactive features, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and truthful information</li>
                  <li>Not use the service for any unlawful purpose</li>
                  <li>Not transmit any harmful, offensive, or inappropriate content</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The information on this website is provided on an 'as is' basis. To the fullest 
                  extent permitted by law, TrailWatches:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Does not guarantee the accuracy, completeness, or timeliness of information</li>
                  <li>Makes no warranties about the availability or functionality of the website</li>
                  <li>Is not responsible for decisions made based on our recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Affiliate Links and Commercial Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TrailWatches may include affiliate links in the future. When implemented, 
                  we will clearly disclose these relationships. We may receive compensation 
                  when you click on or make purchases through affiliate links, but this does 
                  not affect the price you pay or influence our reviews and recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Limitations of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In no event shall TrailWatches or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to 
                  business interruption) arising out of the use or inability to use the materials 
                  on TrailWatches, even if TrailWatches or a representative has been notified 
                  orally or in writing of the possibility of such damage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Accuracy of Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The materials appearing on TrailWatches could include technical, typographical, 
                  or photographic errors. TrailWatches does not warrant that any of the materials 
                  on its website are accurate, complete, or current. TrailWatches may make changes 
                  to the materials contained on its website at any time without notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TrailWatches has not reviewed all of the sites linked to our website and is 
                  not responsible for the contents of any such linked site. The inclusion of 
                  any link does not imply endorsement by TrailWatches of the site. Use of any 
                  such linked website is at the user's own risk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Modifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TrailWatches may revise these terms of service for its website at any time 
                  without notice. By using this website, you are agreeing to be bound by the 
                  then current version of these terms of service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with 
                  the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive 
                  jurisdiction of the courts in that state or location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our 
                  <a href="/privacy" className="text-accent hover:underline"> Privacy Policy</a>, 
                  which also governs your use of the Service, to understand our practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us 
                  through our <a href="/contact" className="text-accent hover:underline">contact form</a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
