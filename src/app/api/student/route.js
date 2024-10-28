import { NextResponse } from 'next/server';
import sequelize from "@/lib/sequelize";
import Applicant from '../../../models/Applicant'; // Import your Applicant model
import Payment from '../../../models/Payment';
import PersonalDetails from '@/models/PersonalDetails';
import Student from '@/models/Student';


export async function POST(req) {

  const paymentTypes = {
    interTuition: 300,
    mastersTuition: 100,
    honsTuition: 100
  };

  try {
    const body = await req.json();
    
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    const tran_id = `TXN${timestamp}${random}`;

    const {studentId, department, batch, paymentType, phone, name} = body
    let student = await Student.findOne({where: {studentId}})
    if(!student){
      student = await Student.create({studentId, department, batch, paymentStatus: 'pending', phone, name})

    }
    const payment = await Payment.create({amount: paymentTypes[paymentType], transactionId: tran_id, userType: 'student', studentId: student.id, paymentType: paymentType })


return NextResponse.json({tran_id}, {status: 200})
   

    
    // Extract data from the request body
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
