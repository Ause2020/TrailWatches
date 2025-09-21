"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowRight, RotateCcw } from "lucide-react"

interface QuizAnswers {
  usage: string
  budget: string
  smartFeatures: string
  brand: string
  activity: string
  waterResistance: string
  battery: string
}

interface WatchRecommendation {
  model: string
  price: string
  description: string
  image: string
  features: string[]
}

const watchRecommendations: Record<string, WatchRecommendation> = {
  // G-Shock Recommendations
  "sports-gshock-under100-no": {
    model: "DW-5600E",
    price: "$75",
    description: "Classic square G-Shock perfect for sports and daily wear. Legendary durability at an unbeatable price.",
    image: "/casio-g-shock-dw-5600-classic-square-digital-watch.jpg",
    features: ["200m Water Resistance", "Shock Resistant", "EL Backlight", "Multi-Function Alarm"],
  },
  "sports-gshock-100-300-yes": {
    model: "GBD-H1000",
    price: "$299",
    description: "Advanced sports G-Shock with GPS, heart rate monitor, and solar charging.",
    image: "/placeholder.svg?key=gbdh1000",
    features: ["GPS", "Heart Rate Monitor", "Solar Charging", "Bluetooth"],
  },
  "daily-gshock-100-300-no": {
    model: "GA-2100-1A1",
    price: "$99",
    description: "The famous 'Casioak' with carbon core guard. Perfect balance of style and functionality.",
    image: "/casio-g-shock-ga-2100-casioak-black-watch.jpg",
    features: ["Carbon Core Guard", "200m Water Resistance", "World Time", "LED Light"],
  },
  "daily-gshock-over300-yes": {
    model: "GMCB2100-1A",
    price: "$800",
    description: "Premium metal bezel G-Shock with Bluetooth and solar power for sophisticated daily wear.",
    image: "/casio-g-shock-gmcb2100-metal-bezel-premium-watch.jpg",
    features: ["Metal Bezel", "Bluetooth", "Solar Power", "Carbon Core Guard"],
  },
  
  // Garmin Recommendations
  "sports-garmin-100-300-yes": {
    model: "Garmin Instinct 3",
    price: "$399",
    description: "Rugged GPS smartwatch with advanced fitness tracking and military-grade durability.",
    image: "/garmin-instinct-3-outdoor-hiking-watch.jpg",
    features: ["GPS", "Heart Rate Monitor", "Fitness Tracking", "Water Resistant"],
  },
  "sports-garmin-over300-yes": {
    model: "Garmin Fenix 7",
    price: "$699",
    description: "Premium multisport GPS watch with advanced training features and solar charging.",
    image: "/placeholder.svg?key=fenix7",
    features: ["GPS", "Solar Charging", "Advanced Training", "Maps"],
  },
  "daily-garmin-100-300-yes": {
    model: "Garmin Venu 3",
    price: "$449",
    description: "Smartwatch with health monitoring, GPS, and smartphone connectivity for daily use.",
    image: "/placeholder.svg?key=venu3",
    features: ["Health Monitoring", "GPS", "Smartphone Notifications", "Music Storage"],
  },
  "daily-garmin-over300-yes": {
    model: "Garmin Epix Pro",
    price: "$899",
    description: "Premium smartwatch with AMOLED display, advanced health metrics, and outdoor features.",
    image: "/placeholder.svg?key=epixpro",
    features: ["AMOLED Display", "Advanced Health", "Maps", "Solar Option"],
  },
}

