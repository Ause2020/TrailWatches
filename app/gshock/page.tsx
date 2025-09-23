import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Shield, Zap, Award, Star, ArrowRight, ExternalLink, Activity, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "G-Shock Watches - Complete Collection | TrailWatches",
  description: "Explore our complete G-Shock collection with expert reviews, detailed comparisons, and direct Amazon purchasing links. Find your perfect rugged companion.",
  keywords: "G-Shock watches, Casio G-Shock, rugged watches, outdoor watches, adventure watches, buy G-Shock",
}

// G-Shock watches data
const gshockWatches = [
  {
    id: "ga-2100-1a1",
    model: "GA-2100-1A1",
    price: 99,
    priceDisplay: "$99",
    weight: "51g",
    features: ["Carbon Core Guard", "200m Water Resistance", "World Time", "LED Light", "Shock Resistant", "Analog-Digital Display"],
    waterResistance: "200m",
    image: "/content/blogs/top-gshock-watches-outdoor-adventures-2025/images/GA-2100-1A1.png",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "3 years",
    description: "The iconic 'Casioak' with minimalist design and carbon core guard structure.",
    amazonLink: "https://amzn.to/4niNslV",
  },
  {
    id: "ga-100-1a1",
    model: "GA-100-1A1",
    price: 90,
    priceDisplay: "$90",
    weight: "72g",
    features: ["Large Face", "Chronograph", "Alarm", "200m Water Resistance", "Shock Resistant", "LED Backlight"],
    waterResistance: "200m",
    image: "/content/blogs/top-gshock-watches-outdoor-adventures-2025/images/GA-100-1A1.png",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Best-seller clásico con diseño grande y cronógrafo.",
    amazonLink: "https://amzn.to/42FRk80",
  },
  {
    id: "dw-5600e-1v",
    model: "DW-5600E-1V",
    price: 50,
    priceDisplay: "$50",
    weight: "53g",
    features: ["Solar Power", "200m Water Resistance", "EL Backlight", "Multi-Function Alarm", "Stopwatch", "Shock Resistant"],
    waterResistance: "200m",
    image: "/content/blogs/top-gshock-watches-outdoor-adventures-2025/images/DW-5600E-1V.png",
    category: "under100",
    hasSolar: true,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "Solar powered",
    description: "Square original, solar, icónico y asequible.",
    amazonLink: "https://amzn.to/4nH9a2y",
  },
  {
    id: "gmb2100ad-2a",
    model: "GMB2100AD-2A",
    price: 400,
    priceDisplay: "$400",
    weight: "95g",
    features: ["Full Metal", "Bluetooth", "Solar Power", "200m Water Resistance", "Smartphone Link", "Premium Design"],
    waterResistance: "200m",
    image: "/comparator-images/GMB2100AD-2A.png",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: false,
    batteryLife: "Solar powered",
    description: "Full-metal premium con Bluetooth y diseño elegante.",
    amazonLink: "https://amzn.to/46vV6BZ",
  },
  {
    id: "ga-700vb-1a",
    model: "GA-700VB-1A",
    price: 100,
    priceDisplay: "$100",
    weight: "70g",
    features: ["Virtual World Series", "Bold Design", "200m Water Resistance", "Chronograph", "LED Backlight", "Shock Resistant"],
    waterResistance: "200m",
    image: "/content/blogs/affordable-rugged-watches-under-200-2025/images/G-Shock GA-700VB-1A.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Virtual World series con diseño bold y llamativo.",
    amazonLink: "https://amzn.to/4nhpG9S",
  },
  {
    id: "ga-110-1a",
    model: "GA-110-1A",
    price: 85,
    priceDisplay: "$85",
    weight: "75g",
    features: ["Complex Dial", "Chronograph", "200m Water Resistance", "LED Backlight", "Shock Resistant", "World Time"],
    waterResistance: "200m",
    image: "/comparator-images/GA-110-1A.png",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Similar a GA-100 pero con dial más complejo y funcional.",
    amazonLink: "https://amzn.to/46xoZlo",
  },
  {
    id: "gw-m5610u-1",
    model: "GW-M5610U-1",
    price: 120,
    priceDisplay: "$120",
    weight: "54g",
    features: ["Solar Power", "Multiband 6", "200m Water Resistance", "World Time", "Shock Resistant", "Atomic Timekeeping"],
    waterResistance: "200m",
    image: "/comparator-images/GW-M5610U-1.png",
    category: "100-300",
    hasSolar: true,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "Solar powered",
    description: "Solar, multiband, clásico square actualizado con sincronización atómica.",
    amazonLink: "https://amzn.to/3Ik13dr",
  },
  {
    id: "dw-6900-1v",
    model: "DW-6900-1V",
    price: 70,
    priceDisplay: "$70",
    weight: "58g",
    features: ["Classic Round", "LED Backlight", "200m Water Resistance", "Chronograph", "Shock Resistant", "Alarm"],
    waterResistance: "200m",
    image: "/content/blogs/affordable-rugged-watches-under-200-2025/images/G-Shock DW-6900-1V.png",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Clásico redondo con LED backlight y diseño atemporal.",
    amazonLink: "https://amzn.to/4pyzldB",
  },
  {
    id: "gm-2100-1a",
    model: "GM-2100-1A",
    price: 200,
    priceDisplay: "$200",
    weight: "65g",
    features: ["Metal Bezel", "Premium Variant", "200m Water Resistance", "Carbon Core Guard", "Shock Resistant", "Elegant Design"],
    waterResistance: "200m",
    image: "/comparator-images/GM-2100-1A.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "3 years",
    description: "Metal bezel, variante premium de GA-2100 con acabados superiores.",
    amazonLink: "https://amzn.to/3VqhYhp",
  },
  {
    id: "mrg-b5000d-1",
    model: "MRG-B5000D-1",
    price: 2000,
    priceDisplay: "$2,000",
    weight: "140g",
    features: ["High End", "Titanium", "Solar Power", "200m Water Resistance", "Premium Materials", "Limited Edition"],
    waterResistance: "200m",
    image: "/comparator-images/MRG-B5000D-1.png",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: false,
    batteryLife: "Solar powered",
    description: "Alta gama, titanium, solar - la máxima expresión de lujo G-Shock.",
    amazonLink: "https://amzn.to/42J80eR",
  },
  {
    id: "gmw-b5000gd-9",
    model: "GMW-B5000GD-9",
    price: 600,
    priceDisplay: "$600",
    weight: "130g",
    features: ["Full Metal Gold", "Iconic", "200m Water Resistance", "Bluetooth", "Solar Power", "Luxury"],
    waterResistance: "200m",
    image: "/comparator-images/GMW-B5000GD-9.png",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: false,
    batteryLife: "Solar powered",
    description: "Full-metal gold, icónico con acabados dorados de lujo.",
    amazonLink: "https://amzn.to/4ngq7kR",
  },
  {
    id: "gw-m5610ubc-1",
    model: "GW-M5610UBC-1",
    price: 130,
    priceDisplay: "$130",
    weight: "56g",
    features: ["Composite Band", "Solar Power", "200m Water Resistance", "Multiband 6", "Shock Resistant", "Comfortable"],
    waterResistance: "200m",
    image: "/comparator-images/GW-M5610UBC-1.png",
    category: "100-300",
    hasSolar: true,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "Solar powered",
    description: "Composite band, solar con correa cómoda y resistente.",
    amazonLink: "https://amzn.to/3W29ixS",
  },
  {
    id: "gw-s5600u-1",
    model: "GW-S5600U-1",
    price: 300,
    priceDisplay: "$300",
    weight: "45g",
    features: ["Carbon Fiber", "Lightweight", "200m Water Resistance", "Solar Power", "Shock Resistant", "Ultra Light"],
    waterResistance: "200m",
    image: "/comparator-images/GW-S5600U-1.png",
    category: "100-300",
    hasSolar: true,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "Solar powered",
    description: "Carbon fiber, ligero con materiales de alta tecnología.",
    amazonLink: "https://amzn.to/423BK61",
  },
  {
    id: "gg-b100-1a",
    model: "GG-B100-1A",
    price: 350,
    priceDisplay: "$350",
    weight: "95g",
    features: ["Mudmaster", "Altimeter", "Barometer", "200m Water Resistance", "Shock Resistant", "Outdoor"],
    waterResistance: "200m",
    image: "/content/blogs/top-gshock-watches-outdoor-adventures-2025/images/GG-B100-1A.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Mudmaster con altímetro y barómetro para aventuras extremas.",
    amazonLink: "https://amzn.to/46VbaxJ",
  },
  {
    id: "gpr-h1000-1",
    model: "GPR-H1000-1",
    price: 500,
    priceDisplay: "$500",
    weight: "85g",
    features: ["Rangeman", "GPS", "Advanced Sensors", "200m Water Resistance", "Bluetooth", "Outdoor Navigation"],
    waterResistance: "200m",
    image: "/content/blogs/top-gshock-watches-outdoor-adventures-2025/images/GPR-H1000-1.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "29 hours",
    description: "Rangeman con GPS y sensores avanzados para navegación outdoor.",
    amazonLink: "https://amzn.to/4gB5Zax",
  },
  // New models
  {
    id: "gw6900-1",
    model: "GW6900-1",
    price: 120,
    priceDisplay: "$120",
    weight: "58g",
    features: ["Solar Power", "200m Water Resistance", "World Time", "Shock Resistant", "LED Backlight", "Classic Round"],
    waterResistance: "200m",
    image: "/comparator-images/GW6900-1.PNG",
    category: "100-300",
    hasSolar: true,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "Solar powered",
    description: "Classic round G-Shock with solar power and timeless design.",
    amazonLink: "https://amzn.to/46xE7j0",
  },
  {
    id: "dw9052-1bcg",
    model: "DW9052-1BCG",
    price: 60,
    priceDisplay: "$60",
    weight: "55g",
    features: ["Military Style", "200m Water Resistance", "Shock Resistant", "LED Backlight", "Alarm", "Stopwatch"],
    waterResistance: "200m",
    image: "/comparator-images/DW9052-1BCG.PNG",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Military-style G-Shock with rugged design and essential features.",
    amazonLink: "https://amzn.to/4gBuUe4",
  },
  {
    id: "ga-2100-basic",
    model: "GA-2100",
    price: 99,
    priceDisplay: "$99",
    weight: "51g",
    features: ["Carbon Core Guard", "200m Water Resistance", "World Time", "LED Light", "Shock Resistant", "Analog-Digital Display"],
    waterResistance: "200m",
    image: "/comparator-images/GA-2100.PNG",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "3 years",
    description: "The iconic 'Casioak' with minimalist design and carbon core guard structure.",
    amazonLink: "https://amzn.to/4mpn2xr",
  },
  {
    id: "gbd200-1",
    model: "GBD200-1",
    price: 150,
    priceDisplay: "$150",
    weight: "60g",
    features: ["Fitness Tracking", "Bluetooth", "200m Water Resistance", "Step Counter", "Shock Resistant", "Activity Monitor"],
    waterResistance: "200m",
    image: "/comparator-images/GBD200-1.PNG",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Fitness-focused G-Shock with Bluetooth connectivity and activity tracking.",
    amazonLink: "https://amzn.to/4pB2R2g",
  },
  {
    id: "gba800uc-2a",
    model: "GBA800UC-2A",
    price: 100,
    priceDisplay: "$100",
    weight: "65g",
    features: ["Bluetooth", "Fitness Tracking", "200m Water Resistance", "Step Counter", "Shock Resistant", "Smartphone Link"],
    waterResistance: "200m",
    image: "/comparator-images/GBA800UC-2A.PNG",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Bluetooth-enabled G-Shock with fitness tracking and smartphone connectivity.",
    amazonLink: "https://amzn.to/3Ket7iW",
  },
  {
    id: "ga2100vb-1a",
    model: "GA2100VB-1A",
    price: 99,
    priceDisplay: "$99",
    weight: "51g",
    features: ["Carbon Core Guard", "200m Water Resistance", "World Time", "LED Light", "Shock Resistant", "Analog-Digital Display"],
    waterResistance: "200m",
    image: "/comparator-images/GA2100VB-1A.PNG",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "3 years",
    description: "Casioak variant with unique color scheme and carbon core guard structure.",
    amazonLink: "https://amzn.to/46zcwhq",
  },
  {
    id: "dw-9052-1vdr",
    model: "DW-9052-1VDR",
    price: 60,
    priceDisplay: "$60",
    weight: "55g",
    features: ["Military Style", "200m Water Resistance", "Shock Resistant", "LED Backlight", "Alarm", "Stopwatch"],
    waterResistance: "200m",
    image: "/comparator-images/DW-9052-1VDR.PNG",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Military-style G-Shock with distinctive color scheme and rugged design.",
    amazonLink: "https://amzn.to/3VwEXHD",
  },
  {
    id: "gd100-1bcr",
    model: "GD100-1BCR",
    price: 80,
    priceDisplay: "$80",
    weight: "70g",
    features: ["Large Display", "200m Water Resistance", "Shock Resistant", "LED Backlight", "Chronograph", "Alarm"],
    waterResistance: "200m",
    image: "/comparator-images/GD100-1BCR.PNG",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Large display G-Shock with bold design and essential features.",
    amazonLink: "https://amzn.to/4gBuZ17",
  },
  {
    id: "ga-700-1bdr",
    model: "GA-700-1BDR",
    price: 100,
    priceDisplay: "$100",
    weight: "70g",
    features: ["Bold Design", "200m Water Resistance", "Chronograph", "LED Backlight", "Shock Resistant", "Large Face"],
    waterResistance: "200m",
    image: "/comparator-images/GA-700-1BDR.PNG",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Bold design G-Shock with large face and chronograph functionality.",
    amazonLink: "https://amzn.to/4gDb5D1",
  },
  {
    id: "ga100c-1a3",
    model: "GA100C-1A3",
    price: 85,
    priceDisplay: "$85",
    weight: "75g",
    features: ["Complex Dial", "Chronograph", "200m Water Resistance", "LED Backlight", "Shock Resistant", "World Time"],
    waterResistance: "200m",
    image: "/comparator-images/GA100C-1A3.PNG",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Complex dial G-Shock with multiple functions and chronograph.",
    amazonLink: "https://amzn.to/4nHXWea",
  },
]

