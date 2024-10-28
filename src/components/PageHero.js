import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PageHero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-center text-white">
    <Image
      src="/collegeFront.jpg"
      alt="University campus"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 z-0"
    />
    <div className="relative z-10 -0 space-y-4 p-4 bg-black bg-opacity-50 rounded-lg">
      <h1 className="text-6xl font-bold">ভর্তি শাখা</h1>
    

    </div>
  </section>
  )
}
