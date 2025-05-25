import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Tanuj Sharma",
    role: "Teammate, Great British Bake Off",
    content:
      "Working with Narayan has been an incredible journey. His creativity, precision, and deep understanding of flavors were instrumental in our victory. His ability to blend traditional Nepalese elements with modern techniques is truly remarkable.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Emma Williams",
    role: "Event Planner, London",
    content:
      "Chef Narayan created the most exquisite dessert table for our corporate gala. His pastries were not only visually stunning but offered unique flavor combinations that our guests are still talking about months later.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "James Chen",
    role: "Masterclass Participant",
    content:
      "Taking a pastry masterclass with Chef Narayan was an eye-opening experience. He has a gift for teaching complex techniques in an approachable way, and his passion for pastry is truly infectious.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="border-none shadow-lg relative overflow-hidden">
          <div className="absolute top-6 right-6 text-amber-200 opacity-30">
            <Quote className="h-16 w-16" />
          </div>
          <CardContent className="p-8">
            <div className="flex mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-8 relative z-10">&ldquo;{testimonial.content}&rdquo;</p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full object-cover border-2 border-amber-200"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
