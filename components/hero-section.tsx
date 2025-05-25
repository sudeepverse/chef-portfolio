"use client"

import Image from "next/image"
import Link from "next/link"
import { ChefHat } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Hero background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
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
  )
}