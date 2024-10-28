'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageHero from '@/components/PageHero'

// Sample faculty data
const facultyData = [
  { id: 1, name: "Dr. Jane Smith", department: "Computer Science", image: "/placeholder.svg?height=150&width=150" },
  { id: 2, name: "Prof. John Doe", department: "Mathematics", image: "/placeholder.svg?height=150&width=150" },
  { id: 3, name: "Dr. Emily Brown", department: "Physics", image: "/placeholder.svg?height=150&width=150" },
  { id: 4, name: "Prof. Michael Johnson", department: "Computer Science", image: "/placeholder.svg?height=150&width=150" },
  { id: 5, name: "Dr. Sarah Lee", department: "Mathematics", image: "/placeholder.svg?height=150&width=150" },
  { id: 6, name: "Prof. David Wilson", department: "Physics", image: "/placeholder.svg?height=150&width=150" },
]

export default function Faculty() {
  const [filter, setFilter] = useState("all")

  const filteredFaculty = filter === "all" 
    ? facultyData 
    : facultyData.filter(faculty => faculty.department.toLowerCase() === filter)

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHero />
      <h1 className="text-3xl font-bold mb-6 text-[#a6192e]">Our Faculty</h1>
      
      <div className="mb-6">
        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="computer science">Computer Science</SelectItem>
            <SelectItem value="mathematics">Mathematics</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((faculty) => (
          <Card key={faculty.id}>
            <CardContent className="p-6 flex flex-col items-center">
              <Image
                src={"/images.jfif"}
                alt={faculty.name}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-[#585252]">{faculty.name}</h2>
              <p className="text-[#585252] mb-4">{faculty.department}</p>
              <Button asChild className="bg-[#e81727] hover:bg-[#c71522] text-white">
                <Link href={`/faculty/${faculty.id}`}>View Profile</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}