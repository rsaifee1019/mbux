"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const Fees = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    department: '',
    batch: '',
    paymentType: '',
    name:'',
    phone:''
  });

  const paymentTypes = {
    interTuition: 300,
    mastersTuition: 100,
    honsTuition: 100
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/student`, {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    const data = await response.json()
    localStorage.setItem('tran_id', data.tran_id)
    
    const response2 = await fetch(`/api/init`, {
      method: 'POST',
      body: JSON.stringify(data)
    });

    const data2 = await response2.json()
    window.location.href = data2.GatewayPageURL
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(formData)
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">ফি পরিশোধ</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="studentId">রোল নং</Label>
            <Input
              id="studentId"
              name="studentId"
              placeholder="রোল নং লিখুন "
              required
              className="w-full"
              value={formData.studentId}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">নাম</Label>
            <Input
              id="name"
              name="name"
              placeholder="নাম লিখুন "
              required
              className="w-full"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">মোবাইল নং</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="মোবাইল নং লিখুন "
              required
              className="w-full"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">শাখা</Label>
            <Input
              id="department"
              name="department"
              placeholder="শাখা লিখুন "
              required
              className="w-full"
              value={formData.department}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="batch">ব্যাচ</Label>
            <Input
              id="batch"
              name="batch"
              placeholder="ব্যাচ লিখুন "
              required
              className="w-full"
              value={formData.batch}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="paymentType">ফি এর ধরন</Label>
            <select
              id="paymentType"
              name="paymentType"
              className="w-full rounded-md border border-gray-300 p-2"
              required
              value={formData.paymentType}
              onChange={handleInputChange}
            >
              <option value="">বাছাই করুন</option>
              <option value="interTuition">ইন্টারমিডিয়েট টিউশন ফি</option>
              <option value="mastersTuition">অনার্স টিউশন ফি </option>
              <option value="honsTuition">মাস্টার্স টিউশন ফি </option>
            </select>
          </div>

          {formData.paymentType && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="text-lg font-semibold">
              পরিমান: Tk {paymentTypes[formData.paymentType]}
              </p>
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          type="submit"
          className="w-full  e py-2 rounded-md"
          onClick={handleSubmit}
        >
          Proceed to Payment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Fees;