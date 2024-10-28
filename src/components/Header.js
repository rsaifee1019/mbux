'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <header className="bg-primary text-primary border-b-4 border-b-accent z-0">
        <div className="px-2 py-2 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image src="/logo-main.png" alt="logo" width={400} height={200} />
          </Link>
          <Menu className='cursor-pointer text-primary-foreground md:hidden' onClick={() => setIsOpen(!isOpen)} />
          <nav className="hidden md:flex gap-4 text-primary-foreground ">
          
              <Link href="/faculty" className="hover:underline">ফ্যাকাল্টি</Link>
              <Link href="/admissions" className="hover:underline">ভর্তি</Link>
              <Link href="/fees" className="hover:underline">টিউশন ফি</Link>
              <Link href="/about-us" className="hover:underline">আমাদের সম্পর্কে</Link>
              <Link href="/contact-us" className="hover:underline">যোগাযোগ</Link>
              <Link href="/notices" className="hover:underline">নোটিশ</Link>
           
          </nav>
        </div>
        {/* Simple dropdown menu */}
        {isOpen && (
          <nav className="bg-[#efefef] text-black w-full shadow-lg z-50">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/faculty" className="hover:underline">ফ্যাকাল্টি</Link>
              <Link href="/admissions" className="hover:underline">ভর্তি</Link>
              <Link href="/fees" className="hover:underline">টিউশন ফি</Link>
              <Link href="/about-us" className="hover:underline">আমাদের সম্পর্কে</Link>
              <Link href="/contact-us" className="hover:underline">যোগাযোগ</Link>
              <Link href="/notices" className="hover:underline">নোটিশ</Link>
            </div>
          </nav>
        )}
      </header>
  )
}
