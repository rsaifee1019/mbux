// src/app/(routes)/checkout/page.js
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import FeeTable from "@/components/FeeTable"

export default function CheckoutPage() {
  const [payment, setPayment] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const tran_id = localStorage.getItem("tran_id");
        if (!tran_id) {
          setError('Transaction ID not found in localStorage');
          return;
        }
        
        const response = await fetch(`/api/info/${tran_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch payment details');
        }
        
        const data = await response.json();
        setPayment(data);
      } catch (err) {
        console.error('Error fetching payment:', err);
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  const payNow = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!payment?.payment?.amount || !payment?.payment?.transactionId) {
        throw new Error('Payment details are missing');
      }

      const response = await fetch("/api/init", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
       
          tran_id: payment.payment.transactionId
        }),
      });

      if (!response.ok) {
        throw new Error('Payment initialization failed');
      }

      const data = await response.json();

      if (data.GatewayPageURL) {
        window.location.href = data.GatewayPageURL;
      } else {
        throw new Error('No gateway URL received from payment service');
      }
    } catch (error) {
      console.error("Error during payment process:", error);
      setError(error.message || 'Payment initialization failed');
    } 
  };

  if (!payment && !error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <Image src="/spinner.svg" alt="loading" width={100} height={100} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto bg-red-50">
          <CardContent className="pt-6">
            <div className="text-center text-red-600">
              <p className="font-semibold">Error: {error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-red-600 hover:bg-red-700"
              >
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { payment: paymentDetails, applicant } = payment;
  const userType = paymentDetails.userType;
  const amount = paymentDetails.amount || "Not specified";

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>বিবিধ ফি</CardTitle>
        
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <h3 className="text-lg font-semibold">Payment Summary</h3>
            <div className="space-y-2">
              <p><strong>উদ্দেশ্য:</strong> {userType === "applicant" ? "ইন্টারমিডিয়েট ভর্তি" : "Student Fee Payment"}</p>
              <p><strong>পরিমান :</strong> {amount}</p>
              <p><strong>রিসিট নং:</strong> {paymentDetails.transactionId}</p>
            
            </div>

            <FeeTable />
            <Button 
              onClick={payNow} 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'অপেক্ষা করুন...' : 'জমা দিন '}
            </Button>
          </div>
        </CardContent>
      </Card>
     
    </div>
  )
}