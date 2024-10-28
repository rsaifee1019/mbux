'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'

const carouselSlides = [
  {
    image: '/slider2.jpg',
    title: "Shaping Tomorrow's Leaders",
    subtitle: 'Discover a world-class education at our university',
  },
  {
    image: '/collegeFront.jpg',
    title: 'Innovative Research',
    subtitle: 'Pushing the boundaries of knowledge',
  },
  {
    image: '/slider1.jpg',
    title: 'Vibrant Campus Life',
    subtitle: 'Experience a rich community with diverse activities',
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">



      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white space-y-4 max-w-3xl px-4">
                  <h1 className="text-4xl md:text-5xl font-bold">{slide.title}</h1>
                  <p className="text-xl md:text-2xl">{slide.subtitle}</p>
                  <Button asChild size="lg" className="bg-[#e81727] hover:bg-[#c71522] text-white">
                    <Link href="/admissions">Start Your Journey</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* Quick Links Section (immediately after the carousel) */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {/* Quick Links content */}
        </div>
      </section>

      {/* Rest of the page content */}
    </div>
  )
}