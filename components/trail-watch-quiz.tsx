"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowRight, RotateCcw, Trophy, Medal, Award } from "lucide-react"

interface QuizAnswers {
  usage: string
  budget: string
  smartFeatures: string
  fitnessTracking: string
  batteryLife: string
  displayType: string
  durability: string
  connectivity: string
}

interface WatchRecommendation {
  model: string
  brand: "G-Shock" | "Garmin"
  price: string
  description: string
  image: string
  features: string[]
  score: number
}

const watchDatabase: WatchRecommendation[] = [
  // G-Shock Models (20 models)
  {
    model: "GA-2100-1A1",
    brand: "G-Shock",
    price: "$99",
    description: "The iconic 'Casioak' with minimalist design and carbon core guard structure.",
    image: "/comparator-images/GA-2100-1A1.png",
    features: ["Carbon Core Guard", "200m Water Resistance", "World Time", "LED Light", "Shock Resistant", "Analog-Digital Display"],
    score: 0,
  },
  {
    model: "GA-100-1A1",
    brand: "G-Shock",
    price: "$90",
    description: "Best-seller clásico con diseño grande y cronógrafo.",
    image: "/comparator-images/GA-100-1A1.png",
    features: ["Large Face", "Chronograph", "Alarm", "200m Water Resistance", "Shock Resistant", "LED Backlight"],
    score: 0,
  },
  {
    model: "DW-5600E-1V",
    brand: "G-Shock",
    price: "$50",
    description: "Square original, solar, icónico y asequible.",
    image: "/comparator-images/DW-5600E-1V.png",
    features: ["Solar Power", "200m Water Resistance", "EL Backlight", "Multi-Function Alarm", "Stopwatch", "Shock Resistant"],
    score: 0,
  },
  {
    model: "GMB2100AD-2A",
    brand: "G-Shock",
    price: "$400",
    description: "Full-metal premium con Bluetooth y diseño elegante.",
    image: "/comparator-images/GMB2100AD-2A.png",
    features: ["Full Metal", "Bluetooth", "Solar Power", "200m Water Resistance", "Smartphone Link", "Premium Design"],
    score: 0,
  },
  {
    model: "GA-700VB-1A",
    brand: "G-Shock",
    price: "$100",
    description: "Virtual World series con diseño bold y llamativo.",
    image: "/comparator-images/GA-700VB-1A.png",
    features: ["Virtual World Series", "Bold Design", "200m Water Resistance", "Chronograph", "LED Backlight", "Shock Resistant"],
    score: 0,
  },
  {
    model: "GA-110-1A",
    brand: "G-Shock",
    price: "$85",
    description: "Similar a GA-100 pero con dial más complejo y funcional.",
    image: "/comparator-images/GA-110-1A.png",
    features: ["Complex Dial", "Chronograph", "200m Water Resistance", "LED Backlight", "Shock Resistant", "World Time"],
    score: 0,
  },
  {
    model: "GW-M5610U-1",
    brand: "G-Shock",
    price: "$120",
    description: "Solar, multiband, clásico square actualizado con sincronización atómica.",
    image: "/comparator-images/GW-M5610U-1.png",
    features: ["Solar Power", "Multiband 6", "200m Water Resistance", "World Time", "Shock Resistant", "Atomic Timekeeping"],
    score: 0,
  },
  {
    model: "MTGB3000DN1A",
    brand: "G-Shock",
    price: "$1,200",
    description: "Diffuse Nebula, premium con colores galácticos y materiales de alta gama.",
    image: "/comparator-images/MTGB3000DN1A.png",
    features: ["Diffuse Nebula", "Premium Design", "Titanium", "200m Water Resistance", "Bluetooth", "Solar Power"],
    score: 0,
  },
  {
    model: "DW-6900-1V",
    brand: "G-Shock",
    price: "$70",
    description: "Clásico redondo con LED backlight y diseño atemporal.",
    image: "/comparator-images/DW-6900-1V.png",
    features: ["Classic Round", "LED Backlight", "200m Water Resistance", "Chronograph", "Shock Resistant", "Alarm"],
    score: 0,
  },
  {
    model: "GM-2100-1A",
    brand: "G-Shock",
    price: "$200",
    description: "Metal bezel, variante premium de GA-2100 con acabados superiores.",
    image: "/comparator-images/GM-2100-1A.png",
    features: ["Metal Bezel", "Premium Variant", "200m Water Resistance", "Carbon Core Guard", "Shock Resistant", "Elegant Design"],
    score: 0,
  },
  {
    model: "GBD-200RD-4",
    brand: "G-Shock",
    price: "$150",
    description: "Fitness-oriented con acelerómetro y seguimiento de actividad.",
    image: "/comparator-images/GBD-200RD-4.png",
    features: ["Fitness Oriented", "Accelerometer", "200m Water Resistance", "Bluetooth", "Step Counter", "Shock Resistant"],
    score: 0,
  },
  {
    model: "MRG-B5000D-1",
    brand: "G-Shock",
    price: "$2,000",
    description: "Alta gama, titanium, solar - la máxima expresión de lujo G-Shock.",
    image: "/comparator-images/MRG-B5000D-1.png",
    features: ["High End", "Titanium", "Solar Power", "200m Water Resistance", "Premium Materials", "Limited Edition"],
    score: 0,
  },
  {
    model: "AWG-M100SBC-1A",
    brand: "G-Shock",
    price: "$80",
    description: "Solar, compacto y ligero para uso diario.",
    image: "/comparator-images/AWG-M100SBC-1A.png",
    features: ["Solar Power", "Compact", "200m Water Resistance", "World Time", "Shock Resistant", "Lightweight"],
    score: 0,
  },
  {
    model: "MTG-B3000BD-1A",
    brand: "G-Shock",
    price: "$800",
    description: "Premium metal, solar con acabados de alta gama.",
    image: "/comparator-images/MTG-B3000BD-1A.png",
    features: ["Premium Metal", "Solar Power", "200m Water Resistance", "Bluetooth", "Titanium", "Premium Design"],
    score: 0,
  },
  {
    model: "MTG-B3000D-1A",
    brand: "G-Shock",
    price: "$750",
    description: "Variante plateada del MTG-B3000 con acabados elegantes.",
    image: "/comparator-images/MTG-B3000D-1A.png",
    features: ["Silver Variant", "Premium Metal", "Solar Power", "200m Water Resistance", "Bluetooth", "Elegant"],
    score: 0,
  },
  {
    model: "GMW-B5000GD-9",
    brand: "G-Shock",
    price: "$600",
    description: "Full-metal gold, icónico con acabados dorados de lujo.",
    image: "/comparator-images/GMW-B5000GD-9.png",
    features: ["Full Metal Gold", "Iconic", "200m Water Resistance", "Bluetooth", "Solar Power", "Luxury"],
    score: 0,
  },
  {
    model: "GW-M5610UBC-1",
    brand: "G-Shock",
    price: "$130",
    description: "Composite band, solar con correa cómoda y resistente.",
    image: "/comparator-images/GW-M5610UBC-1.png",
    features: ["Composite Band", "Solar Power", "200m Water Resistance", "Multiband 6", "Shock Resistant", "Comfortable"],
    score: 0,
  },
  {
    model: "GW-S5600U-1",
    brand: "G-Shock",
    price: "$300",
    description: "Carbon fiber, ligero con materiales de alta tecnología.",
    image: "/comparator-images/GW-S5600U-1.png",
    features: ["Carbon Fiber", "Lightweight", "200m Water Resistance", "Solar Power", "Shock Resistant", "Ultra Light"],
    score: 0,
  },
  {
    model: "GG-B100-1A",
    brand: "G-Shock",
    price: "$350",
    description: "Mudmaster con altímetro y barómetro para aventuras extremas.",
    image: "/comparator-images/GG-B100-1A.png",
    features: ["Mudmaster", "Altimeter", "Barometer", "200m Water Resistance", "Shock Resistant", "Outdoor"],
    score: 0,
  },
  {
    model: "GPR-H1000-1",
    brand: "G-Shock",
    price: "$500",
    description: "Rangeman con GPS y sensores avanzados para navegación outdoor.",
    image: "/comparator-images/GPR-H1000-1.png",
    features: ["Rangeman", "GPS", "Advanced Sensors", "200m Water Resistance", "Bluetooth", "Outdoor Navigation"],
    score: 0,
  },

  // Garmin Models (20 models)
  {
    model: "Instinct 3",
    brand: "Garmin",
    price: "$349",
    description: "Rugged GPS smartwatch built for outdoor adventures with incredible battery life.",
    image: "/comparator-images/Instinct-3.png",
    features: ["GPS Navigation", "28-day Battery", "100m Water Rating", "Heart Rate Monitor", "Solar Charging"],
    score: 0,
  },
  {
    model: "Fenix 8",
    brand: "Garmin",
    price: "$699",
    description: "Premium multisport GPS watch with advanced training metrics and mapping.",
    image: "/comparator-images/Fenix-8.png",
    features: ["Advanced GPS", "Training Metrics", "Topographic Maps", "16-day Battery", "Pulse Ox", "Music Storage"],
    score: 0,
  },
  {
    model: "Forerunner 265",
    brand: "Garmin",
    price: "$449",
    description: "Running-focused GPS watch with AMOLED display and comprehensive training features.",
    image: "/comparator-images/Forerunner-265.png",
    features: ["AMOLED Display", "Running Dynamics", "Training Readiness", "13-day Battery", "Music Storage", "GPS"],
    score: 0,
  },
  {
    model: "Venu 3",
    brand: "Garmin",
    price: "$449",
    description: "Lifestyle GPS smartwatch with bright AMOLED display and comprehensive health monitoring.",
    image: "/comparator-images/Venu-3.png",
    features: ["AMOLED Display", "Health Snapshot", "Sleep Coaching", "14-day Battery", "Voice Calling", "GPS"],
    score: 0,
  },
  {
    model: "Forerunner 165",
    brand: "Garmin",
    price: "$249",
    description: "Entry-level GPS running watch with AMOLED display and essential running features.",
    image: "/comparator-images/Forerunner-165.png",
    features: ["AMOLED Display", "GPS", "Running Metrics", "11-day Battery", "Heart Rate Monitor", "Music"],
    score: 0,
  },
  {
    model: "Vivoactive 5",
    brand: "Garmin",
    price: "$299",
    description: "Stylish GPS smartwatch with health and fitness features for active lifestyles.",
    image: "/comparator-images/Vivoactive-5.png",
    features: ["AMOLED Display", "GPS", "Health Monitoring", "11-day Battery", "Safe for Her", "Wheelchair Mode"],
    score: 0,
  },
  {
    model: "Epix Pro 2",
    brand: "Garmin",
    price: "$899",
    description: "Premium multisport watch with brilliant AMOLED display and comprehensive mapping.",
    image: "/comparator-images/Epix-Pro-2.png",
    features: ["AMOLED Display", "Topographic Maps", "16-day Battery", "LED Flashlight", "Multi-GNSS", "Training Metrics"],
    score: 0,
  },
  {
    model: "Enduro 3",
    brand: "Garmin",
    price: "$899",
    description: "Ultimate ultra-endurance GPS watch with incredible 90-day battery life.",
    image: "/comparator-images/Enduro-3.png",
    features: ["Solar Charging", "90-day Battery", "Ultra-Endurance", "LED Flashlight", "Multi-GNSS", "Training Load"],
    score: 0,
  },
  {
    model: "Forerunner 955",
    brand: "Garmin",
    price: "$499",
    description: "Advanced GPS running watch with solar charging and comprehensive training features.",
    image: "/comparator-images/Forerunner-955.png",
    features: ["Solar Charging", "15-day Battery", "Training Readiness", "Race Widget", "Multi-GNSS", "Music"],
    score: 0,
  },
  {
    model: "Venu 2 Plus",
    brand: "Garmin",
    price: "$399",
    description: "Lifestyle GPS smartwatch with voice calling and comprehensive health tracking.",
    image: "/comparator-images/Venu-2-Plus.png",
    features: ["AMOLED Display", "Voice Calling", "11-day Battery", "Health Monitoring", "Music Storage", "GPS"],
    score: 0,
  },
  {
    model: "Instinct 2X Solar",
    brand: "Garmin",
    price: "$449",
    description: "Large rugged GPS watch with solar charging and built-in LED flashlight.",
    image: "/comparator-images/Instinct-2X-Solar.png",
    features: ["Solar Charging", "40-day Battery", "LED Flashlight", "Multi-GNSS", "Heart Rate", "Rugged Design"],
    score: 0,
  },
  {
    model: "Forerunner 55",
    brand: "Garmin",
    price: "$199",
    description: "Entry-level GPS running watch with coaching features and long battery life.",
    image: "/comparator-images/Forerunner-55.png",
    features: ["GPS", "Running Coach", "14-day Battery", "Heart Rate Monitor", "Safety Features", "PacePro"],
    score: 0,
  },
  {
    model: "Lily 2",
    brand: "Garmin",
    price: "$249",
    description: "Small, stylish GPS smartwatch designed specifically for smaller wrists.",
    image: "/comparator-images/Lily-2.png",
    features: ["Small Design", "5-day Battery", "Health Monitoring", "Smart Notifications", "Style Focus", "GPS"],
    score: 0,
  },
  {
    model: "Approach S70",
    brand: "Garmin",
    price: "$599",
    description: "Premium golf GPS watch with color mapping and comprehensive course data.",
    image: "/comparator-images/Approach-S70.png",
    features: ["Golf Focus", "Color Maps", "14-day Battery", "Course Data", "Hazard Info", "Score Tracking"],
    score: 0,
  },
  {
    model: "Swim 2",
    brand: "Garmin",
    price: "$249",
    description: "Dedicated swimming GPS watch with pool and open water tracking.",
    image: "/comparator-images/Swim-2.png",
    features: ["Swimming Focus", "Pool/Open Water", "6-day Battery", "Stroke Analysis", "Heart Rate", "GPS"],
    score: 0,
  },
  {
    model: "Edge 1040 Solar",
    brand: "Garmin",
    price: "$749",
    description: "Premium cycling computer with solar charging and advanced performance analytics.",
    image: "/comparator-images/Edge-1040-Solar.png",
    features: ["Solar Charging", "45-hour Battery", "Cycling Computer", "Navigation", "Performance Metrics", "Safety"],
    score: 0,
  },
  {
    model: "Vivomove Sport",
    brand: "Garmin",
    price: "$179",
    description: "Hybrid smartwatch with analog hands and hidden digital display.",
    image: "/comparator-images/Vivomove-Sport.png",
    features: ["Hybrid Display", "5-day Battery", "Health Monitoring", "Safe for Her", "Activity Tracking", "Smart"],
    score: 0,
  },
  {
    model: "Descent Mk3i",
    brand: "Garmin",
    price: "$1,299",
    description: "Advanced dive computer with air integration and comprehensive underwater features.",
    image: "/comparator-images/Descent-Mk3i.png",
    features: ["Diving Computer", "Air Integration", "28-day Battery", "Multi-GNSS", "LED Flashlight", "Underwater"],
    score: 0,
  },
  {
    model: "MARQ Adventurer",
    brand: "Garmin",
    price: "$1,899",
    description: "Luxury adventure watch with premium materials and comprehensive outdoor features.",
    image: "/comparator-images/MARQ-Adventurer.png",
    features: ["Titanium", "Sapphire", "16-day Battery", "Expedition Mode", "Multi-GNSS", "Premium Materials"],
    score: 0,
  },
  {
    model: "Tactix 7 Pro",
    brand: "Garmin",
    price: "$1,099",
    description: "Tactical GPS watch with military-grade features and night vision compatibility.",
    image: "/comparator-images/Tactix-7-Pro.png",
    features: ["Tactical Features", "LED Flashlight", "28-day Battery", "Night Vision", "Stealth Mode", "Multi-GNSS"],
    score: 0,
  },
]

