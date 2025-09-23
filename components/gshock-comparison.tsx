"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ExternalLink, Filter } from "lucide-react"

interface GShockModel {
  id: string
  model: string
  price: number
  priceDisplay: string
  weight: string
  features: string[]
  waterResistance: string
  image: string
  category: "under100" | "100-300" | "over300"
  hasSolar: boolean
  hasBluetooth: boolean
  description: string
  amazonLink?: string
}

const gshockModels: GShockModel[] = [
  {
    id: "ga-2100-1a1",
    model: "GA-2100-1A1",
    price: 99,
    priceDisplay: "$99",
    weight: "51g",
    features: ["Carbon Core Guard", "200m Water Resistance", "World Time", "LED Light", "Shock Resistant", "Analog-Digital Display"],
    waterResistance: "200m",
    image: "/casio-g-shock-ga-2100-casioak-black-watch.jpg",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=ga100",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    description: "Classic best-seller with large design and chronograph.",
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
    image: "/casio-g-shock-dw-5600-classic-square-digital-watch.jpg",
    category: "under100",
    hasSolar: true,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=gmb2100",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    description: "Full-metal premium with Bluetooth and elegant design.",
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
    image: "/placeholder.svg?key=ga700",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: false,
    description: "Virtual World series with bold and striking design.",
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
    image: "/placeholder.svg?key=ga110",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    description: "Similar to GA-100 but with more complex and functional dial.",
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
    image: "/placeholder.svg?key=gw5610",
    category: "100-300",
    hasSolar: true,
    hasBluetooth: false,
    description: "Solar, multiband, classic square updated with atomic synchronization.",
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
    image: "/placeholder.svg?key=dw6900",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    description: "Classic round with LED backlight and timeless design.",
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
    image: "/placeholder.svg?key=gm2100",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: false,
    description: "Metal bezel, premium variant of GA-2100 with superior finishes.",
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
    image: "/placeholder.svg?key=mrgb5000",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    description: "High-end, titanium, solar - the ultimate expression of G-Shock luxury.",
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
    image: "/placeholder.svg?key=gmwb5000gd",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    description: "Full-metal gold, iconic with luxury gold finishes.",
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
    image: "/placeholder.svg?key=gw5610ubc",
    category: "100-300",
    hasSolar: true,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=gws5600",
    category: "100-300",
    hasSolar: true,
    hasBluetooth: false,
    description: "Carbon fiber, lightweight with high-tech materials.",
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
    image: "/placeholder.svg?key=ggb100",
    category: "over300",
    hasSolar: false,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=gprh1000",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    description: "Rangeman with GPS and advanced sensors for outdoor navigation.",
    amazonLink: "https://amzn.to/4gB5Zax",
  },
  {
    id: "gw6900-1",
    model: "GW6900-1",
    price: 120,
    priceDisplay: "$120",
    weight: "58g",
    features: ["Solar Power", "200m Water Resistance", "World Time", "Shock Resistant", "LED Backlight", "Classic Round"],
    waterResistance: "200m",
    image: "/placeholder.svg?key=gw6900",
    category: "100-300",
    hasSolar: true,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=dw9052",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=ga2100basic",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=gbd200",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
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
    image: "/placeholder.svg?key=gba800",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
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
    image: "/placeholder.svg?key=ga2100vb",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=dw9052vdr",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=gd100",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=ga700bdr",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: false,
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
    image: "/placeholder.svg?key=ga100c",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    description: "Complex dial G-Shock with multiple functions and chronograph.",
    amazonLink: "https://amzn.to/4nHXWea",
  },
]

