import Link from "next/link"
import {
  ChefHat,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Trophy,
  Briefcase,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedDishes } from "@/components/featured-dishes"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { Awards } from "@/components/awards"
import { Journey } from "@/components/journey"
import { SafeImage } from "@/components/safe-image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/40 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
          <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <ChefHat className="h-14 w-14 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4">Chef Narayan Shrestha</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-[700px] mb-10">
            Award-winning pastry chef and winner of Great British Bake Off: The Professionals 2024
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full bg-amber-500 hover:bg-amber-600 text-white">
              <Link href="#contact">Book a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <Link href="#menu">View My Signature Creations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <SafeImage
                src="/images/chef-portrait.png"
                alt="Chef Narayan Shrestha"
                className="w-full h-auto object-cover"
                fallbackSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9OY12m1xqNjvH2pVP1tgKL67qk6cXl.png"
              />
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-6">
                Passionate About Pastry
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">About Me</h2>
              <p className="text-gray-700 mb-6 text-lg">
                I am Narayan Shrestha, a passionate pastry chef from Dhading, Nepal, with a deep love for the art of
                baking and culinary innovation. My journey in the culinary world began in 2014, and since then, I have
                honed my skills across the globe, from the UAE to Qatar and the UK.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                My dedication to excellence and creativity has led me to achieve international recognition, including
                winning the prestigious{" "}
                <span className="font-semibold">Great British Bake Off: The Professionals 2024</span> alongside my
                teammate, Tanuj Sharma.
              </p>
              <div className="flex flex-col gap-4 mb-10 bg-stone-50 p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-amber-100">
                    <MapPin className="h-5 w-5 text-amber-700" />
                  </div>
                  <span className="text-gray-800">Originally from Maidi, Dhading, Nepal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-amber-100">
                    <Trophy className="h-5 w-5 text-amber-700" />
                  </div>
                  <span className="text-gray-800">Winner of Great British Bake Off: The Professionals 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-amber-100">
                    <Briefcase className="h-5 w-5 text-amber-700" />
                  </div>
                  <span className="text-gray-800">Currently at Intercontinental London – The O2</span>
                </div>
              </div>
              <Button asChild className="rounded-full bg-amber-500 hover:bg-amber-600 text-white">
                <Link href="#journey" className="flex items-center gap-2">
                  Explore My Journey
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-6">
              My Culinary Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Food is Art that Tells a Story</h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              &ldquo;I believe that food is not just nourishment but an art form that tells a story. My creations are
              inspired by my roots in Nepal, incorporating traditional flavors and techniques into contemporary
              desserts. Winning the Great British Bake Off: The Professionals has been a milestone in my career, and I
              am committed to pushing the boundaries of culinary innovation.&rdquo;
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-amber-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">
              My Path
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Culinary Journey</h2>
            <p className="text-gray-700 max-w-[700px] mx-auto text-lg">
              From Nepal to international kitchens, my career has been shaped by diverse experiences and a passion for
              pastry.
            </p>
          </div>
          <Journey />
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="menu" className="py-24 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">
              Culinary Creations
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Signature Desserts</h2>
            <p className="text-gray-700 max-w-[700px] mx-auto text-lg">
              A selection of my most celebrated pastry creations, showcasing technique, flavor, and artistic
              presentation.
            </p>
          </div>
          <FeaturedDishes />
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">
              Recognition
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Achievements & Honors</h2>
            <p className="text-gray-700 max-w-[700px] mx-auto text-lg">
              Celebrating culinary excellence and innovation recognized by industry experts.
            </p>
          </div>
          <Awards />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">
              What I Offer
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">My Services</h2>
            <p className="text-gray-700 max-w-[700px] mx-auto text-lg">
              From special events to masterclasses, I offer a range of pastry and dessert services tailored to your
              needs.
            </p>
          </div>
          <Services />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">
              Client Experiences
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Testimonials</h2>
            <p className="text-gray-700 max-w-[700px] mx-auto text-lg">
              What clients and colleagues say about their experiences with me.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">
                Let&rsquo;s Connect
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-10 text-lg">
                Ready to create a memorable culinary experience? Contact me to discuss your event, private dining needs,
                or any questions you might have.
              </p>
              <div className="flex flex-col gap-6 mb-6 bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-amber-100">
                    <Phone className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="font-medium">+44 7442 405725</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-amber-100">
                    <Mail className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-medium">contact@chefnarayanshrestha.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-amber-100">
                    <MapPin className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-medium">London, United Kingdom</p>
                  </div>
                </div>
              </div>

              {/* Compact Social Media Section */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl shadow-sm border border-amber-200">
                <h4 className="font-semibold text-base mb-3 text-gray-800">Connect With Me</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="https://www.instagram.com/chefnarayanshrestha?igsh=MW9udXVsbm1jbWM3&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white hover:bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-sm group border border-gray-100"
                  >
                    <div className="p-2 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg text-white group-hover:scale-105 transition-transform">
                      <Instagram className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-800 block leading-tight">Instagram</span>
                      <span className="text-xs text-gray-500">@chefnarayan</span>
                    </div>
                  </Link>

                  <Link
                    href="https://www.facebook.com/share/1C6shvwaCf/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white hover:bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-sm group border border-gray-100"
                  >
                    <div className="p-2 bg-blue-600 rounded-lg text-white group-hover:scale-105 transition-transform">
                      <Facebook className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-800 block leading-tight">Facebook</span>
                      <span className="text-xs text-gray-500">Chef Narayan</span>
                    </div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/narayan-shrestha-757682b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white hover:bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-sm group border border-gray-100"
                  >
                    <div className="p-2 bg-blue-700 rounded-lg text-white group-hover:scale-105 transition-transform">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-800 block leading-tight">LinkedIn</span>
                      <span className="text-xs text-gray-500">Professional</span>
                    </div>
                  </Link>

                  <Link
                    href="http://www.youtube.com/@narayanshrestha8453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white hover:bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-sm group border border-gray-100"
                  >
                    <div className="p-2 bg-red-600 rounded-lg text-white group-hover:scale-105 transition-transform">
                      <Youtube className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-800 block leading-tight">YouTube</span>
                      <span className="text-xs text-gray-500">Cooking Videos</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      type="text"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="event-type" className="text-sm font-medium text-gray-700">
                    Inquiry Type
                  </label>
                  <select
                    id="event-type"
                    className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select inquiry type
                    </option>
                    <option value="private-event">Private Event</option>
                    <option value="masterclass">Masterclass</option>
                    <option value="consultation">Consultation</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[140px] w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Tell me about your event or inquiry"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-lg bg-amber-500 hover:bg-amber-600 text-white h-12 font-medium"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="p-2 rounded-full bg-amber-500/20">
                <ChefHat className="h-8 w-8 text-amber-400" />
              </div>
              <span className="text-xl font-bold">Chef Narayan Shrestha</span>
            </div>
            <div></div>
          </div>
          <div className="border-t border-gray-800 my-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    My Story
                  </Link>
                </li>
                <li>
                  <Link href="#journey" className="text-gray-400 hover:text-white transition-colors">
                    Culinary Journey
                  </Link>
                </li>
                <li>
                  <Link href="#awards" className="text-gray-400 hover:text-white transition-colors">
                    Achievements
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Private Events
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Masterclasses
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Consultations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Creations</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#menu" className="text-gray-400 hover:text-white transition-colors">
                    Signature Desserts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Seasonal Specials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Nepalese Fusion
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Media Inquiries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Chef Narayan Shrestha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
