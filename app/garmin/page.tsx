import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, MapPin, Heart, Activity, Star, ArrowRight, Zap, Award, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Garmin Watches - Complete Collection | TrailWatches",
  description: "Explore our complete Garmin collection with expert reviews, detailed comparisons, and direct Amazon purchasing links. Find your perfect fitness companion.",
  keywords: "Garmin watches, Garmin fitness, smartwatches, multisport watches, outdoor watches, GPS watches, buy Garmin",
}

// Garmin watches data - All available models
const garminWatches = [
  {
    id: "instinct-3",
    model: "Instinct 3",
    price: 349,
    priceDisplay: "$349",
    weight: "53g",
    features: ["GPS Navigation", "28-day Battery", "100m Water Rating", "Heart Rate Monitor", "Solar Charging"],
    waterResistance: "100m",
    image: "/content/blogs/best-garmin-watches-runners-athletes-2025/images/Garmin Instinct 3 .png",
    category: "100-300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "28 days",
    description: "Rugged GPS smartwatch built for outdoor adventures with incredible battery life.",
    amazonLink: "https://amzn.to/4ngEXrB",
  },
  {
    id: "fenix-8",
    model: "Fenix 8",
    price: 699,
    priceDisplay: "$699",
    weight: "79g",
    features: ["Advanced GPS", "Training Metrics", "Topographic Maps", "16-day Battery", "Pulse Ox", "Music Storage"],
    waterResistance: "100m",
    image: "/content/blogs/best-garmin-watches-runners-athletes-2025/images/Garmin Fenix 8.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "16 days",
    description: "Premium multisport GPS watch with advanced training metrics and mapping.",
    amazonLink: "https://amzn.to/3Kdne5C",
  },
  {
    id: "forerunner-265",
    model: "Forerunner 265",
    price: 449,
    priceDisplay: "$449",
    weight: "47g",
    features: ["AMOLED Display", "Running Dynamics", "Training Readiness", "13-day Battery", "Music Storage", "GPS"],
    waterResistance: "50m",
    image: "/content/blogs/best-garmin-watches-runners-athletes-2025/images/Garmin Forerunner 265.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "13 days",
    description: "Running-focused GPS watch with AMOLED display and comprehensive training features.",
    amazonLink: "https://amzn.to/4mx5sYD",
  },
  {
    id: "forerunner-165",
    model: "Forerunner 165",
    price: 249,
    priceDisplay: "$249",
    weight: "39g",
    features: ["AMOLED Display", "GPS", "Running Metrics", "11-day Battery", "Heart Rate Monitor", "Music"],
    waterResistance: "50m",
    image: "/content/blogs/best-garmin-watches-runners-athletes-2025/images/Garmin Forerunner 165.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "11 days",
    description: "Entry-level GPS running watch with AMOLED display and essential running features.",
    amazonLink: "https://amzn.to/4msAKQ2",
  },
  {
    id: "vivoactive-6",
    model: "Vivoactive 6",
    price: 299,
    priceDisplay: "$299",
    weight: "36g",
    features: ["AMOLED Display", "GPS", "Health Monitoring", "11-day Battery", "Safe for Her", "Wheelchair Mode"],
    waterResistance: "50m",
    image: "/content/blogs/best-garmin-watches-runners-athletes-2025/images/Garmin Vivoactive 6.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "11 days",
    description: "Stylish GPS smartwatch with health and fitness features for active lifestyles.",
    amazonLink: "https://amzn.to/4gDHQAf",
  },
  {
    id: "epix-pro-2",
    model: "Epix Pro 2",
    price: 899,
    priceDisplay: "$899",
    weight: "70g",
    features: ["AMOLED Display", "Topographic Maps", "16-day Battery", "LED Flashlight", "Multi-GNSS", "Training Metrics"],
    waterResistance: "100m",
    image: "/content/blogs/best-garmin-watches-runners-athletes-2025/images/Garmin Epix Pro 2.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "16 days",
    description: "Premium multisport watch with brilliant AMOLED display and comprehensive mapping.",
    amazonLink: "https://amzn.to/3W2GFk6",
  },
  {
    id: "forerunner-55",
    model: "Forerunner 55",
    price: 199,
    priceDisplay: "$199",
    weight: "37g",
    features: ["GPS", "Running Coach", "14-day Battery", "Heart Rate Monitor", "Safety Features", "PacePro"],
    waterResistance: "50m",
    image: "/content/blogs/affordable-rugged-watches-under-200-2025/images/Garmin Forerunner 55.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "14 days",
    description: "Entry-level GPS running watch with essential features and long battery life.",
    amazonLink: "https://amzn.to/4nBaNyI",
  },
  {
    id: "venu-x1",
    model: "Venu X1",
    price: 299,
    priceDisplay: "$299",
    weight: "45g",
    features: ["AMOLED Display", "GPS", "Health Monitoring", "11-day Battery", "Music Storage", "Smart Notifications"],
    waterResistance: "50m",
    image: "/comparator-images/Venu-X1.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "11 days",
    description: "Stylish GPS smartwatch with AMOLED display and comprehensive health features.",
    amazonLink: "https://amzn.to/4nnYW7O",
  },
  {
    id: "vivoactive-5",
    model: "Vivoactive 5",
    price: 299,
    priceDisplay: "$299",
    weight: "36g",
    features: ["AMOLED Display", "GPS", "Health Monitoring", "11-day Battery", "Safe for Her", "Wheelchair Mode"],
    waterResistance: "50m",
    image: "/comparator-images/Vivoactive-5.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "11 days",
    description: "Stylish GPS smartwatch with health and fitness features for active lifestyles.",
    amazonLink: "https://amzn.to/4nM2xfv",
  },
  {
    id: "venu-3",
    model: "Venu 3",
    price: 449,
    priceDisplay: "$449",
    weight: "47g",
    features: ["AMOLED Display", "Health Snapshot", "Sleep Coaching", "14-day Battery", "Voice Calling", "GPS"],
    waterResistance: "50m",
    image: "/comparator-images/Venu-3.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "14 days",
    description: "Lifestyle GPS smartwatch with bright AMOLED display and comprehensive health monitoring.",
    amazonLink: "https://amzn.to/46h2eDx",
  },
  {
    id: "enduro-3",
    model: "Enduro 3",
    price: 899,
    priceDisplay: "$899",
    weight: "63g",
    features: ["Solar Charging", "90-day Battery", "Ultra-Endurance", "LED Flashlight", "Multi-GNSS", "Training Load"],
    waterResistance: "100m",
    image: "/comparator-images/Enduro-3.png",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "90 days",
    description: "Ultimate ultra-endurance GPS watch with incredible 90-day battery life.",
    amazonLink: "https://amzn.to/4mz1r5V",
  },
  {
    id: "forerunner-955",
    model: "Forerunner 955",
    price: 499,
    priceDisplay: "$499",
    weight: "53g",
    features: ["Solar Charging", "15-day Battery", "Training Readiness", "Race Widget", "Multi-GNSS", "Music"],
    waterResistance: "50m",
    image: "/comparator-images/Forerunner-955.png",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "15 days",
    description: "Advanced GPS running watch with solar charging and comprehensive training features.",
    amazonLink: "https://amzn.to/42DdMi9",
  },
  {
    id: "venu-2-plus",
    model: "Venu 2 Plus",
    price: 399,
    priceDisplay: "$399",
    weight: "51g",
    features: ["AMOLED Display", "Voice Calling", "11-day Battery", "Health Monitoring", "Music Storage", "GPS"],
    waterResistance: "50m",
    image: "/comparator-images/Venu-2-Plus.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "11 days",
    description: "Lifestyle GPS smartwatch with voice calling and comprehensive health tracking.",
    amazonLink: "https://amzn.to/4mxYYbU",
  },
  {
    id: "instinct-2x-solar",
    model: "Instinct 2X Solar",
    price: 449,
    priceDisplay: "$449",
    weight: "67g",
    features: ["Solar Charging", "40-day Battery", "LED Flashlight", "Multi-GNSS", "Heart Rate", "Rugged Design"],
    waterResistance: "100m",
    image: "/comparator-images/Instinct-2X-Solar.png",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "40 days",
    description: "Large rugged GPS watch with solar charging and built-in LED flashlight.",
    amazonLink: "https://amzn.to/4ng9qpq",
  },
  {
    id: "lily-2",
    model: "Lily 2",
    price: 249,
    priceDisplay: "$249",
    weight: "24g",
    features: ["Small Design", "5-day Battery", "Health Monitoring", "Smart Notifications", "Safe for Her", "GPS"],
    waterResistance: "50m",
    image: "/comparator-images/Lily-2.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "5 days",
    description: "Small, stylish GPS smartwatch designed specifically for smaller wrists.",
    amazonLink: "https://amzn.to/3IawzKZ",
  },
  {
    id: "approach-s70",
    model: "Approach S70",
    price: 599,
    priceDisplay: "$599",
    weight: "61g",
    features: ["Golf GPS", "AMOLED Display", "16-day Battery", "Course Maps", "Virtual Caddie", "Wind Data"],
    waterResistance: "50m",
    image: "/comparator-images/Approach-S70.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "16 days",
    description: "Premium golf GPS watch with AMOLED display and comprehensive course data.",
    amazonLink: "https://amzn.to/4gGScPS",
  },
  {
    id: "swim-2",
    model: "Swim 2",
    price: 249,
    priceDisplay: "$249",
    weight: "36g",
    features: ["Pool Swimming", "Open Water", "Heart Rate", "6-day Battery", "Safe for Her", "GPS"],
    waterResistance: "50m",
    image: "/comparator-images/Swim-2.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "6 days",
    description: "Dedicated swimming GPS watch with pool and open water tracking.",
    amazonLink: "https://amzn.to/4gGQI8g",
  },
  {
    id: "venu-sq2",
    model: "Venu SQ2",
    price: 199,
    priceDisplay: "$199",
    weight: "38g",
    features: ["Square Design", "GPS", "Health Monitoring", "11-day Battery", "Smart Notifications", "Fitness Tracking"],
    waterResistance: "50m",
    image: "/comparator-images/Venu-SQ2.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "11 days",
    description: "Square-shaped GPS smartwatch with health monitoring and fitness tracking.",
    amazonLink: "https://amzn.to/3Kcp9aF",
  },
  {
    id: "approach-s12",
    model: "Approach S12",
    price: 199,
    priceDisplay: "$199",
    weight: "39g",
    features: ["Golf GPS", "Course Maps", "11-day Battery", "Hazard View", "Green View", "Scorecard"],
    waterResistance: "50m",
    image: "/comparator-images/Approach-S12.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "11 days",
    description: "Golf GPS watch with course maps and essential golf features.",
    amazonLink: "https://amzn.to/47WxgBU",
  },
  {
    id: "forerunner-965",
    model: "Forerunner 965",
    price: 599,
    priceDisplay: "$599",
    weight: "53g",
    features: ["AMOLED Display", "Advanced Running", "Training Readiness", "15-day Battery", "Music Storage", "Multi-GNSS"],
    waterResistance: "50m",
    image: "/comparator-images/Forerunner-965.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "15 days",
    description: "Advanced GPS running watch with AMOLED display and comprehensive training features.",
    amazonLink: "https://amzn.to/3VqP54G",
  },
  {
    id: "forerunner-745",
    model: "Forerunner 745",
    price: 499,
    priceDisplay: "$499",
    weight: "47g",
    features: ["GPS", "Running Dynamics", "Training Load", "7-day Battery", "Music Storage", "Multi-Sport"],
    waterResistance: "50m",
    image: "/comparator-images/Forerunner-745.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "7 days",
    description: "Multi-sport GPS watch with advanced running dynamics and training features.",
    amazonLink: "https://amzn.to/3VuVUlQ",
  },
  {
    id: "fenix-7x-pro-solar",
    model: "Fenix 7X Pro Solar",
    price: 899,
    priceDisplay: "$899",
    weight: "89g",
    features: ["Solar Charging", "Advanced GPS", "Topographic Maps", "28-day Battery", "LED Flashlight", "Multi-GNSS"],
    waterResistance: "100m",
    image: "/comparator-images/Fenix-7X-Pro-Solar.png",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "28 days",
    description: "Premium multisport GPS watch with solar charging and advanced mapping.",
    amazonLink: "https://amzn.to/4gGQI8g",
  },
  {
    id: "quatix-7x-solar",
    model: "Quatix 7X Solar Edition",
    price: 999,
    priceDisplay: "$999",
    weight: "95g",
    features: ["Marine GPS", "Solar Charging", "Nautical Charts", "28-day Battery", "Tide Data", "Anchor Watch"],
    waterResistance: "100m",
    image: "/comparator-images/Quatix-7X-Solar.png",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "28 days",
    description: "Marine GPS watch with solar charging and comprehensive nautical features.",
    amazonLink: "https://amzn.to/46xlonI",
  },
]

