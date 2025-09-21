"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Star, Shield, Zap, Award } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/casio-g-shock-ga-2100-watch-on-dark-background.jpg",
    title: "G-Shock: Built for Durability",
    subtitle: "Rugged watches that withstand any adventure",
    description: "Military-grade toughness meets everyday style. Waterproof, shock-resistant, and built to last.",
    cta: "Find Your G-Shock",
    ctaLink: "/gshock-quiz",
    brand: "gshock",
    features: ["Shock Resistant", "200m Water Resistant", "Solar Powered"],
    rating: 4.8,
    reviews: "2,847 reviews"
  },
  {
    id: 2,
    image: "/garmin-instinct-3-outdoor-hiking-watch.jpg",
    title: "Garmin: Precision Performance",
    subtitle: "Advanced fitness tracking for serious athletes",
    description: "GPS navigation, heart rate monitoring, and training insights for peak performance.",
    cta: "Choose Your Garmin",
    ctaLink: "/trail-watch-quiz",
    brand: "garmin",
    features: ["GPS Navigation", "Heart Rate Monitor", "Solar Charging"],
    rating: 4.9,
    reviews: "1,923 reviews"
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      {/* Carousel Images */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              style={{
                objectPosition: 'center center',
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
                  <Award className="w-3 h-3 mr-1" />
                  Expert Watch Reviews
                </Badge>
              </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 text-pretty font-medium">
                  {slides[currentSlide].subtitle}
                </p>
                
                <p className="text-lg md:text-xl mb-6 text-primary-foreground/80 leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                  {slides[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
                      <Shield className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-primary-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href={slides[currentSlide].ctaLink}>
                      {slides[currentSlide].cta} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent backdrop-blur-sm"
                  >
                    <Link href="/compare-gshock">Compare Models</Link>
                  </Button>
                </div>
              </div>

              {/* Right Content - Watch Display */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="aspect-square bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-3xl p-8 backdrop-blur-sm border border-primary-foreground/20 shadow-2xl">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-pulse">
                    <Zap className="w-6 h-6" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-primary-foreground/90 text-primary rounded-full p-3 shadow-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary-foreground/20 rounded-3xl blur-3xl -z-10 scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