export function GShockComparison() {
  const [selectedModels, setSelectedModels] = useState<string[]>(gshockModels.slice(0, 6).map((model) => model.id))
  const [priceFilter, setPriceFilter] = useState<string[]>([])
  const [featureFilter, setFeatureFilter] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>("price-asc")

  const filteredModels = gshockModels.filter((model) => {
    const matchesPrice = priceFilter.length === 0 || priceFilter.includes(model.category)
    const matchesFeatures =
      featureFilter.length === 0 ||
      (featureFilter.includes("solar") && model.hasSolar) ||
      (featureFilter.includes("bluetooth") && model.hasBluetooth) ||
      (featureFilter.includes("solar") && featureFilter.includes("bluetooth") && model.hasSolar && model.hasBluetooth)

    return matchesPrice && matchesFeatures && selectedModels.includes(model.id)
  }).sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "weight-asc":
        return parseInt(a.weight) - parseInt(b.weight)
      default:
        return 0
    }
  })

  const handleModelToggle = (modelId: string) => {
    setSelectedModels((prev) => (prev.includes(modelId) ? prev.filter((id) => id !== modelId) : [...prev, modelId]))
  }

  const handlePriceFilterToggle = (category: string) => {
    setPriceFilter((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  const handleFeatureFilterToggle = (feature: string) => {
    setFeatureFilter((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
  }

  return (
    <div className="space-y-8">
      {/* Enhanced Filters */}
      <Card className="border-2 border-accent/20">
        <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Filter className="h-6 w-6 text-accent" />
            G-Shock Model Comparison
          </CardTitle>
          <p className="text-muted-foreground">
            Compare {filteredModels.length} G-Shock models with advanced filtering and sorting options
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Model Selection */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Select Models to Compare
                <Badge variant="secondary" className="ml-auto">{selectedModels.length} selected</Badge>
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto border rounded-lg p-3 bg-muted/30">
                {gshockModels.map((model) => (
                  <div key={model.id} className="flex items-center space-x-2 p-2 rounded hover:bg-background/50 transition-colors">
                    <Checkbox
                      id={model.id}
                      checked={selectedModels.includes(model.id)}
                      onCheckedChange={() => handleModelToggle(model.id)}
                    />
                    <Label htmlFor={model.id} className="text-sm flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{model.model}</span>
                        <span className="text-muted-foreground">{model.priceDisplay}</span>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Price Range
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 p-2 rounded border hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id="under100"
                    checked={priceFilter.includes("under100")}
                    onCheckedChange={() => handlePriceFilterToggle("under100")}
                  />
                  <Label htmlFor="under100" className="text-sm font-medium cursor-pointer">
                    Under $100 ({gshockModels.filter(m => m.category === "under100").length})
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded border hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id="100-300"
                    checked={priceFilter.includes("100-300")}
                    onCheckedChange={() => handlePriceFilterToggle("100-300")}
                  />
                  <Label htmlFor="100-300" className="text-sm font-medium cursor-pointer">
                    $100 - $300 ({gshockModels.filter(m => m.category === "100-300").length})
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded border hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id="over300"
                    checked={priceFilter.includes("over300")}
                    onCheckedChange={() => handlePriceFilterToggle("over300")}
                  />
                  <Label htmlFor="over300" className="text-sm font-medium cursor-pointer">
                    Over $300 ({gshockModels.filter(m => m.category === "over300").length})
                  </Label>
                </div>
              </div>
            </div>

            {/* Features & Sort */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Features & Sort
              </h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 rounded border hover:bg-muted/50 transition-colors">
                    <Checkbox
                      id="solar"
                      checked={featureFilter.includes("solar")}
                      onCheckedChange={() => handleFeatureFilterToggle("solar")}
                    />
                    <Label htmlFor="solar" className="text-sm font-medium cursor-pointer">
                      Solar Power
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded border hover:bg-muted/50 transition-colors">
                    <Checkbox
                      id="bluetooth"
                      checked={featureFilter.includes("bluetooth")}
                      onCheckedChange={() => handleFeatureFilterToggle("bluetooth")}
                    />
                    <Label htmlFor="bluetooth" className="text-sm font-medium cursor-pointer">
                      Bluetooth
                    </Label>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <Label htmlFor="sort" className="text-sm font-medium mb-2 block">Sort by:</Label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="weight-asc">Weight: Lightest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Comparison Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">G-Shock Comparison Results</h2>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-sm">
              {filteredModels.length} models selected
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedModels(gshockModels.slice(0, 6).map(m => m.id))}
            >
              Reset Selection
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${Math.min(filteredModels.length, 6)}, 1fr)` }}>
              {filteredModels.slice(0, 6).map((model) => (
                <Card key={model.id} className="min-w-[300px] group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/20">
                  <CardHeader className="text-center pb-4">
                    <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={model.image || "/placeholder.svg"}
                        alt={model.model}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="default" className="text-xs">
                          G-Shock
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{model.model}</CardTitle>
                      <div className="text-2xl font-bold text-accent">{model.priceDisplay}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Key Specifications */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Key Specs
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-muted/50 rounded-lg p-3 text-center">
                          <div className="font-semibold text-accent">{model.weight}</div>
                          <div className="text-muted-foreground text-xs">Weight</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 text-center">
                          <div className="font-semibold text-accent">{model.waterResistance}</div>
                          <div className="text-muted-foreground text-xs">Water Res.</div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Features
                      </h4>
                      <div className="space-y-2">
                        {model.features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Badges */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Technology
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {model.hasSolar && <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Solar</Badge>}
                        {model.hasBluetooth && <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Bluetooth</Badge>}
                      </div>
                    </div>

                    {/* Amazon Buy Button */}
                    {model.amazonLink && (
                      <div className="text-center pt-4 border-t">
                        <Button 
                          asChild 
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                          size="sm"
                        >
                          <a 
                            href={model.amazonLink} 
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

                    {/* Learn More */}
                    <div className="text-center pt-4 border-t">
                      <p className="text-sm text-muted-foreground">Learn more about this watch in our detailed reviews</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filteredModels.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground">No models match your current filters. Try adjusting your selection.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