export function GShockQuiz() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<QuizAnswers>({
    usage: "",
    budget: "",
    smartFeatures: "",
    brand: "",
    activity: "",
    waterResistance: "",
    battery: "",
  })
  const [recommendation, setRecommendation] = useState<WatchRecommendation | null>(null)

  const handleAnswer = (question: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [question]: value }))
  }

  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1)
    } else {
      generateRecommendation()
    }
  }

  const generateRecommendation = () => {
    // Create recommendation key based on answers
    let key = `${answers.usage}-${answers.brand}-${answers.budget}-${answers.smartFeatures}`
    
    // Find the best match
    const rec = watchRecommendations[key] || 
                watchRecommendations["daily-gshock-100-300-no"] ||
                watchRecommendations["sports-gshock-under100-no"]
    
    setRecommendation(rec)
    setCurrentStep(8)
  }

  const resetQuiz = () => {
    setCurrentStep(1)
    setAnswers({ 
      usage: "", 
      budget: "", 
      smartFeatures: "", 
      brand: "", 
      activity: "", 
      waterResistance: "", 
      battery: "" 
    })
    setRecommendation(null)
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
        return answers.brand !== ""
      case 5:
        return answers.activity !== ""
      case 6:
        return answers.waterResistance !== ""
      case 7:
        return answers.battery !== ""
      default:
        return false
    }
  }

  if (currentStep === 8 && recommendation) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">Your Perfect Adventure Watch!</CardTitle>
            <CardDescription className="text-lg">
              Based on your answers, we recommend the {recommendation.model}
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={recommendation.image || "/placeholder.svg"}
              alt={recommendation.model}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">{recommendation.model}</h2>
              <Badge variant="secondary" className="text-xl px-4 py-2">
                {recommendation.price}
              </Badge>
            </div>

            <p className="text-lg text-muted-foreground mb-6">{recommendation.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {recommendation.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground">Learn more about this watch in our detailed reviews</p>
            </div>

            <Button onClick={resetQuiz} variant="ghost" className="w-full">
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
          <span>Question {currentStep} of 7</span>
          <span>{Math.round((currentStep / 7) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 7) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {currentStep === 1 && "What will you primarily use your watch for?"}
            {currentStep === 2 && "What's your budget range?"}
            {currentStep === 3 && "Do you want smart features?"}
            {currentStep === 4 && "Which brand interests you more?"}
            {currentStep === 5 && "What's your main activity?"}
            {currentStep === 6 && "How important is water resistance?"}
            {currentStep === 7 && "What about battery life?"}
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
                  <RadioGroupItem value="adventure" id="adventure" />
                  <Label htmlFor="adventure" className="flex-1 cursor-pointer">
                    <div className="font-medium">Adventure & Outdoor</div>
                    <div className="text-sm text-muted-foreground">Hiking, climbing, extreme sports</div>
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
                    <div className="text-sm text-muted-foreground">Traditional G-Shock functionality</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 4 && (
            <RadioGroup value={answers.brand} onValueChange={(value) => handleAnswer("brand", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="gshock" id="gshock" />
                  <Label htmlFor="gshock" className="flex-1 cursor-pointer">
                    <div className="font-medium">G-Shock</div>
                    <div className="text-sm text-muted-foreground">Rugged durability and iconic design</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="garmin" id="garmin" />
                  <Label htmlFor="garmin" className="flex-1 cursor-pointer">
                    <div className="font-medium">Garmin</div>
                    <div className="text-sm text-muted-foreground">Advanced fitness tracking and GPS</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="either" id="either" />
                  <Label htmlFor="either" className="flex-1 cursor-pointer">
                    <div className="font-medium">Either Brand</div>
                    <div className="text-sm text-muted-foreground">I'm open to both options</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 5 && (
            <RadioGroup value={answers.activity} onValueChange={(value) => handleAnswer("activity", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="running" id="running" />
                  <Label htmlFor="running" className="flex-1 cursor-pointer">
                    <div className="font-medium">Running & Cardio</div>
                    <div className="text-sm text-muted-foreground">Track runs, heart rate, pace</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="swimming" id="swimming" />
                  <Label htmlFor="swimming" className="flex-1 cursor-pointer">
                    <div className="font-medium">Swimming & Water Sports</div>
                    <div className="text-sm text-muted-foreground">Pool and open water activities</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="hiking" id="hiking" />
                  <Label htmlFor="hiking" className="flex-1 cursor-pointer">
                    <div className="font-medium">Hiking & Outdoor</div>
                    <div className="text-sm text-muted-foreground">Trails, mountains, camping</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general" className="flex-1 cursor-pointer">
                    <div className="font-medium">General Fitness</div>
                    <div className="text-sm text-muted-foreground">Mixed activities and daily tracking</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 6 && (
            <RadioGroup value={answers.waterResistance} onValueChange={(value) => handleAnswer("waterResistance", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="basic" id="basic" />
                  <Label htmlFor="basic" className="flex-1 cursor-pointer">
                    <div className="font-medium">Basic (50m)</div>
                    <div className="text-sm text-muted-foreground">Hand washing, rain protection</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="swimming" id="swimming-water" />
                  <Label htmlFor="swimming-water" className="flex-1 cursor-pointer">
                    <div className="font-medium">Swimming (100-200m)</div>
                    <div className="text-sm text-muted-foreground">Pool swimming, snorkeling</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="diving" id="diving" />
                  <Label htmlFor="diving" className="flex-1 cursor-pointer">
                    <div className="font-medium">Diving (200m+)</div>
                    <div className="text-sm text-muted-foreground">Scuba diving, extreme water sports</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          {currentStep === 7 && (
            <RadioGroup value={answers.battery} onValueChange={(value) => handleAnswer("battery", value)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="long" id="long" />
                  <Label htmlFor="long" className="flex-1 cursor-pointer">
                    <div className="font-medium">Long Battery Life</div>
                    <div className="text-sm text-muted-foreground">Months or years without charging</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="solar" id="solar" />
                  <Label htmlFor="solar" className="flex-1 cursor-pointer">
                    <div className="font-medium">Solar Charging</div>
                    <div className="text-sm text-muted-foreground">Recharge with sunlight</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="rechargeable" id="rechargeable" />
                  <Label htmlFor="rechargeable" className="flex-1 cursor-pointer">
                    <div className="font-medium">Rechargeable</div>
                    <div className="text-sm text-muted-foreground">Weekly charging is fine</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          )}

          <div className="mt-8 flex justify-center">
            <Button onClick={nextStep} disabled={!canProceed()} size="lg" className="px-8">
              {currentStep === 7 ? "Get My Recommendation" : "Next Question"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
