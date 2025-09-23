import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - TrailWatches",
  description: "Learn how TrailWatches collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Information You Provide</h4>
                  <p className="text-muted-foreground">
                    When you contact us through our contact form, we collect your name, email address, 
                    and any information you choose to include in your message.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                  <p className="text-muted-foreground">
                    We use Vercel Analytics to collect basic usage statistics including page views, 
                    device information, and general location data (country/region level only).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Quiz and Comparison Data</h4>
                  <p className="text-muted-foreground">
                    Your quiz answers and comparison preferences are processed locally in your browser 
                    and are not stored on our servers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our website content and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With service providers who assist in operating our website (Vercel, Formspree)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Vercel Analytics</h4>
                  <p className="text-muted-foreground">
                    We use Vercel Analytics for website performance monitoring. 
                    This service collects anonymous usage data to help us improve our site.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Formspree</h4>
                  <p className="text-muted-foreground">
                    Our contact form is powered by Formspree. When you submit the form, 
                    your information is processed according to Formspree's privacy policy.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Amazon Affiliate Links</h4>
                  <p className="text-muted-foreground">
                    Our website includes Amazon affiliate links for watch purchases. When you click on these links 
                    and make a purchase, we may receive a small commission at no additional cost to you. 
                    This does not affect our editorial independence or the accuracy of our reviews.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Local Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our website may use browser local storage to save your quiz preferences and 
                  theme settings for a better user experience. This data remains on your device 
                  and is not transmitted to our servers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Withdraw consent for data processing</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our website is not directed to children under 13. We do not knowingly collect 
                  personal information from children under 13. If we become aware of such collection, 
                  we will delete the information immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the 
                  "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us through 
                  our <a href="/contact" className="text-accent hover:underline">contact form</a>.
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
