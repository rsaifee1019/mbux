'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageHero from '@/components/PageHero'

export default function Faculty() {
  const [teachers, setTeachers] = useState([]);
  const [filter, setFilter] = useState("all");

  // Fetch teachers data
  const fetchTeachers = async () => {
    const response = await fetch('/api/teachers?page=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch teachers');
    }
    const data = await response.json();
    setTeachers(data);
  };

  useEffect(() => {
    fetchTeachers().catch((error) => console.error(error));
  }, []);

  const filteredFaculty = filter === "all" 
    ? teachers 
    : teachers.filter(teacher => teacher.designation.toLowerCase() === filter);

  if (teachers.length === 0) return <div>Loading...</div>;

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
        {filteredFaculty.map((teacher) => (
          <Card key={teacher.id}>
            <CardContent className="p-6 flex flex-col items-center">
              <Image
                src={ "/placeholder.svg"} // Use the image from the API or a placeholder
                alt={teacher.title || teacher.designation} // Use title or designation as alt text
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-[#585252]">{teacher.title || "No Name"}</h2>
              <p className="text-[#585252] mb-4">{teacher.designation || "No Designation"}</p>
              <Button asChild className="bg-[#e81727] hover:bg-[#c71522] text-white">
                <Link href={`/faculty/?id=${teacher.id}`}>View Profile</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}