import { MapPin, Trophy, ChefHat, Award } from "lucide-react"

export function Journey() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Desktop timeline */}
      <div className="hidden md:block relative">
        {/* Vertical timeline line with gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 rounded-full"></div>

        {/* Timeline items */}
        <div className="space-y-24">
          {/* Item 1 - Left side */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-12 text-right">
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border-l-4 border-amber-400 relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-amber-50 rotate-45 border-r border-t border-amber-200"></div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">
                  2014 - 2016
                </span>
                <h3 className="text-2xl font-bold mb-3">Beginning in Dubai</h3>
                <div className="flex items-center justify-end gap-2 text-gray-600 mb-4">
                  <span className="font-medium">DoubleTree Hotel, Dubai, UAE</span>
                  <MapPin className="h-4 w-4 text-amber-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Started my international culinary journey as an assistant chef, focusing on pastry and dessert
                  preparation.
                </p>
              </div>
            </div>

            {/* Timeline marker with animation */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center relative">
                <ChefHat className="h-5 w-5 text-white" />
                <div className="absolute w-full h-full rounded-full bg-amber-400 animate-ping opacity-30"></div>
              </div>
              <div className="absolute w-16 h-0.5 bg-amber-300 left-10 top-1/2 transform -translate-y-1/2"></div>
            </div>

            <div className="w-1/2 pl-12"></div>
          </div>

          {/* Item 2 - Right side */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-12"></div>

            {/* Timeline marker with animation */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                <ChefHat className="h-5 w-5 text-white" />
              </div>
              <div className="absolute w-16 h-0.5 bg-amber-300 right-10 top-1/2 transform -translate-y-1/2"></div>
            </div>

            <div className="w-1/2 pl-12">
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border-r-4 border-amber-400 relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-amber-50 rotate-45 border-l border-b border-amber-200"></div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">
                  2016 - 2019
                </span>
                <h3 className="text-2xl font-bold mb-3">Expanding in Qatar</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  <span className="font-medium">Four Seasons Hotel, Doha, Qatar</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Refined my skills in a luxury hotel environment, specializing in fine pastry and dessert creation for
                  high-end clientele.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 - Left side */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-12 text-right">
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border-l-4 border-amber-400 relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-amber-50 rotate-45 border-r border-t border-amber-200"></div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">
                  2019 - Present
                </span>
                <h3 className="text-2xl font-bold mb-3">Excellence in London</h3>
                <div className="flex items-center justify-end gap-2 text-gray-600 mb-4">
                  <span className="font-medium">Intercontinental London – The O2, UK</span>
                  <MapPin className="h-4 w-4 text-amber-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Continued to develop my craft at a prestigious London hotel, culminating in winning the Great British
                  Bake Off: The Professionals 2024 with teammate Tanuj Sharma.
                </p>
              </div>
            </div>

            {/* Timeline marker with animation */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                <ChefHat className="h-5 w-5 text-white" />
              </div>
              <div className="absolute w-16 h-0.5 bg-amber-300 left-10 top-1/2 transform -translate-y-1/2"></div>
            </div>

            <div className="w-1/2 pl-12"></div>
          </div>

          {/* Item 4 - Right side (Achievement) */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-12"></div>

            {/* Special trophy marker with animation */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center relative">
                <Trophy className="h-6 w-6 text-white" />
                <div className="absolute w-full h-full rounded-full bg-amber-400 animate-ping opacity-30"></div>
              </div>
              <div className="absolute w-16 h-0.5 bg-amber-300 right-12 top-1/2 transform -translate-y-1/2"></div>
            </div>

            <div className="w-1/2 pl-12">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg shadow-md border-r-4 border-amber-500 relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-amber-50 rotate-45 border-l border-b border-amber-200"></div>
                <div className="absolute top-0 right-0 -mt-2 -mr-2">
                  <Award className="h-8 w-8 text-amber-500 drop-shadow-md" />
                </div>
                <span className="inline-block px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-medium mb-3">
                  2024
                </span>
                <h3 className="text-2xl font-bold mb-3">Historic Victory</h3>
                <div className="flex items-center gap-2 text-gray-700 mb-4">
                  <Trophy className="h-5 w-5 text-amber-600" />
                  <span className="font-medium">Great British Bake Off: The Professionals</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Made history as part of the first South Asian team to win this globally renowned competition, bringing
                  pride to Nepal on an international stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version - stacked layout with enhanced styling */}
      <div className="md:hidden space-y-12">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 rounded-full"></div>

        {[
          {
            year: "2014 - 2016",
            title: "Beginning in Dubai",
            location: "DoubleTree Hotel, Dubai, UAE",
            description:
              "Started my international culinary journey as an assistant chef, focusing on pastry and dessert preparation.",
            icon: ChefHat,
          },
          {
            year: "2016 - 2019",
            title: "Expanding in Qatar",
            location: "Four Seasons Hotel, Doha, Qatar",
            description:
              "Refined my skills in a luxury hotel environment, specializing in fine pastry and dessert creation for high-end clientele.",
            icon: ChefHat,
          },
          {
            year: "2019 - Present",
            title: "Excellence in London",
            location: "Intercontinental London – The O2, UK",
            description:
              "Continued to develop my craft at a prestigious London hotel, culminating in winning the Great British Bake Off: The Professionals 2024 with teammate Tanuj Sharma.",
            icon: ChefHat,
          },
          {
            year: "2024",
            title: "Historic Victory",
            location: "Great British Bake Off: The Professionals",
            description:
              "Made history as part of the first South Asian team to win this globally renowned competition, bringing pride to Nepal on an international stage.",
            isAchievement: true,
            icon: Trophy,
          },
        ].map((item, index) => (
          <div key={index} className="relative pl-12">
            <div className="absolute left-4 top-0 transform -translate-x-1/2 w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <item.icon className="h-4 w-4 text-white" />
            </div>
            <div className="bg-amber-50 p-5 rounded-lg shadow-md border-l-4 border-amber-400 transform transition-all duration-300 hover:shadow-lg">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-2">
                {item.year}
              </span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                {item.isAchievement ? (
                  <Trophy className="h-4 w-4 text-amber-600" />
                ) : (
                  <MapPin className="h-4 w-4 text-amber-600" />
                )}
                <span className="font-medium">{item.location}</span>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
