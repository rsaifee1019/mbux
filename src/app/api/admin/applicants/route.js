import Applicant from '@/models/Applicant';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
      const applicants = await Applicant.findAll();
      return NextResponse.json(applicants, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to retrieve applicants', error: error.message }, { status: 500 });
    }
  }
   export async function POST(req) {
    try {
      const newApplicant = await Applicant.create(req.body);
      return NextResponse.json(newApplicant, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to create applicant', error: error.message }, { status: 500 });
    }
  } 
