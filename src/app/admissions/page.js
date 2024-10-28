"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react'
import PageHero from '@/components/PageHero'

const subjectStructures = {
  বিজ্ঞান: [
    "১। বাংলা(১০১,১০২)",
    "২। ইংরেজি(১০৭,১০৮)",
    "৩। তথ্য ও যোগাযোগ প্রযুক্তি(২৭৫)",
    "৪। পদার্থবিজ্ঞান (১৭৪,১৭৫)/ রসায়ন (১৭৬,১৭৭)/ জীববিজ্ঞান (১৭৮,১৭৯)/ উচ্চতর গণিত (২৬৫,২৬৬)",
    "৫। (৪র্থ বিষয়ের নাম) খ গুচ্ছের নির্বাচিত বিষয় বাদে যে কোন একটি বিষয়",
    "৬। জীববিজ্ঞান (১৭৮,১৭৯) / মনোবিজ্ঞান(১২৩,১২৪)/ উচ্চতর গণিত(২৬৫/২৬৬)",
  ],
  গার্হস্থ্য_বিজ্ঞান: [
    "১। বাংলা(১০১,১০২)",
    "২। ইংরেজি(১০৭,১০৮)",
    "৩। তথ্য ও যোগাযোগ প্রযুক্তি(২৭৫)",
    "৪। খাদ্য ও পুষ্টি (২৭৯,২৮০)",
    "৫। গৃহব্যবস্থাপনা ও পারিবারিক জীবন (২৮২,২৮৩)",
    "৬। শিশু বিকাশ(২৯৮,২৯৯)",
    "৭। শিল্পকলা ও বস্ত্র পরিচ্ছদ (২৮৪,২৮৫)/ মনোবিজ্ঞান(১২৩,১২৪)",
  ],
  মানবিক: [
    "১। বাংলা(১০১,১০২)",
    "২। ইংরেজি(১০৭,১০৮)",
    "৩। তথ্য ও যোগাযোগ প্রযুক্তি(২৭৫)",
    "৪। অর্থনীতি (১০৯,১১০) / পৌরনীতি (২৬৯,২৭০) / ইসলামের ইতিহাস (২৬৭,২৬৮) / সমাজকর্ম (২৭১,২৭২)",
    "৫। গার্হস্থ্য বিজ্ঞান (২৭৩,২৭৪) / মনোবিজ্ঞান(১২৩,১২৪) / উচ্চতর গণিত(২৬৫/২৬৬)",
  ]
};

export default function page() {
  const [selectedDepartment, setSelectedDepartment] = useState('বিজ্ঞান'); // Default department
  const [subjects, setSubjects] = useState([]); // Initialize subjects as an empty array

  useEffect(() => {
    // Set subjects based on the selected department
    const newSubjects = subjectStructures[selectedDepartment] || []; // Default to empty array if undefined
    setSubjects(newSubjects);
  }, [selectedDepartment]);

  return (
    <div>

      <PageHero header="ভর্তি তথ্য"/>
      <h1 className="text-4xl text-text-red mb-8 p-4">ইন্টারমিডিয়েট</h1>
      <Tabs defaultValue="গার্হস্থ্য বিজ্ঞান" className=" p-4">
        <TabsList>
    
          <TabsTrigger value="গার্হস্থ্য বিজ্ঞান" onClick={() => setSelectedDepartment('গার্হস্থ্য_বিজ্ঞান')}>গার্হস্থ্য বিজ্ঞান</TabsTrigger>
          <TabsTrigger value="বিজ্ঞান" onClick={() => setSelectedDepartment('বিজ্ঞান')}>বিজ্ঞান</TabsTrigger>
          <TabsTrigger value="মানবিক" onClick={() => setSelectedDepartment('মানবিক')}>মানবিক</TabsTrigger>
        </TabsList>
       
        <TabsContent value="গার্হস্থ্য বিজ্ঞান">
          <Card>
            <CardHeader>
              <CardTitle>গার্হস্থ্য বিজ্ঞান ভর্তি তথ্য</CardTitle>

            </CardHeader>
            <CardContent>
              <p className="mb-4">গার্হস্থ্য বিজ্ঞান বিভাগের জন্য আবশ্যিক বিষয়:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {subjects.map((subject, index) => (
                  <li key={index}>{subject}</li> // Render subjects dynamically
                ))}
              </ul>
              <Link href={`/inter-form?subject=hscience`} className="text-[#e81727] hover:underline flex items-center">
              আবেদন করুন<ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="বিজ্ঞান">
          <Card>
            <CardHeader>
              <CardTitle>বিজ্ঞান ভর্তি তথ্য</CardTitle>
              <CardDescription>বিজ্ঞান বিভাগে ভর্তি তথ্য</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">বিজ্ঞান বিভাগের জন্য আবশ্যিক বিষয়:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {subjects.map((subject, index) => (
                  <li key={index}>{subject}</li> // Render subjects dynamically
                ))}
              </ul>
              <Link href={`/inter-form?subject=science`} className="text-[#e81727] hover:underline flex items-center">
              আবেদন করুন<ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="মানবিক">
          <Card>
            <CardHeader>
              <CardTitle>মানবিক ভর্তি তথ্য</CardTitle>
              <CardDescription>মানবিক বিভাগে ভর্তি তথ্য</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">মানবিক বিভাগের জন্য আবশ্যিক বিষয়:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {subjects.map((subject, index) => (
                  <li key={index}>{subject}</li> // Render subjects dynamically
                ))}
              </ul>
              <Link href={`/inter-form?subject=humanities`} className="text-[#e81727] hover:underline flex items-center">
              আবেদন করুন<ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
