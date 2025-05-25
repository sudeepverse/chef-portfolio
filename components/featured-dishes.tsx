import { Card, CardContent } from "@/components/ui/card"
import { Eye } from "lucide-react"

const dishes = [
  {
    id: 1,
    name: "Herb-Crusted Rack of Lamb",
    description:
      "Tender lamb rack with a fragrant herb crust, served with roasted vegetables and a red wine reduction.",
    image: "/images/dishes/lamb-rack.png",
  },
  {
    id: 2,
    name: "Seared Scallops with Citrus Risotto",
    description: "Pan-seared scallops on a bed of creamy lemon risotto, garnished with microgreens and citrus zest.",
    image: "/images/dishes/scallops.png",
  },
  {
    id: 3,
    name: "Truffle Mushroom Ravioli",
    description: "Handmade pasta filled with wild mushrooms and truffle, served with a light parmesan cream sauce.",
    image: "/images/dishes/ravioli.png",
  },
  {
    id: 4,
    name: "Chocolate Soufflé",
    description:
      "Light and airy chocolate soufflé with a molten center, dusted with powdered sugar and served with vanilla bean ice cream.",
    image: "/images/dishes/souffle.png",
  },
  {
    id: 5,
    name: "Lobster Thermidor",
    description:
      "Classic lobster dish with a rich and creamy sauce, gratinated to perfection and served with asparagus spears.",
    image: "/images/dishes/lobster.png",
  },
  {
    id: 6,
    name: "Beef Wellington",
    description:
      "Prime beef fillet wrapped in mushroom duxelles and flaky puff pastry, baked to a golden finish and served with truffle mashed potatoes.",
    image: "/images/dishes/wellington.png",
  },
]

export function FeaturedDishes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dishes.map((dish) => (
        <Card key={dish.id} className="overflow-hidden border-none shadow-xl group h-full flex flex-col">
          <div className="relative flex-1">
            {/* Remove any potential margin/padding that could cause the gap */}
            <div className="w-full h-0 pt-[75%] relative">
              <img
                src={dish.image || "/placeholder.svg"}
                alt={dish.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <span className="text-white font-medium flex items-center gap-2 bg-amber-500/80 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Eye className="h-4 w-4" />
                  View Details
                </span>
              </div>
            </div>
          </div>
          <CardContent className="p-6 bg-white border-t-4 border-amber-400">
            <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
            <p className="text-gray-600">{dish.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
