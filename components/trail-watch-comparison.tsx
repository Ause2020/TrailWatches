"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ExternalLink, Filter, X, RotateCcw, CheckSquare, Square } from "lucide-react"

interface WatchModel {
  id: string
  brand: "G-Shock" | "Garmin"
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
  hasGPS: boolean
  batteryLife: string
  description: string
  amazonLink?: string
}

const watchModels: WatchModel[] = [
  // G-Shock Models (20 models)
  {
    id: "ga-2100-1a1",
    brand: "G-Shock",
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
    brand: "G-Shock",
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
    description: "Classic best-seller with large design and chronograph.",
    amazonLink: "https://amzn.to/42FRk80",
  },
  {
    id: "dw-5600e-1v",
    brand: "G-Shock",
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
    brand: "G-Shock",
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
    description: "Full-metal premium with Bluetooth and elegant design.",
    amazonLink: "https://amzn.to/46vV6BZ",
  },
  {
    id: "ga-700vb-1a",
    brand: "G-Shock",
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
    description: "Virtual World series with bold and striking design.",
    amazonLink: "https://amzn.to/4nhpG9S",
  },
  {
    id: "ga-110-1a",
    brand: "G-Shock",
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
    description: "Similar to GA-100 but with more complex and functional dial.",
    amazonLink: "https://amzn.to/46xoZlo",
  },
  {
    id: "gw-m5610u-1",
    brand: "G-Shock",
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
    description: "Solar, multiband, classic square updated with atomic synchronization.",
    amazonLink: "https://amzn.to/3Ik13dr",
  },
  {
    id: "dw-6900-1v",
    brand: "G-Shock",
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
    description: "Classic round with LED backlight and timeless design.",
    amazonLink: "https://amzn.to/4pyzldB",
  },
  {
    id: "gm-2100-1a",
    brand: "G-Shock",
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
    description: "Metal bezel, premium variant of GA-2100 with superior finishes.",
    amazonLink: "https://amzn.to/3VqhYhp",
  },
  {
    id: "mrg-b5000d-1",
    brand: "G-Shock",
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
    description: "High-end, titanium, solar - the ultimate expression of G-Shock luxury.",
    amazonLink: "https://amzn.to/42J80eR",
  },
  {
    id: "gmw-b5000gd-9",
    brand: "G-Shock",
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
    description: "Full-metal gold, iconic with luxury gold finishes.",
    amazonLink: "https://amzn.to/4ngq7kR",
  },
  {
    id: "gw-m5610ubc-1",
    brand: "G-Shock",
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
    brand: "G-Shock",
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
    description: "Carbon fiber, lightweight with high-tech materials.",
    amazonLink: "https://amzn.to/423BK61",
  },
  {
    id: "gg-b100-1a",
    brand: "G-Shock",
    model: "GG-B100-1A",
    price: 350,
    priceDisplay: "$350",
    weight: "95g",
    features: ["Mudmaster", "Altimeter", "Barometer", "200m Water Resistance", "Shock Resistant", "Outdoor"],
    waterResistance: "200m",
    image: "/comparator-images/GG-B100-1A.png",
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
    brand: "G-Shock",
    model: "GPR-H1000-1",
    price: 500,
    priceDisplay: "$500",
    weight: "85g",
    features: ["Rangeman", "GPS", "Advanced Sensors", "200m Water Resistance", "Bluetooth", "Outdoor Navigation"],
    waterResistance: "200m",
    image: "/comparator-images/GPR-H1000-1.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "29 hours",
    description: "Rangeman with GPS and advanced sensors for outdoor navigation.",
    amazonLink: "https://amzn.to/4gB5Zax",
  },
  
  // G-Shock New Models
  {
    id: "gw6900-1",
    brand: "G-Shock",
    model: "GW6900-1",
    price: 120,
    priceDisplay: "$120",
    weight: "58g",
    features: ["Solar Power", "200m Water Resistance", "World Time", "Shock Resistant", "LED Backlight", "Classic Round"],
    waterResistance: "200m",
    image: "/comparator-images/GW6900-1.png",
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
    brand: "G-Shock",
    model: "DW9052-1BCG",
    price: 60,
    priceDisplay: "$60",
    weight: "55g",
    features: ["Military Style", "200m Water Resistance", "Shock Resistant", "LED Backlight", "Alarm", "Stopwatch"],
    waterResistance: "200m",
    image: "/comparator-images/DW9052-1BCG.png",
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
    brand: "G-Shock",
    model: "GA-2100",
    price: 99,
    priceDisplay: "$99",
    weight: "51g",
    features: ["Carbon Core Guard", "200m Water Resistance", "World Time", "LED Light", "Shock Resistant", "Analog-Digital Display"],
    waterResistance: "200m",
    image: "/comparator-images/GA-2100.png",
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
    brand: "G-Shock",
    model: "GBD200-1",
    price: 150,
    priceDisplay: "$150",
    weight: "60g",
    features: ["Fitness Tracking", "Bluetooth", "200m Water Resistance", "Step Counter", "Shock Resistant", "Activity Monitor"],
    waterResistance: "200m",
    image: "/comparator-images/GBD200-1.png",
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
    brand: "G-Shock",
    model: "GBA800UC-2A",
    price: 100,
    priceDisplay: "$100",
    weight: "65g",
    features: ["Bluetooth", "Fitness Tracking", "200m Water Resistance", "Step Counter", "Shock Resistant", "Smartphone Link"],
    waterResistance: "200m",
    image: "/comparator-images/GBA800UC-2A.png",
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
    brand: "G-Shock",
    model: "GA2100VB-1A",
    price: 99,
    priceDisplay: "$99",
    weight: "51g",
    features: ["Carbon Core Guard", "200m Water Resistance", "World Time", "LED Light", "Shock Resistant", "Analog-Digital Display"],
    waterResistance: "200m",
    image: "/comparator-images/GA2100VB-1A.png",
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
    brand: "G-Shock",
    model: "DW-9052-1VDR",
    price: 60,
    priceDisplay: "$60",
    weight: "55g",
    features: ["Military Style", "200m Water Resistance", "Shock Resistant", "LED Backlight", "Alarm", "Stopwatch"],
    waterResistance: "200m",
    image: "/comparator-images/DW-9052-1VDR.png",
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
    brand: "G-Shock",
    model: "GD100-1BCR",
    price: 80,
    priceDisplay: "$80",
    weight: "70g",
    features: ["Large Display", "200m Water Resistance", "Shock Resistant", "LED Backlight", "Chronograph", "Alarm"],
    waterResistance: "200m",
    image: "/comparator-images/GD100-1BCR.png",
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
    brand: "G-Shock",
    model: "GA-700-1BDR",
    price: 100,
    priceDisplay: "$100",
    weight: "70g",
    features: ["Bold Design", "200m Water Resistance", "Chronograph", "LED Backlight", "Shock Resistant", "Large Face"],
    waterResistance: "200m",
    image: "/comparator-images/GA-700-1BDR.png",
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
    brand: "G-Shock",
    model: "GA100C-1A3",
    price: 85,
    priceDisplay: "$85",
    weight: "75g",
    features: ["Complex Dial", "Chronograph", "200m Water Resistance", "LED Backlight", "Shock Resistant", "World Time"],
    waterResistance: "200m",
    image: "/comparator-images/GA100C-1A3.png",
    category: "under100",
    hasSolar: false,
    hasBluetooth: false,
    hasGPS: false,
    batteryLife: "2 years",
    description: "Complex dial G-Shock with multiple functions and chronograph.",
    amazonLink: "https://amzn.to/4nHXWea",
  },

  // Garmin Models (20 models)
  {
    id: "instinct-3",
    brand: "Garmin",
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
    id: "venu-x1",
    brand: "Garmin",
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
    id: "fenix-8",
    brand: "Garmin",
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
    id: "vivoactive-6",
    brand: "Garmin",
    model: "Vivoactive 6",
    price: 299,
    priceDisplay: "$299",
    weight: "36g",
    features: ["AMOLED Display", "GPS", "Health Monitoring", "11-day Battery", "Safe for Her", "Wheelchair Mode"],
    waterResistance: "50m",
    image: "/comparator-images/Vivoactive-6.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "11 days",
    description: "Stylish GPS smartwatch with health and fitness features for active lifestyles.",
    amazonLink: "https://amzn.to/4gDHQAf",
  },
  {
    id: "forerunner-265",
    brand: "Garmin",
    model: "Forerunner 265",
    price: 449,
    priceDisplay: "$449",
    weight: "47g",
    features: ["AMOLED Display", "Running Dynamics", "Training Readiness", "13-day Battery", "Music Storage", "GPS"],
    waterResistance: "50m",
    image: "/comparator-images/Forerunner-265.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "13 days",
    description: "Running-focused GPS watch with AMOLED display and comprehensive training features.",
    amazonLink: "https://amzn.to/4mx5sYD",
  },
  {
    id: "venu-3",
    brand: "Garmin",
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
    id: "forerunner-165",
    brand: "Garmin",
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
    id: "vivoactive-5",
    brand: "Garmin",
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
    id: "epix-pro-2",
    brand: "Garmin",
    model: "Epix Pro 2",
    price: 899,
    priceDisplay: "$899",
    weight: "70g",
    features: ["AMOLED Display", "Topographic Maps", "16-day Battery", "LED Flashlight", "Multi-GNSS", "Training Metrics"],
    waterResistance: "100m",
    image: "/comparator-images/Epix-Pro-2.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "16 days",
    description: "Premium multisport watch with brilliant AMOLED display and comprehensive mapping.",
    amazonLink: "https://amzn.to/3W2GFk6",
  },
  {
    id: "enduro-3",
    brand: "Garmin",
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
    brand: "Garmin",
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
    brand: "Garmin",
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
    brand: "Garmin",
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
    id: "forerunner-55",
    brand: "Garmin",
    model: "Forerunner 55",
    price: 199,
    priceDisplay: "$199",
    weight: "37g",
    features: ["GPS", "Running Coach", "14-day Battery", "Heart Rate Monitor", "Safety Features", "PacePro"],
    waterResistance: "50m",
    image: "/comparator-images/Forerunner-55.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "14 days",
    description: "Entry-level GPS running watch with essential features and long battery life.",
    amazonLink: "https://amzn.to/4nBaNyI",
  },
  {
    id: "lily-2",
    brand: "Garmin",
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
    brand: "Garmin",
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
    brand: "Garmin",
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
    brand: "Garmin",
    model: "Venu SQ2",
    price: 199,
    priceDisplay: "$199",
    weight: "38g",
    features: ["Square Design", "GPS", "Health Monitoring", "11-day Battery", "Smart Notifications", "Fitness Tracking"],
    waterResistance: "50m",
    image: "/comparator-images/Venu SQ2.PNG",
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
    brand: "Garmin",
    model: "Approach S12",
    price: 199,
    priceDisplay: "$199",
    weight: "39g",
    features: ["Golf GPS", "Course Maps", "11-day Battery", "Hazard View", "Green View", "Scorecard"],
    waterResistance: "50m",
    image: "/comparator-images/Approach S12.PNG",
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
    brand: "Garmin",
    model: "Forerunner 965",
    price: 599,
    priceDisplay: "$599",
    weight: "53g",
    features: ["AMOLED Display", "Advanced Running", "Training Readiness", "15-day Battery", "Music Storage", "Multi-GNSS"],
    waterResistance: "50m",
    image: "/comparator-images/Forerunner 965.PNG",
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
    brand: "Garmin",
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
    brand: "Garmin",
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
    brand: "Garmin",
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
  {
    id: "edge-1040-solar",
    brand: "Garmin",
    model: "Edge 1040 Solar",
    price: 749,
    priceDisplay: "$749",
    weight: "126g",
    features: ["Solar Charging", "45-hour Battery", "Cycling Computer", "Navigation", "Performance Metrics", "Safety"],
    waterResistance: "IPX7",
    image: "/comparator-images/Edge-1040-Solar.png",
    category: "over300",
    hasSolar: true,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "45 hours",
    description: "Premium cycling computer with solar charging and advanced performance analytics.",
  },
  {
    id: "vivomove-sport",
    brand: "Garmin",
    model: "Vivomove Sport",
    price: 179,
    priceDisplay: "$179",
    weight: "33g",
    features: ["Hybrid Display", "5-day Battery", "Health Monitoring", "Safe for Her", "Activity Tracking", "Smart"],
    waterResistance: "50m",
    image: "/comparator-images/Vivomove-Sport.png",
    category: "100-300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: false,
    batteryLife: "5 days",
    description: "Hybrid smartwatch with analog hands and hidden digital display.",
  },
  {
    id: "descent-mk3i",
    brand: "Garmin",
    model: "Descent Mk3i",
    price: 1299,
    priceDisplay: "$1,299",
    weight: "85g",
    features: ["Diving Computer", "Air Integration", "28-day Battery", "Multi-GNSS", "LED Flashlight", "Underwater"],
    waterResistance: "100m",
    image: "/comparator-images/Descent-Mk3i.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "28 days",
    description: "Advanced dive computer with air integration and comprehensive underwater features.",
  },
  {
    id: "marq-adventurer",
    brand: "Garmin",
    model: "MARQ Adventurer",
    price: 1899,
    priceDisplay: "$1,899",
    weight: "94g",
    features: ["Titanium", "Sapphire", "16-day Battery", "Expedition Mode", "Multi-GNSS", "Premium Materials"],
    waterResistance: "100m",
    image: "/comparator-images/MARQ-Adventurer.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "16 days",
    description: "Luxury adventure watch with premium materials and comprehensive outdoor features.",
  },
  {
    id: "tactix-7-pro",
    brand: "Garmin",
    model: "Tactix 7 Pro",
    price: 1099,
    priceDisplay: "$1,099",
    weight: "89g",
    features: ["Tactical Features", "LED Flashlight", "28-day Battery", "Night Vision", "Stealth Mode", "Multi-GNSS"],
    waterResistance: "100m",
    image: "/comparator-images/Tactix-7-Pro.png",
    category: "over300",
    hasSolar: false,
    hasBluetooth: true,
    hasGPS: true,
    batteryLife: "28 days",
    description: "Tactical GPS watch with military-grade features and night vision compatibility.",
  },
]

export function TrailWatchComparison() {
  const [selectedModels, setSelectedModels] = useState<string[]>(watchModels.map((model) => model.id))
  const [brandFilter, setBrandFilter] = useState<string[]>([])
  const [priceFilter, setPriceFilter] = useState<string[]>([])
  const [featureFilter, setFeatureFilter] = useState<string[]>([])

  const filteredModels = watchModels.filter((model) => {
    const matchesBrand = brandFilter.length === 0 || brandFilter.includes(model.brand)
    const matchesPrice = priceFilter.length === 0 || priceFilter.includes(model.category)
    const matchesFeatures =
      featureFilter.length === 0 ||
      featureFilter.every((feature) => {
        switch (feature) {
          case "solar":
            return model.hasSolar
          case "bluetooth":
            return model.hasBluetooth
          case "gps":
            return model.hasGPS
          default:
            return false
        }
      })

    return matchesBrand && matchesPrice && matchesFeatures && selectedModels.includes(model.id)
  })

  const handleModelToggle = (modelId: string) => {
    setSelectedModels((prev) => (prev.includes(modelId) ? prev.filter((id) => id !== modelId) : [...prev, modelId]))
  }

  const handleBrandFilterToggle = (brand: string) => {
    setBrandFilter((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const handlePriceFilterToggle = (category: string) => {
    setPriceFilter((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  const handleFeatureFilterToggle = (feature: string) => {
    setFeatureFilter((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
  }

  // Clear all filters function
  const clearAllFilters = () => {
    setBrandFilter([])
    setPriceFilter([])
    setFeatureFilter([])
  }

  // Reset to all models
  const resetToAllModels = () => {
    setSelectedModels(watchModels.map((model) => model.id))
    clearAllFilters()
  }

  // Select all models
  const selectAllModels = () => {
    setSelectedModels(watchModels.map((model) => model.id))
  }

  // Deselect all models
  const deselectAllModels = () => {
    setSelectedModels([])
  }

  // Check if all filters are empty
  const hasActiveFilters = brandFilter.length > 0 || priceFilter.length > 0 || featureFilter.length > 0

  // Count selected models
  const selectedCount = selectedModels.length
  const totalModels = watchModels.length

  return (
    <div className="space-y-8">
      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters & Model Selection
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                {selectedCount} of {totalModels} models selected
              </Badge>
              <Badge variant="outline" className="text-xs">
                {filteredModels.length} showing
              </Badge>
            </div>
          </div>
          
          {/* Control Buttons */}
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={resetToAllModels}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFilters}
              disabled={!hasActiveFilters}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Clear Filters
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={selectAllModels}
              className="flex items-center gap-2"
            >
              <CheckSquare className="h-4 w-4" />
              Select All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={deselectAllModels}
              className="flex items-center gap-2"
            >
              <Square className="h-4 w-4" />
              Deselect All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Model Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Select Models to Compare</h3>
                <Badge variant="secondary" className="text-xs">
                  {selectedCount}/{totalModels}
                </Badge>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto border rounded-md p-3 bg-muted/20">
                {watchModels.map((model) => (
                  <div 
                    key={model.id} 
                    className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                      selectedModels.includes(model.id) ? 'bg-accent/10 border border-accent/20' : ''
                    }`}
                  >
                    <Checkbox
                      id={model.id}
                      checked={selectedModels.includes(model.id)}
                      onCheckedChange={() => handleModelToggle(model.id)}
                    />
                    <Label htmlFor={model.id} className="text-sm flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{model.brand} {model.model}</span>
                        <Badge variant="outline" className="text-xs ml-2">
                          {model.priceDisplay}
                        </Badge>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Filter by Brand</h3>
                {brandFilter.length > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {brandFilter.length} active
                  </Badge>
                )}
              </div>
              <div className="space-y-2 border rounded-md p-3 bg-muted/20">
                <div className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                  brandFilter.includes("G-Shock") ? 'bg-accent/10 border border-accent/20' : ''
                }`}>
                  <Checkbox
                    id="gshock"
                    checked={brandFilter.includes("G-Shock")}
                    onCheckedChange={() => handleBrandFilterToggle("G-Shock")}
                  />
                  <Label htmlFor="gshock" className="text-sm flex-1 cursor-pointer font-medium">
                    G-Shock
                  </Label>
                </div>
                <div className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                  brandFilter.includes("Garmin") ? 'bg-accent/10 border border-accent/20' : ''
                }`}>
                  <Checkbox
                    id="garmin"
                    checked={brandFilter.includes("Garmin")}
                    onCheckedChange={() => handleBrandFilterToggle("Garmin")}
                  />
                  <Label htmlFor="garmin" className="text-sm flex-1 cursor-pointer font-medium">
                    Garmin
                  </Label>
                </div>
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Filter by Price</h3>
                {priceFilter.length > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {priceFilter.length} active
                  </Badge>
                )}
              </div>
              <div className="space-y-2 border rounded-md p-3 bg-muted/20">
                <div className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                  priceFilter.includes("under100") ? 'bg-accent/10 border border-accent/20' : ''
                }`}>
                  <Checkbox
                    id="under100"
                    checked={priceFilter.includes("under100")}
                    onCheckedChange={() => handlePriceFilterToggle("under100")}
                  />
                  <Label htmlFor="under100" className="text-sm flex-1 cursor-pointer font-medium">
                    Under $100
                  </Label>
                </div>
                <div className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                  priceFilter.includes("100-300") ? 'bg-accent/10 border border-accent/20' : ''
                }`}>
                  <Checkbox
                    id="100-300"
                    checked={priceFilter.includes("100-300")}
                    onCheckedChange={() => handlePriceFilterToggle("100-300")}
                  />
                  <Label htmlFor="100-300" className="text-sm flex-1 cursor-pointer font-medium">
                    $100 - $300
                  </Label>
                </div>
                <div className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                  priceFilter.includes("over300") ? 'bg-accent/10 border border-accent/20' : ''
                }`}>
                  <Checkbox
                    id="over300"
                    checked={priceFilter.includes("over300")}
                    onCheckedChange={() => handlePriceFilterToggle("over300")}
                  />
                  <Label htmlFor="over300" className="text-sm flex-1 cursor-pointer font-medium">
                    Over $300
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Filter by Features</h3>
                {featureFilter.length > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {featureFilter.length} active
                  </Badge>
                )}
              </div>
              <div className="space-y-2 border rounded-md p-3 bg-muted/20">
                <div className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                  featureFilter.includes("solar") ? 'bg-accent/10 border border-accent/20' : ''
                }`}>
                  <Checkbox
                    id="solar"
                    checked={featureFilter.includes("solar")}
                    onCheckedChange={() => handleFeatureFilterToggle("solar")}
                  />
                  <Label htmlFor="solar" className="text-sm flex-1 cursor-pointer font-medium">
                    Solar Power
                  </Label>
                </div>
                <div className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                  featureFilter.includes("bluetooth") ? 'bg-accent/10 border border-accent/20' : ''
                }`}>
                  <Checkbox
                    id="bluetooth"
                    checked={featureFilter.includes("bluetooth")}
                    onCheckedChange={() => handleFeatureFilterToggle("bluetooth")}
                  />
                  <Label htmlFor="bluetooth" className="text-sm flex-1 cursor-pointer font-medium">
                    Bluetooth
                  </Label>
                </div>
                <div className={`flex items-center space-x-2 p-2 rounded-md transition-colors hover:bg-muted/50 ${
                  featureFilter.includes("gps") ? 'bg-accent/10 border border-accent/20' : ''
                }`}>
                  <Checkbox
                    id="gps"
                    checked={featureFilter.includes("gps")}
                    onCheckedChange={() => handleFeatureFilterToggle("gps")}
                  />
                  <Label htmlFor="gps" className="text-sm flex-1 cursor-pointer font-medium">
                    GPS
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Results Header */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              Comparison Results
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              {filteredModels.length > 0 ? (
                <Badge variant="default" className="text-xs">
                  Comparing {filteredModels.length} watch{filteredModels.length !== 1 ? 'es' : ''}
                </Badge>
              ) : (
                <Badge variant="secondary" className="text-xs">
                  No matches found
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {filteredModels.map((model) => (
              <Card key={model.id} className="w-full max-w-[350px] hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
                <CardHeader className="text-center">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 overflow-hidden relative group">
                    <img
                      src={model.image || "/placeholder.svg"}
                      alt={model.model}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm font-semibold">
                        {model.priceDisplay}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Badge variant="outline" className="font-semibold">
                      {model.brand}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{model.model}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Specifications */}
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 text-center">Specifications</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span className="text-muted-foreground font-medium">Weight:</span>
                        <span className="font-semibold">{model.weight}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span className="text-muted-foreground font-medium">Water Resistance:</span>
                        <span className="font-semibold">{model.waterResistance}</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-muted-foreground font-medium">Battery Life:</span>
                        <span className="font-semibold">{model.batteryLife}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-center">Key Features</h4>
                    <div className="space-y-2">
                      {model.features.slice(0, 5).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm bg-accent/5 rounded-md p-2">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special Features Badges */}
                  <div className="flex flex-wrap justify-center gap-2 pt-2 border-t">
                    {model.hasSolar && (
                      <Badge variant="outline" className="bg-yellow-50 border-yellow-200 text-yellow-700">
                        ☀️ Solar
                      </Badge>
                    )}
                    {model.hasBluetooth && (
                      <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                        📱 Bluetooth
                      </Badge>
                    )}
                    {model.hasGPS && (
                      <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                        📍 GPS
                      </Badge>
                    )}
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
                    <p className="text-sm text-muted-foreground mb-2">Learn more about this watch in our detailed reviews</p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Full Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {filteredModels.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2">No watches match your filters</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or selecting more models to compare. 
                You can use the "Reset All" button to start fresh.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button onClick={clearAllFilters} variant="outline" disabled={!hasActiveFilters}>
                  Clear Filters
                </Button>
                <Button onClick={resetToAllModels} variant="default">
                  Reset All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
