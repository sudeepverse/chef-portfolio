import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, Users, BookOpen, Sparkles } from "lucide-react"

const services = [
  {
    title: "Private Events & Catering",
    description:
      "Bespoke dessert experiences for special occasions. I create custom pastry menus featuring signature creations and personalized desserts for your event.",
    icon: ChefHat,
  },
  {
    title: "Pastry Masterclasses",
    description:
      "Learn professional pastry techniques in private or group classes. From French classics to innovative fusion desserts, tailored to your skill level.",
    icon: BookOpen,
  },
  {
    title: "Consultancy Services",
    description:
      "Expert advice for restaurants, hotels, and food businesses looking to elevate their dessert offerings with innovative recipes and presentation.",
    icon: Sparkles,
  },
  {
    title: "Media & Appearances",
    description:
      "Available for television appearances, demonstrations, and media collaborations to share my passion for pastry and Nepalese-inspired creations.",
    icon: Users,
  },
]

export function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <CardHeader className="pb-2 relative">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-amber-100">
                <service.icon className="h-6 w-6 text-amber-700" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