export function TrailWatchQuiz() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<QuizAnswers>({
    usage: "",
    budget: "",
    smartFeatures: "",
    fitnessTracking: "",
    batteryLife: "",
    displayType: "",
    durability: "",
    connectivity: "",
  })
  const [recommendations, setRecommendations] = useState<WatchRecommendation[]>([])

  const handleAnswer = (question: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [question]: value }))
  }

  const nextStep = () => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1)
    } else {
      generateRecommendations()
    }
  }

  const generateRecommendations = () => {
    const scoredWatches = watchDatabase.map((watch) => {
      let score = 0

      // Usage scoring (enhanced)
      if (answers.usage === "sports") {
        if (watch.brand === "Garmin") score += 4
        if (watch.features.some((f) => f.includes("GPS"))) score += 3
        if (watch.features.some((f) => f.includes("Heart Rate"))) score += 2
        if (watch.model.includes("Forerunner") || watch.model.includes("Fenix")) score += 3
        if (watch.model.includes("Rangeman") || watch.model.includes("GBD")) score += 2
      }
      if (answers.usage === "daily") {
        if (watch.brand === "G-Shock" && Number.parseInt(watch.price.replace(/[$,]/g, "")) < 200) score += 3
        if (watch.model.includes("Venu") || watch.model.includes("Vivoactive")) score += 3
        if (watch.model.includes("GA-2100") || watch.model.includes("DW-")) score += 2
        if (watch.features.some((f) => f.includes("Elegant") || f.includes("Premium Design"))) score += 2
      }
      if (answers.usage === "collecting") {
        if (watch.brand === "G-Shock") score += 4
        if (watch.features.some((f) => f.includes("Limited Edition") || f.includes("Premium") || f.includes("Luxury"))) score += 3
        if (watch.model.includes("MTG") || watch.model.includes("MRG") || watch.model.includes("GMW")) score += 2
        if (Number.parseInt(watch.price.replace(/[$,]/g, "")) > 500) score += 2
      }

      // Budget scoring (precise)
      const price = Number.parseInt(watch.price.replace(/[$,]/g, ""))
      if (answers.budget === "under100" && price <= 100) score += 4
      if (answers.budget === "100-300" && price >= 100 && price <= 300) score += 4
      if (answers.budget === "over300" && price > 300) score += 4
      // Penalty for wrong budget range
      if (answers.budget === "under100" && price > 150) score -= 2
      if (answers.budget === "100-300" && (price < 80 || price > 400)) score -= 1
      if (answers.budget === "over300" && price < 250) score -= 2

      // Smart features scoring (enhanced)
      if (answers.smartFeatures === "yes") {
        if (watch.brand === "Garmin") score += 3
        if (watch.features.some((f) => f.includes("Bluetooth") || f.includes("Smartphone"))) score += 2
        if (watch.features.some((f) => f.includes("AMOLED") || f.includes("Voice Calling"))) score += 2
        if (watch.model.includes("Venu") || watch.model.includes("Epix")) score += 2
      }
      if (answers.smartFeatures === "no") {
        if (watch.brand === "G-Shock" && !watch.features.some((f) => f.includes("Bluetooth"))) score += 3
        if (watch.model.includes("DW-") || watch.model.includes("GA-100")) score += 2
      }

      // Fitness tracking scoring (detailed)
      if (answers.fitnessTracking === "advanced") {
        if (watch.brand === "Garmin") score += 4
        if (watch.features.some((f) => f.includes("Training") || f.includes("Running"))) score += 3
        if (watch.model.includes("Forerunner") || watch.model.includes("Fenix") || watch.model.includes("Epix")) score += 3
        if (watch.features.some((f) => f.includes("Pulse Ox") || f.includes("Training Readiness"))) score += 2
      }
      if (answers.fitnessTracking === "basic") {
        if (watch.features.some((f) => f.includes("Heart Rate") || f.includes("Step Counter"))) score += 3
        if (watch.model.includes("Vivoactive") || watch.model.includes("Venu") || watch.model.includes("GBD")) score += 2
        if (watch.model.includes("Instinct") || watch.model.includes("Forerunner 55")) score += 2
      }
      if (answers.fitnessTracking === "none") {
        if (watch.brand === "G-Shock" && !watch.features.some((f) => f.includes("Heart Rate"))) score += 2
        if (watch.model.includes("DW-") || watch.model.includes("GA-") && !watch.model.includes("GBD")) score += 2
      }

      // Battery life scoring (specific)
      if (answers.batteryLife === "weeks") {
        if (watch.features.some((f) => f.includes("Solar"))) score += 3
        if (watch.model.includes("Enduro") || watch.model.includes("Instinct")) score += 3
        if (watch.features.some((f) => f.includes("28-day") || f.includes("40-day") || f.includes("90-day"))) score += 4
      }
      if (answers.batteryLife === "days") {
        if (watch.features.some((f) => f.includes("13-day") || f.includes("16-day") || f.includes("15-day"))) score += 3
        if (watch.features.some((f) => f.includes("Solar"))) score += 2
        if (watch.brand === "Garmin" && !watch.model.includes("Lily")) score += 2
      }
      if (answers.batteryLife === "daily") {
        if (watch.features.some((f) => f.includes("5-day") || f.includes("6-day"))) score += 2
        if (watch.model.includes("Venu") || watch.model.includes("Lily") || watch.model.includes("Swim")) score += 2
      }

      // Display type scoring (enhanced)
      if (answers.displayType === "color") {
        if (watch.features.some((f) => f.includes("AMOLED"))) score += 4
        if (watch.brand === "Garmin" && !watch.model.includes("Instinct")) score += 3
        if (watch.model.includes("Venu") || watch.model.includes("Epix") || watch.model.includes("Forerunner 265")) score += 3
      }
      if (answers.displayType === "digital") {
        if (watch.brand === "G-Shock") score += 3
        if (watch.model.includes("DW-") || watch.model.includes("GW-")) score += 3
        if (watch.model.includes("Instinct") || watch.model.includes("Forerunner 55")) score += 2
      }
      if (answers.displayType === "analog") {
        if (watch.model.includes("GA-") || watch.model.includes("GM-")) score += 4
        if (watch.features.some((f) => f.includes("Analog-Digital"))) score += 3
        if (watch.model.includes("Vivomove")) score += 4
      }

      // Durability scoring (comprehensive)
      if (answers.durability === "extreme") {
        if (watch.brand === "G-Shock") score += 4
        if (watch.features.some((f) => f.includes("Shock Resistant") || f.includes("200m Water"))) score += 3
        if (watch.model.includes("Mudmaster") || watch.model.includes("Rangeman") || watch.model.includes("MRG")) score += 3
        if (watch.model.includes("Tactix") || watch.model.includes("Instinct")) score += 2
      }
      if (answers.durability === "high") {
        if (watch.brand === "G-Shock" || watch.model.includes("Instinct") || watch.model.includes("Fenix")) score += 3
        if (watch.features.some((f) => f.includes("100m Water") || f.includes("200m Water"))) score += 2
        if (watch.features.some((f) => f.includes("Rugged"))) score += 2
      }
      if (answers.durability === "standard") {
        if (watch.model.includes("Venu") || watch.model.includes("Vivoactive") || watch.model.includes("Lily")) score += 2
        if (watch.features.some((f) => f.includes("50m"))) score += 1
      }

      // Connectivity scoring (detailed)
      if (answers.connectivity === "smartphone") {
        if (watch.brand === "Garmin") score += 3
        if (watch.features.some((f) => f.includes("Voice Calling") || f.includes("Smart Notifications"))) score += 3
        if (watch.features.some((f) => f.includes("Music Storage") || f.includes("Smartphone Link"))) score += 2
      }
      if (answers.connectivity === "basic") {
        if (watch.features.some((f) => f.includes("Bluetooth"))) score += 2
        if (watch.model.includes("GBD") || watch.model.includes("GMB") || watch.model.includes("MTG")) score += 2
      }
      if (answers.connectivity === "none") {
        if (watch.brand === "G-Shock" && !watch.features.some((f) => f.includes("Bluetooth"))) score += 2
        if (watch.model.includes("DW-") || watch.model.includes("GA-100") || watch.model.includes("GA-110")) score += 2
      }

      return { ...watch, score }
    })

    // Get top 3 recommendations with better diversity
    const sortedWatches = scoredWatches.sort((a, b) => b.score - a.score)
    const topRecommendations: WatchRecommendation[] = []
    
    // Ensure we have variety in brands and price ranges
    let gShockCount = 0
    let garminCount = 0
    
    for (const watch of sortedWatches) {
      if (topRecommendations.length >= 3) break
      
      const isGShock = watch.brand === "G-Shock"
      const isGarmin = watch.brand === "Garmin"
      
      // Limit to max 2 of same brand in top 3 for diversity
      if ((isGShock && gShockCount < 2) || (isGarmin && garminCount < 2)) {
        topRecommendations.push(watch)
        if (isGShock) gShockCount++
        if (isGarmin) garminCount++
      }
    }
    
    // Fill remaining spots if needed
    if (topRecommendations.length < 3) {
      for (const watch of sortedWatches) {
        if (topRecommendations.length >= 3) break
        if (!topRecommendations.find(rec => rec.model === watch.model)) {
          topRecommendations.push(watch)
        }
      }
    }

    setRecommendations(topRecommendations)
    setCurrentStep(9)
  }

  const resetQuiz = () => {
    setCurrentStep(1)
    setAnswers({
      usage: "",
      budget: "",
      smartFeatures: "",
      fitnessTracking: "",
      batteryLife: "",
      displayType: "",
      durability: "",
      connectivity: "",
    })
    setRecommendations([])
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return answers.usage !== ""
      case 2:
        return answers.budget !== ""
      case 3:
        return answers.smartFeatures !== ""
      case 4:
        return answers.fitnessTracking !== ""
      case 5:
        return answers.batteryLife !== ""
      case 6:
        return answers.displayType !== ""
      case 7:
        return answers.durability !== ""
      case 8:
        return answers.connectivity !== ""
      default:
        return false
    }
  }

  if (currentStep === 9 && recommendations.length > 0) {
    return (
      <div className="max-w-6xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">Your TOP 3 Trail Watch Recommendations!</CardTitle>
            <CardDescription className="text-lg">
              Based on your answers, here are the best watches for your needs
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {recommendations.map((watch, index) => {
            const rankIcons = [Trophy, Medal, Award]
            const RankIcon = rankIcons[index]
            const rankColors = ["text-yellow-500", "text-gray-400", "text-amber-600"]
            const rankLabels = ["Best Match", "Great Option", "Good Choice"]

            return (
              <Card key={watch.model} className={`relative ${index === 0 ? "ring-2 ring-accent" : ""}`}>
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <RankIcon className={`h-6 w-6 ${rankColors[index]} mr-2`} />
                    <Badge variant={index === 0 ? "default" : "secondary"}>
                      #{index + 1} {rankLabels[index]}
                    </Badge>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={watch.image || "/placeholder.svg"}
                      alt={watch.model}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{watch.model}</CardTitle>
                    <Badge variant="outline">{watch.brand}</Badge>
                  </div>
                  <Badge variant="secondary" className="text-lg px-3 py-1 mb-2">
                    {watch.price}
                  </Badge>
                  <CardDescription>{watch.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {watch.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Learn more about this watch in our detailed reviews</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button onClick={resetQuiz} variant="ghost" size="lg">
              <RotateCcw className="mr-2 h-4 w-4" />
              Take Quiz Again
            </Button>
          </div>
        </div>

      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {currentStep} of 8</span>
          <span>{Math.round((currentStep / 8) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 8) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {currentStep === 1 && "What will you primarily use your watch for?"}
            {currentStep === 2 && "What's your budget range?"}
            {currentStep === 3 && "Do you want smart features?"}
            {currentStep === 4 && "How important is fitness tracking?"}
            {currentStep === 5 && "What battery life do you prefer?"}
            {currentStep === 6 && "What display type do you prefer?"}
            {currentStep === 7 && "How durable does your watch need to be?"}
            {currentStep === 8 && "What connectivity features do you need?"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && (
            <RadioGroup value={answers.usage} onValueChange={(value) => handleAnswer("usage", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="sports" id="sports" />
                  <Label htmlFor="sports" className="flex-1 cursor-pointer">
                    <div className="font-medium">Sports & Fitness</div>
                    <div className="text-sm text-muted-foreground">Running, swimming, outdoor activities</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily" className="flex-1 cursor-pointer">
                    <div className="font-medium">Daily Wear</div>
                    <div className="text-sm text-muted-foreground">Work, casual, everyday use</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="collecting" id="collecting" />
                  <Label htmlFor="collecting" className="flex-1 cursor-pointer">
                    <div className="font-medium">Collecting</div>
                    <div className="text-sm text-muted-foreground">Building a watch collection</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 2 && (
            <RadioGroup value={answers.budget} onValueChange={(value) => handleAnswer("budget", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="under100" id="under100" />
                  <Label htmlFor="under100" className="flex-1 cursor-pointer">
                    <div className="font-medium">Under $100</div>
                    <div className="text-sm text-muted-foreground">Budget-friendly options</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="100-300" id="100-300" />
                  <Label htmlFor="100-300" className="flex-1 cursor-pointer">
                    <div className="font-medium">$100 - $300</div>
                    <div className="text-sm text-muted-foreground">Mid-range with more features</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="over300" id="over300" />
                  <Label htmlFor="over300" className="flex-1 cursor-pointer">
                    <div className="font-medium">Over $300</div>
                    <div className="text-sm text-muted-foreground">Premium models with luxury materials</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 3 && (
            <RadioGroup value={answers.smartFeatures} onValueChange={(value) => handleAnswer("smartFeatures", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="flex-1 cursor-pointer">
                    <div className="font-medium">Yes, I want smart features</div>
                    <div className="text-sm text-muted-foreground">
                      Bluetooth, solar charging, smartphone connectivity
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="flex-1 cursor-pointer">
                    <div className="font-medium">No, I prefer classic features</div>
                    <div className="text-sm text-muted-foreground">Traditional watch functionality</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 4 && (
            <RadioGroup
              value={answers.fitnessTracking}
              onValueChange={(value) => handleAnswer("fitnessTracking", value)}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="flex-1 cursor-pointer">
                    <div className="font-medium">Advanced fitness tracking</div>
                    <div className="text-sm text-muted-foreground">GPS, heart rate, training metrics, VO2 max</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="basic" id="basic" />
                  <Label htmlFor="basic" className="flex-1 cursor-pointer">
                    <div className="font-medium">Basic fitness tracking</div>
                    <div className="text-sm text-muted-foreground">Steps, heart rate, basic activity tracking</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none" className="flex-1 cursor-pointer">
                    <div className="font-medium">No fitness tracking needed</div>
                    <div className="text-sm text-muted-foreground">Just want a reliable timepiece</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 5 && (
            <RadioGroup value={answers.batteryLife} onValueChange={(value) => handleAnswer("batteryLife", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="weeks" id="weeks" />
                  <Label htmlFor="weeks" className="flex-1 cursor-pointer">
                    <div className="font-medium">Weeks of battery life</div>
                    <div className="text-sm text-muted-foreground">2-4 weeks between charges</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="days" id="days" />
                  <Label htmlFor="days" className="flex-1 cursor-pointer">
                    <div className="font-medium">Several days</div>
                    <div className="text-sm text-muted-foreground">5-10 days between charges</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily" className="flex-1 cursor-pointer">
                    <div className="font-medium">Daily charging is fine</div>
                    <div className="text-sm text-muted-foreground">1-2 days between charges</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 6 && (
            <RadioGroup value={answers.displayType} onValueChange={(value) => handleAnswer("displayType", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="color" id="color" />
                  <Label htmlFor="color" className="flex-1 cursor-pointer">
                    <div className="font-medium">Color touchscreen</div>
                    <div className="text-sm text-muted-foreground">AMOLED or color LCD display</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="digital" id="digital" />
                  <Label htmlFor="digital" className="flex-1 cursor-pointer">
                    <div className="font-medium">Digital display</div>
                    <div className="text-sm text-muted-foreground">LCD with backlight</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="analog" id="analog" />
                  <Label htmlFor="analog" className="flex-1 cursor-pointer">
                    <div className="font-medium">Analog with digital</div>
                    <div className="text-sm text-muted-foreground">Traditional hands with digital features</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 7 && (
            <RadioGroup value={answers.durability} onValueChange={(value) => handleAnswer("durability", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="extreme" id="extreme" />
                  <Label htmlFor="extreme" className="flex-1 cursor-pointer">
                    <div className="font-medium">Extreme durability</div>
                    <div className="text-sm text-muted-foreground">
                      Construction sites, military use, extreme sports
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high" className="flex-1 cursor-pointer">
                    <div className="font-medium">High durability</div>
                    <div className="text-sm text-muted-foreground">Outdoor activities, sports, active lifestyle</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="flex-1 cursor-pointer">
                    <div className="font-medium">Standard durability</div>
                    <div className="text-sm text-muted-foreground">Daily wear, office use, light activities</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 8 && (
            <RadioGroup value={answers.connectivity} onValueChange={(value) => handleAnswer("connectivity", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="smartphone" id="smartphone" />
                  <Label htmlFor="smartphone" className="flex-1 cursor-pointer">
                    <div className="font-medium">Full smartphone integration</div>
                    <div className="text-sm text-muted-foreground">Calls, texts, apps, notifications</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="basic" id="basic" />
                  <Label htmlFor="basic" className="flex-1 cursor-pointer">
                    <div className="font-medium">Basic connectivity</div>
                    <div className="text-sm text-muted-foreground">Bluetooth for data sync and notifications</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none" className="flex-1 cursor-pointer">
                    <div className="font-medium">No connectivity needed</div>
                    <div className="text-sm text-muted-foreground">Standalone watch functionality</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          <div className="mt-8 flex justify-center">
            <Button onClick={nextStep} disabled={!canProceed()} size="lg" className="px-8">
              {currentStep === 8 ? "Get My TOP 3 Recommendations" : "Next Question"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
