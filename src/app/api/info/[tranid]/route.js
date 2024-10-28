import { NextResponse } from 'next/server';
import sequelize from "@/lib/sequelize";
import Applicant from '@/models/Applicant';
import Payment from '@/models/Payment';

export async function GET(req, { params }) {
  
  const { tranid } = params; // Ensure this matches the dynamic route name
 // Log the transaction ID
  
  if (!tranid) {
    return NextResponse.json({ error: 'Transaction ID is required' }, { status: 400 });
  }
  
  try {
    const payment = await Payment.findOne({ where: { transactionId: tranid } });
    const applicant = await Applicant.findOne({ where: { ssc_registration: payment.applicantId } });
    
    if (!payment) {
      return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
    }
    

    return NextResponse.json({ payment, applicant });
  } catch (error) {
  
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}