'use server'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Notice from "@/models/Notice"
import NoticeBoardClient from "@/components/NoticeBoardClient"


const HomePage = async () => {

  let notices = await Notice.findAll();
  notices = notices.slice(0, 5);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
  

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative h-[60vh] bg-black/70 text-white">
          <Image
            src="/slider2.jpg"
            alt="University campus"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center ">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">মাদার বখ্শ গার্হস্থ অর্থনীতি কলেজ</h1>
              <p className="text-xl md:text-2xl mb-8">জ্ঞান এবং উদ্ভাবনের কেন্দ্র</p>
              <Link href="/admissions">
                <Button size="lg">ভর্তি হন</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* NoticeBoard section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <NoticeBoardClient notices={notices} />
          </div>
        </section>

        {/* Featured Content */}
     
      </main>

     
    </div>
  )
}

export default HomePage