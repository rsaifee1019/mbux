'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    admissionRoll: '',
    admissionDate: '',
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
    sscExamName: 'এসএসসি',
    sscBranch: '',
    sscBoard: '',
    sscRoll: '',
    sscRegNo: '',
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
    fourthSubject: '',
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
  };

  const handleAddressChange = (addressType, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [addressType]: {
        ...prevData[addressType],
        [field]: value
      }
    }));
  };

  const handleCheckboxChange = (section, field) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: !prevData[section][field]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to a server
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-between items-start">
          <div className="w-16 h-16 bg-gray-200">
            {/* Replace with actual logo */}
            <span className="text-xs">Logo here</span>
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
          <div className="w-24 h-24 border border-black p-1">
            <p className="text-xs text-center">১ কপি পাসপোর্ট সাইজ ছবি আঠা দিয়ে লাগাতে হবে</p>
          </div>
        </div>
        <div className="mt-4 p-2">
          <p className="font-bold">শাখাঃ গার্হস্থ্য বিজ্ঞান</p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 p-2">
            <div>
              <Label htmlFor="admissionRoll">১। ভর্তি রোলঃ</Label>
              <Input id="admissionRoll" name="admissionRoll" value={formData.admissionRoll} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="admissionDate">ভর্তির তারিখঃ</Label>
              <Input id="admissionDate" name="admissionDate" type="date" value={formData.admissionDate} onChange={handleInputChange} />
            </div>
          </div>

          <div className=" p-2">
            <Label htmlFor="nameInBengali">২। ছাত্রীর নাম (বাংলায়)ঃ</Label>
            <Input id="nameInBengali" name="nameInBengali" value={formData.nameInBengali} onChange={handleInputChange} />
            <Label htmlFor="nameInEnglish">ইংরেজিতেঃ</Label>
            <Input id="nameInEnglish" name="nameInEnglish" value={formData.nameInEnglish} onChange={handleInputChange} />
          </div>

          <div className="grid grid-cols-2 gap-4  p-2">
            <div>
              <Label htmlFor="birthRegNo">৩। ছাত্রীর জন্ম নিবন্ধন নম্বরঃ</Label>
              <Input id="birthRegNo" name="birthRegNo" value={formData.birthRegNo} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="mobile">মোবাইল ��ম্বরঃ</Label>
              <Input id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 p-2">
            <div>
              <Label htmlFor="dateOfBirth">৪। জন্ম তারিখঃ</Label>
              <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="nationality">জাতীয়তা ঃ</Label>
              <Input id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="religion">ধর্মঃ</Label>
              <Input id="religion" name="religion" value={formData.religion} onChange={handleInputChange} />
            </div>
            <div>
              <Label>বিবাহিত/অবিবাহিত</Label>
              <Select name="maritalStatus" onValueChange={(value) => handleInputChange({ target: { name: 'maritalStatus', value } })}>
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

          {/* Continue with the rest of the form fields following the same pattern */}

          <div className="p-2">
            <Label>১৩। পড়তে ইচ্ছুক বিষয়ের নাম ও কোড নম্বরঃ</Label>
            <ul className="list-disc pl-5">
              <li>১। বাংলা (১০১,১০২)</li>
              <li>২। ইংরেজি (১০৭,১০৮)</li>
              <li>৩। তথ্য ও যোগাযোগ প্রযুক্তি (১০৯,১১০)</li>
              <li>৪। খাদ্য ও পুষ্টি (১১১,১১২)</li>
              <li>৫। গৃহ ব্যবস্থাপনা (১১৩,১১৪)</li>
              <li>৬। শিশু উন্নয়ন (১১৫,১১৬)</li>
            </ul>
          </div>

          <div className="p-2">
            <Label>১৪। চতুর্থ বিষয়ঃ</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="শিল্পকলা ও বস্ত্র পরিচ্ছদ" 
                  checked={formData.fourthSubject === 'শিল্পকলা ও বস্ত্র পরিচ্ছদ'}
                  onCheckedChange={() => setFormData(prevData => ({ ...prevData, fourthSubject: 'শিল্পকলা ও বস্ত্র পরিচ্ছদ' }))}
                />
                <Label htmlFor="শিল্পকলা ও বস্ত্র পরিচ্ছদ">শিল্পকলা ও বস্ত্র পরিচ্ছদ (২৮৪,২৮৫)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="মনোবিজ্ঞান" 
                  checked={formData.fourthSubject === 'মনোবিজ্ঞান'}
                  onCheckedChange={() => setFormData(prevData => ({ ...prevData, fourthSubject: 'মনোবিজ্ঞান' }))}
                />
                <Label htmlFor="মনোবিজ্ঞান">মনোবিজ্ঞান(১২৩,১২৪)</Label>
              </div>
            </div>
          </div>

          <div className="p-2">
            <Label htmlFor="extraCurricularActivities">১৫। সাহিত্য-সংস্কৃতি-ক্রীড়া বিষয়ে অভিজ্ঞতা (যদি থাকে)ঃ</Label>
            <Textarea id="extraCurricularActivities" name="extraCurricularActivities" value={formData.extraCurricularActivities} onChange={handleInputChange} />
          </div>

          <div className="p-2">
            <Label htmlFor="hobbies">১৬। সখঃ</Label>
            <Textarea id="hobbies" name="hobbies" value={formData.hobbies} onChange={handleInputChange} />
          </div>

          <div className="p-2">
            <Label htmlFor="socialServiceExperience">১৭। সমাজ সেবার অভিজ্ঞতা (যদি থাকে)ঃ</Label>
            <Textarea id="socialServiceExperience" name="socialServiceExperience" value={formData.socialServiceExperience} onChange={handleInputChange} />
          </div>

          <div className="p-2">
            <Label>ফরমের সাথে জমা দিতে হবেঃ</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="confirmationSlip" 
                  checked={formData.documents.confirmationSlip}
                  onCheckedChange={() => handleCheckboxChange('documents', 'confirmationSlip')}
                />
                <Label htmlFor="confirmationSlip">১। Confirmation Slip এর ১ কপি।</Label>
              </div>
              {/* Add more document checkboxes here */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="guardianSignature">অভিভাবকের স্বাক্ষর ও তারিখ</Label>
              <Input id="guardianSignature" name="guardianSignature" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="studentSignature">ছাত্রীর স্বাক্ষর ও তারিখ</Label>
              <Input id="studentSignature" name="studentSignature" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="authoritySignature">কর্তৃপক্ষের স্বাক্ষর ও তারিখ</Label>
              <Input id="authoritySignature" name="authoritySignature" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="principalSignature">অধ্যক্ষর স্বাক্ষর ও তারিখ</Label>
              <Input id="principalSignature" name="principalSignature" />
            </div>
          </div>

          <Button type="submit" className="w-full">ফরম জমা দিন</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdmissionForm;
