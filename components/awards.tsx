import { Award, Star, Trophy, Medal, Crown } from "lucide-react"

type AwardProps = {
  year: string
  title: string
  organization: string
  description: string
  featured?: boolean
  icon?: string
}

const awards: AwardProps[] = [
  {
    year: "2024",
    title: "Winner, Great British Bake Off: The Professionals",
    organization: "Channel 4, UK",
    description:
      "Made history as part of the first South Asian team to win this globally renowned competition, representing Intercontinental London – The O2.",
    featured: true,
    icon: "trophy",
  },
  {
    year: "2023",
    title: "Pastry Chef Excellence Award",
    organization: "International Culinary Federation",
    description: "Recognized for outstanding contributions to pastry arts and innovative dessert creations.",
    featured: true,
    icon: "medal",
  },
  {
    year: "2022",
    title: "Featured Chef",
    organization: "BBC Food",
    description:
      "Highlighted for bringing Nepalese flavors to high-end pastry, showcasing fusion desserts that blend Eastern and Western techniques.",
    featured: false,
  },
  {
    year: "2021",
    title: "Rising Star in Pastry",
    organization: "UK Hospitality Awards",
    description: "Acknowledged as an emerging talent in the UK&rsquo;s competitive pastry scene.",
    featured: false,
  },
  {
    year: "2020",
    title: "Chocolate Showpiece Competition",
    organization: "European Pastry Exhibition",
    description:
      "Second place for an intricate chocolate sculpture inspired by Nepalese architecture and cultural motifs.",
    featured: true,
    icon: "crown",
  },
]

export function Awards() {
  const featuredAwards = awards.filter((award) => award.featured)
  const otherAwards = awards.filter((award) => !award.featured)

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredAwards.map((award, index) => (
          <div key={index} className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute transform rotate-45 bg-amber-500 text-white shadow-lg font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                Featured
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              {award.icon === "trophy" ? (
                <Trophy className="h-12 w-12 text-amber-600" />
              ) : award.icon === "medal" ? (
                <Medal className="h-12 w-12 text-amber-600" />
              ) : award.icon === "crown" ? (
                <Crown className="h-12 w-12 text-amber-600" />
              ) : (
                <Award className="h-12 w-12 text-amber-600" />
              )}
              <div>
                <h3 className="font-bold text-xl">{award.title}</h3>
                <p className="text-amber-700">{award.year}</p>
              </div>
            </div>
            <p className="font-medium text-gray-800 mb-2">{award.organization}</p>
            <p className="text-gray-600">{award.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherAwards.map((award, index) => (
          <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 flex items-start gap-4 shadow-sm">
            <Star className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-semibold text-lg">{award.title}</h3>
                <span className="text-gray-500 text-sm">({award.year})</span>
              </div>
              <p className="text-gray-700 text-sm font-medium mb-1">{award.organization}</p>
              <p className="text-gray-600 text-sm">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
