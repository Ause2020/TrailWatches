import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">TrailWatches</div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted source for G-Shock and Garmin watch reviews, guides, and comparisons in 2025. We help you
              find the perfect rugged watch for any adventure through expert analysis and detailed comparisons.
            </p>
            <div className="text-sm text-primary-foreground mb-4 p-3 bg-primary-foreground/20 rounded border border-primary-foreground/30">
              <strong className="text-primary-foreground">Affiliate Disclosure:</strong> TrailWatches.com earns
              commissions from qualifying purchases made through our affiliate links to Amazon. This
              helps support our content creation and allows us to provide free, unbiased reviews at no extra cost to you.
            </div>
            <div className="text-sm text-primary-foreground/80">© 2025 TrailWatches. All rights reserved.</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block hover:text-accent transition-colors">
                Blog
              </Link>
              <Link href="/trail-watch-quiz" className="block hover:text-accent transition-colors">
                Watch Quiz
              </Link>
              <Link href="/compare-trail-watches" className="block hover:text-accent transition-colors">
                Compare Models
              </Link>
              <Link href="/about" className="block hover:text-accent transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="block hover:text-accent transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