export default function GarminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full translate-y-40 -translate-x-40 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Garmin
                <span className="block text-accent">Collection</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty mb-8 leading-relaxed max-w-3xl mx-auto">
                Explore our complete Garmin collection with expert reviews, detailed comparisons, and 
                <span className="text-accent font-semibold"> direct Amazon purchasing links for every model.</span>
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{garminWatches.length}</div>
                  <div className="text-sm text-primary-foreground/80">Garmin Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">Amazon</div>
                  <div className="text-sm text-primary-foreground/80">Buy Links</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">Expert</div>
                  <div className="text-sm text-primary-foreground/80">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">Live</div>
                  <div className="text-sm text-primary-foreground/80">Comparisons</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Watches Grid */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Complete Garmin Collection
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Browse our complete collection of Garmin watches with detailed specifications and direct Amazon purchase links.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {garminWatches.map((watch) => (
              <Card key={watch.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/20 relative overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={watch.image || "/placeholder.svg"}
                      alt={watch.model}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Badge variant="outline" className="font-semibold">
                      Garmin
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{watch.model}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{watch.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Specifications */}
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 text-center">Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span className="text-muted-foreground font-medium">Weight:</span>
                        <span className="font-semibold">{watch.weight}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span className="text-muted-foreground font-medium">Water Resistance:</span>
                        <span className="font-semibold">{watch.waterResistance}</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-muted-foreground font-medium">Battery Life:</span>
                        <span className="font-semibold">{watch.batteryLife}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-center">Key Features</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {watch.features.slice(0, 4).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Special Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-center">Special Features</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {watch.hasSolar && (
                        <Badge variant="outline" className="text-accent border-accent/30">
                          <Zap className="h-3 w-3 mr-1" />
                          Solar
                        </Badge>
                      )}
                      {watch.hasBluetooth && (
                        <Badge variant="outline" className="text-accent border-accent/30">
                          <Activity className="h-3 w-3 mr-1" />
                          Bluetooth
                        </Badge>
                      )}
                      {watch.hasGPS && (
                        <Badge variant="outline" className="text-accent border-accent/30">
                          <MapPin className="h-3 w-3 mr-1" />
                          GPS
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Amazon Buy Button */}
                  {watch.amazonLink && (
                    <div className="text-center pt-4 border-t border-muted">
                      <Button
                        asChild
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        size="sm"
                      >
                        <a
                          href={watch.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Buy on Amazon
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
            </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Ready to Find Your Perfect Watch?
              </div>
              <h3 className="text-3xl font-bold mb-4">Take Our Interactive Quiz</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover the ideal G-Shock or Garmin for your lifestyle in just 2 minutes. 
                <span className="text-accent font-semibold"> Get personalized recommendations based on your needs.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/trail-watch-quiz">
                    Take the Quiz Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link href="/compare-garmin">Compare Models</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}