'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useRouter, useSearchParams } from 'next/navigation'; 
import Image from 'next/image';
import SearchParamsWrapper from '@/components/UseSearchParamsWrapper';
import { Suspense } from 'react';

const AdmissionForm = () => {
  const router = useRouter();
  const [subject, setSubject] = useState(null);
  const [bSectionSubjects, setBSectionSubjects] = useState(false);
  const [fourthSubjectOptions, setFourthSubjectOptions] = useState(false);

  useEffect(() => {
    if (subject === 'science') {
      setBSectionSubjects([
        { id: 'higherMath', label: 'উচ্চতর গণিত (২৬৫,২৬৬)' },
        { id: 'chemistry', label: 'রসায়ন (১৭৬,১৭৭)' },
        { id: 'biology', label: 'জীববিজ্ঞান (১৭৮,১৭৯)' },
        { id: 'physics', label: 'পদার্থবিজ্ঞান (১৭৪,১৭৫)' },
      ]);
    
      setFourthSubjectOptions([
        { id: 'psychology', label: 'মনোবিজ্ঞান (১২৩,১২৪)' },
        { id: 'biology', label: 'জীববিজ্ঞান (১৭৮,১৭৯)' },
        { id: 'higherMath', label: 'উচ্চতর গণিত (২৬৫,২৬৬)' },
      ]);
    } else if (subject === 'humanities') {
      setBSectionSubjects([
        { id: 'economics', label: 'অর্থনীতি (১০৯,১১০)' },
        { id: 'politics', label: 'পৌরনীতি (২৬৯,২৭০)' },
        { id: 'islamicHistory', label: 'ইসলামের ইতিহাস (২৬৭,২৬৮)' },
        { id: 'socialWork', label: 'সমাজকর্ম (২৭১,২৭২)' },
      ]);
    
      setFourthSubjectOptions([
        { id: 'healthScience', label: 'গার্হস্থ্য বিজ্ঞান (২৭৩,২৭৪)' },
        { id: 'psychology', label: 'মনোবিজ্ঞান (১২৩,১২৪)' },
        { id: 'higherMath', label: 'উচ্চতর গণিত (২৬৫,২৬৬)' },
      ]);
    } 
    else {
  
      setFourthSubjectOptions([
        { id: 'psychology', label: 'মনোবিজ্ঞান (১২৩,১২৪)' },
        {id:'arts', label:'শিল্পকলা ও বস্ত্র পরিচ্ছদ (২৮৪,২৮৫)'}
      ]);
    }
  }, [subject]);

  const [formData, setFormData] = useState({
    subject,
    type: 'admission',
    nameInBengali: '',
    nameInEnglish: '',
    birthRegNo: '',
    mobile: '',
    dateOfBirth: '',
    nationality: '',
    religion: '',
    maritalStatus: '',
    fatherNameBengali: '',
    fatherNameEnglish: '',
    fatherNID: '',
    fatherMobile: '',
    motherNameBengali: '',
    motherNameEnglish: '',
    motherNID: '',
    motherMobile: '',
    permanentAddress: {
      village: '',
      postOffice: '',
      thana: '',
      district: '',
    },
    presentAddress: {
      village: '',
      postOffice: '',
      thana: '',
      district: '',
    },
    guardianName: '',
    guardianOccupation: '',
    guardianIncome: '',
    guardianMobile: '',
    sscBranch: '',
    sscBoard: '',
    sscRoll: '',
    ssc_registration: '',
    sscYear: '',
    sscPassYear: '',
    sscGPA: '',
    sscInstituteName: '',
    sscInstituteAddress: {
      village: '',
      postOffice: '',
      thana: '',
      district: '',
    },
    subjectsA: (subject !== 'hscience') ? ['বাংলা (১০১,১০২)', 'ইংরেজি (১০৭,১০৮)', 'তথ্য ও যোগাযোগ প্রযুক্তি (১০৯,১১০)'] : ['বাংলা (১০১,১০২)', 'ইংরেজি (১০৭,১০৮)', 'তথ্য ও যোগাযোগ প্রযুক্তি (১০৯,১১০)', 'খাদ্য ও পুষ্টি (১১১,১১২)', 'গৃহ ব্যবস্থাপনা (১১৩,১১৪)', 'শিশু উন্নয়ন (১১৫,১১৬)'],
    subjectsB: [],
    fourthSubject: [],
    extraCurricularActivities: '',
    hobbies: '',
    socialServiceExperience: '',
    documents: {
      confirmationSlip: false,
      sscTranscript: false,
      sscCertificate: false,
      sscRegAndAdmitCard: false,
      photos: false,
      birthCertificate: false,
      parentsNID: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    console.log(formData);
  };
  const handleBSectionChange = (subjectId) => {
    setFormData(prevData => {
      const currentSelection = prevData.subjectsB;
      const isSelected = currentSelection.includes(subjectId);

      if (isSelected) {
        // Remove subject if already selected
        return {
          ...prevData,
          subjectsB: currentSelection.filter(id => id !== subjectId)
        };
      } else if (currentSelection.length < 3) {
        // Add subject if not selected and less than 3 subjects are selected
        return {
          ...prevData,
          subjectsB: [...currentSelection, subjectId]
        };
      }
      return prevData; // Do nothing if already 3 subjects are selected
    });
  };

  const handleFourthSubjectChange = (subjectId) => {
    setFormData(prevData => ({
      ...prevData,
      fourthSubject: subjectId
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('/api/applicants', { // Adjust the API endpoint as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      localStorage.setItem("tran_id", data.tran_id);
      if (response.ok) {
        // Redirect to the checkout page on successful submission
        router.push('/checkout');
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Error submitting form:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddressChange = (addressType, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [addressType]: {
        ...prevData[addressType],
        [field]: value,
      },
    }));
  };

  return (
       <Suspense fallback={<div>Loading...</div>}>
    <SearchParamsWrapper>
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-between items-start">
          <div className="w-16 h-16 bg-gray-200">
            <Image src="/logo-icon.jpg" alt="Logo" width={200} height={200} />
          </div>
          <div>
            <CardTitle className="text-xl font-bold">
              মাদার বখ্শ্ গার্হস্থ্য অর্থনীতি কলেজ
            </CardTitle>
            <p className="text-sm">পদ্মা আবাসিক এলাকা, রাজশাহী-৬২০৭</p>
            <h2 className="text-lg font-semibold mt-2">
              একাদশ শ্রেণিতে ভর্তির ফরম
            </h2>
            <p className="text-sm">শিক্ষাবর্ষঃ ২০২৪-২০২৫</p>
          </div>
          <div className="w-24 h-24 "></div>
        </div>
        <div className="mt-4 p-2">
          <p className="font-bold">শাখাঃ গার্হস্থ্য বিজ্ঞান</p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Adjusted input fields for better mobile responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="ssc_registration">১। এসএসসি রেজিস্ট্রেশন নম্বর (আবশ্যক): </Label>
              <Input id="ssc_registration" name="ssc_registration" value={formData.ssc_registration} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="nameInBengali">২। ছাত্রীর নাম (বাংলায়)ঃ</Label>
              <Input id="nameInBengali" name="nameInBengali" value={formData.nameInBengali} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="nameInEnglish">ইংরেজিতে (আবশ্যক): </Label>
              <Input id="nameInEnglish" name="nameInEnglish" value={formData.nameInEnglish} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="birthRegNo">৩। ছাত্রীর জন্ম নিবন্ধন নম্বর (আবশ্যক): </Label>
              <Input id="birthRegNo" name="birthRegNo" value={formData.birthRegNo} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="mobile">৪। মোবাইল নম্বর (আবশ্যক): </Label>
              <Input id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">৪। জন্ম তারিখ (আবশ্যক): </Label>
              <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="nationality">৫। জাতীয়তা (আবশ্যক): </Label>
              <Input id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="religion">৬। ধর্ম (আবশ্যক): </Label>
              <Input id="religion" name="religion" value={formData.religion} onChange={handleInputChange} required />
            </div>
            <div>
              <Label>৭। বিবাহিত/অবিবাহিত (আবশ্যক): </Label>
              <Select name="maritalStatus" onValueChange={(value) => handleInputChange({ target: { name: 'maritalStatus', value } })} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="married">বিবাহিত</SelectItem>
                  <SelectItem value="unmarried">অবিবাহিত</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Father's Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="fatherNameBengali">পিতার নাম (বাংলায়):</Label>
              <Input id="fatherNameBengali" name="fatherNameBengali" value={formData.fatherNameBengali} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="fatherNameEnglish">৮। পিতার নাম (ইংরেজিতে) (আবশ্যক): </Label>
              <Input id="fatherNameEnglish" name="fatherNameEnglish" value={formData.fatherNameEnglish} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="fatherNID">৯। পিতার NID নম্বর (আবশ্যক): </Label>
              <Input id="fatherNID" name="fatherNID" value={formData.fatherNID} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="fatherMobile">১০। পিতার মোবাইল নম্বর (আবশ্যক): </Label>
              <Input id="fatherMobile" name="fatherMobile" value={formData.fatherMobile} onChange={handleInputChange} required />
            </div>
          </div>

          {/* Mother's Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="motherNameBengali">মায়ের নাম (বাংলায়):</Label>
              <Input id="motherNameBengali" name="motherNameBengali" value={formData.motherNameBengali} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="motherNameEnglish">১১। মায়ের নাম (ইংরেজিতে) (আবশ্যক): </Label>
              <Input id="motherNameEnglish" name="motherNameEnglish" value={formData.motherNameEnglish} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="motherNID">১২। মায়ের NID নম্বর (আবশ্যক): </Label>
              <Input id="motherNID" name="motherNID" value={formData.motherNID} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="motherMobile">১৩। মায়ের মোবাইল নম্বর (আবশ্যক): </Label>
              <Input id="motherMobile" name="motherMobile" value={formData.motherMobile} onChange={handleInputChange} required />
            </div>
          </div>

          {/* Permanent Address */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
            <div className="col-span-2">
              <Label htmlFor="permanentAddress.village">১৪। স্থায়ী ঠিকানা (গ্রাম):</Label>
              <Input
                id="permanentAddress.village"
                name="permanentAddress.village"
                value={formData.permanentAddress.village}
                onChange={(e) => handleAddressChange('permanentAddress', 'village', e.target.value)}
                required
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="permanentAddress.postOffice">১৫। স্থায়ী ঠিকানা (পোস্ট অফিস):</Label>
              <Input
                id="permanentAddress.postOffice"
                name="permanentAddress.postOffice"
                value={formData.permanentAddress.postOffice}
                onChange={(e) => handleAddressChange('permanentAddress', 'postOffice', e.target.value)}
                required
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="permanentAddress.thana">১৬। স্থায়ী ঠিকানা (থানা):</Label>
              <Input
                id="permanentAddress.thana"
                name="permanentAddress.thana"
                value={formData.permanentAddress.thana}
                onChange={(e) => handleAddressChange('permanentAddress', 'thana', e.target.value)}
                required
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="permanentAddress.district">১৭। স্থায়ী ঠিকানা (জেলা):</Label>
              <Input
                id="permanentAddress.district"
                name="permanentAddress.district"
                value={formData.permanentAddress.district}
                onChange={(e) => handleAddressChange('permanentAddress', 'district', e.target.value)}
                required
              />
            </div>
          </div>

          {/* Present Address */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
            <div className="col-span-2">
              <Label htmlFor="presentAddress.village">১৮। বর্তমান ঠিকানা (গ্রাম):</Label>
              <Input
                id="presentAddress.village"
                name="presentAddress.village"
                value={formData.presentAddress.village}
                onChange={(e) => handleAddressChange('presentAddress', 'village', e.target.value)}
                required
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="presentAddress.postOffice">১৯। বর্তমান ঠিকানা (পোস্ট অফিস):</Label>
              <Input
                id="presentAddress.postOffice"
                name="presentAddress.postOffice"
                value={formData.presentAddress.postOffice}
                onChange={(e) => handleAddressChange('presentAddress', 'postOffice', e.target.value)}
                required
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="presentAddress.thana">২০। বর্তমান ঠিকানা (থানা):</Label>
              <Input
                id="presentAddress.thana"
                name="presentAddress.thana"
                value={formData.presentAddress.thana}
                onChange={(e) => handleAddressChange('presentAddress', 'thana', e.target.value)}
                required
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="presentAddress.district">২১। বর্তমান ঠিকানা (জেলা):</Label>
              <Input
                id="presentAddress.district"
                name="presentAddress.district"
                value={formData.presentAddress.district}
                onChange={(e) => handleAddressChange('presentAddress', 'district', e.target.value)}
                required
              />
            </div>
          </div>


          <div className="p-2">
          <Label>১৩। পড়তে ইচ্ছুক বিষয়ের নাম ও কোড নম্বরঃ</Label>
          <ul className="list-disc pl-5">
            <li> বাংলা (১০১,১০২)</li>
            <li>ইংরেজি (১০৭,১০৮)</li>
            <li>তথ্য ও যোগাযোগ প্রযুক্তি (১০৯,১১০)</li>
        {subject == 'hscience' && <li> খাদ্য ও পুষ্টি (১১১,১২২)</li>}
        {subject == 'hscience' && <li>গৃহ ব্যবস্থাপনা (১১৩,১১৪)</li>}
        {subject == 'hscience' && <li>শিশু উন্নয়ন (১১৫,১১৬)</li>}
          </ul>
        </div>

  {  bSectionSubjects && <div className="p-2">
          <Label>১৪। B বিভাগ বিষয়সমূহ (৩টি নির্বাচন করুন):</Label>
          <div className="space-y-2">
            {bSectionSubjects.map((subject) => (
              <div key={subject.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={subject.id} 
                  checked={formData.subjectsB.includes(subject.id)}
                  onCheckedChange={() => handleBSectionChange(subject.id)} 
                />
                <Label htmlFor={subject.id}>{subject.label}</Label>
              </div>
            ))}
          </div>
        </div>}

    {fourthSubjectOptions &&  <div className="p-2">
      <Label>১৫। চতুর্থ বিষয় (একটি নির্বাচন করুন):</Label>
      <div className="space-y-2">
        {fourthSubjectOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox 
              id={option.id} 
              checked={formData.fourthSubject === option.id}
              onCheckedChange={() => handleFourthSubjectChange(option.id)} 
              disabled={ bSectionSubjects && formData.subjectsB.includes(option.id)} // Disable if already selected in B section
            />
            <Label htmlFor={option.id}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>}

          {/* Guardian Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="guardianName">২২। অভিভাবকের নাম (আবশ্যক): </Label>
              <Input id="guardianName" name="guardianName" value={formData.guardianName} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="guardianOccupation">২৩। অভিভাবকের পেশা (আবশ্যক): </Label>
              <Input id="guardianOccupation" name="guardianOccupation" value={formData.guardianOccupation} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="guardianIncome">২৪। অভিভাবকের আয় (আবশ্যক): </Label>
              <Input id="guardianIncome" name="guardianIncome" value={formData.guardianIncome} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="guardianMobile">২৫। অভিভাবকের মোবাইল নম্বর (আবশ্যক): </Label>
              <Input id="guardianMobile" name="guardianMobile" value={formData.guardianMobile} onChange={handleInputChange} required />
            </div>
          </div>

          {/* SSC Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="sscBranch">২৬। এসএসসি শাখা (আবশ্যক): </Label>
              <Input id="sscBranch" name="sscBranch" value={formData.sscBranch} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="sscBoard">২৭। এসএসসি বোর্ড (আবশ্যক): </Label>
              <Input id="sscBoard" name="sscBoard" value={formData.sscBoard} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="sscRoll">২৮। এসএসসি রোল (আবশ্যক): </Label>
              <Input id="sscRoll" name="sscRoll" value={formData.sscRoll} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="sscYear">২৯। এসএসসি বছর (আবশ্যক): </Label>
              <Input id="sscYear" name="sscYear" value={formData.sscYear} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="sscPassYear">৩০। এসএসসি পাশের বছর (আবশ্যক): </Label>
              <Input id="sscPassYear" name="sscPassYear" value={formData.sscPassYear} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="sscGPA">৩১। এসএসসি জিপিএ (আবশ্যক): </Label>
              <Input id="sscGPA" name="sscGPA" value={formData.sscGPA} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="sscInstituteName">৩২। এসএসসি প্রতিষ্ঠান নাম (আবশ্যক): </Label>
              <Input id="sscInstituteName" name="sscInstituteName" value={formData.sscInstituteName} onChange={handleInputChange} required />
            </div>
          </div>

          {/* SSC Institute Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="sscInstituteAddress.village">৩৩। এসএসসি প্রতিষ্ঠান ঠিকানা (গ্রাম) (আবশ্যক):</Label>
              <Input id="sscInstituteAddress.village" name="sscInstituteAddress.village" value={formData.sscInstituteAddress.village} onChange={(e) => handleAddressChange('sscInstituteAddress', 'village', e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="sscInstituteAddress.postOffice">৩৪। এসএসসি প্রতিষ্ঠান ঠিকানা (পোস্ট অফিস) (আবশ্যক):</Label>
              <Input id="sscInstituteAddress.postOffice" name="sscInstituteAddress.postOffice" value={formData.sscInstituteAddress.postOffice} onChange={(e) => handleAddressChange('sscInstituteAddress', 'postOffice', e.target.value)} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="sscInstituteAddress.thana">৩৫। এসএসসি প্রতিষ্ঠান ঠিকানা (থানা) (আবশ্যক):</Label>
              <Input id="sscInstituteAddress.thana" name="sscInstituteAddress.thana" value={formData.sscInstituteAddress.thana} onChange={(e) => handleAddressChange('sscInstituteAddress', 'thana', e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="sscInstituteAddress.district">৩৬। এসএসসি প্রতিষ্ঠান ঠিকানা (জেলা) (আবশ্যক):</Label>
              <Input id="sscInstituteAddress.district" name="sscInstituteAddress.district" value={formData.sscInstituteAddress.district} onChange={(e) => handleAddressChange('sscInstituteAddress', 'district', e.target.value)} required />
            </div>
          </div>

          <Button type="submit" className="w-full">ফরম জমা দিন</Button>
        </form>
      </CardContent>
    </Card>
    </SearchParamsWrapper>
            </Suspense>
  );
};

export default AdmissionForm;