export default function GShockPage() {
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
                G-Shock
                <span className="block text-accent">Collection</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty mb-8 leading-relaxed max-w-3xl mx-auto">
                Explore our complete G-Shock collection with expert reviews, detailed comparisons, and 
                <span className="text-accent font-semibold"> direct Amazon purchasing links for every model.</span>
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{gshockWatches.length}</div>
                  <div className="text-sm text-primary-foreground/80">G-Shock Models</div>
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
                Complete G-Shock Collection
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Browse our complete collection of G-Shock watches with detailed specifications and direct Amazon purchase links.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {gshockWatches.map((watch) => (
                <Card key={watch.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/20 relative overflow-hidden">
                  <CardHeader className="text-center pb-4">
                    <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={watch.image || "/placeholder.svg"}
                        alt={watch.model}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm font-semibold">
                          {watch.priceDisplay}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      <Badge variant="outline" className="font-semibold">
                        G-Shock
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
                      <div className="space-y-2">
                        {watch.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm bg-accent/5 rounded-md p-2">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                  </div>
                  </div>

                    {/* Special Features Badges */}
                    <div className="flex flex-wrap justify-center gap-2 pt-2 border-t">
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

                    {/* Amazon Buy Button */}
                    {watch.amazonLink && (
                      <div className="text-center pt-4 border-t">
                        <Button 
                          asChild 
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
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
      </main>

      <Footer />
    </div>
  )
}