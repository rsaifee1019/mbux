// src/app/api/init/route.js
import { NextResponse } from 'next/server';
import { SSLCommerzPayment } from '../lib/sslcommerz';
import Payment from '@/models/Payment';

export async function POST(req) {
  const body = await req.json();
  const { tran_id } = body;
  
  // Log the transaction ID for debugging
  console.log('Transaction ID:', tran_id);

  // Check if payment exists
  const payment = await Payment.findOne({ where: { transactionId: tran_id } });
  
  // Log the payment object for debugging
  console.log('Payment object:', payment);

  // Check if payment is found
  if (!payment) {
    return NextResponse.json({ error: 'Reciept not found' }, { status: 404 });
  }

  // Ensure payment has the expected structure
  const amount = payment.amount;
  const name = payment.userType === 'student' && payment.student ? payment.student.name : payment.applicant ? payment.applicant.name : 'Unknown';
  const phone = payment.userType === 'student' && payment.student ? payment.student.phone : payment.applicant ? payment.applicant.phone : 'Unknown';

  try {
      const data = {
        store_id: 'mbhecedubdlive',
      store_passwd: '6718DA76AEE2031208',
      total_amount: amount,
      currency: 'BDT',
      tran_id,
      success_url: 'www.mbhec.edu.bd/api/success',
      fail_url: 'www.mbhec.edu.bd/api/fail',
      cancel_url: 'www.mbhec.edu.bd/api/cancel',
      ipn_url: 'www.mbhec.edu.bd/api/ipn',
      shipping_method: 'NO',
      product_name: 'N/A',
      product_category: 'N/A',
      product_profile: 'non-physical-goods',
      cus_name: name,
      cus_email: 'N/A',
      cus_add1: 'N/A',
      cus_city: 'N/A',
      cus_state: 'N/A',
      cus_postcode: 'N/A',
      cus_country: 'Bangladesh',
      cus_phone: phone
    };

    const sslcz = new SSLCommerzPayment(
      'mbhecedubdlive',
      '6718DA76AEE2031208',
      true
    );

    const apiResponse = await sslcz.init(data);
 

    if (apiResponse?.GatewayPageURL) {
      return NextResponse.json({ GatewayPageURL: apiResponse.GatewayPageURL });
    }

    return NextResponse.json(apiResponse, { status: 400 });
  } catch (error) {
    console.error('SSL Error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
