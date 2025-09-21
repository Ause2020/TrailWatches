"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Star, Shield } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-lg backdrop-blur-sm">
      {/* Trust Bar */}
      <div className="bg-accent/10 border-b border-accent/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90">Expert Reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-primary-foreground/90">50+ Watch Guides</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90">Updated Weekly</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold group-hover:text-accent transition-colors">TrailWatches</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium relative group">
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
            </Link>
            <div className="relative group">
              <Link href="/gshock" className="hover:text-accent transition-colors font-medium flex items-center gap-1">
                G-Shock
                <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">New</Badge>
              </Link>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="relative group">
              <Link href="/garmin" className="hover:text-accent transition-colors font-medium flex items-center gap-1">
                Garmin
                <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">Hot</Badge>
              </Link>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
            </div>
            <Link href="/blog" className="hover:text-accent transition-colors font-medium relative group">
              Blog
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/compare-gshock" className="hover:text-accent transition-colors font-medium relative group">
              Compare
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/trail-watch-quiz">Find My Watch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:text-accent hover:bg-accent/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-primary-foreground/20 bg-primary/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-foreground/70">Navigation</span>
                <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/trail-watch-quiz" onClick={() => setIsMenuOpen(false)}>Find My Watch</Link>
                </Button>
              </div>
              
              <div className="space-y-4">
                <Link href="/" className="flex items-center justify-between py-2 hover:text-accent transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  <span>Home</span>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </Link>
                <Link href="/gshock" className="flex items-center justify-between py-2 hover:text-accent transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  <span>G-Shock</span>
                  <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">New</Badge>
                </Link>
                <Link href="/garmin" className="flex items-center justify-between py-2 hover:text-accent transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  <span>Garmin</span>
                  <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">Hot</Badge>
                </Link>
                <Link href="/blog" className="flex items-center justify-between py-2 hover:text-accent transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  <span>Blog</span>
                  <div className="w-2 h-2 bg-accent/50 rounded-full"></div>
                </Link>
                <Link href="/compare-gshock" className="flex items-center justify-between py-2 hover:text-accent transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  <span>Compare</span>
                  <div className="w-2 h-2 bg-accent/50 rounded-full"></div>
                </Link>
              </div>

            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
