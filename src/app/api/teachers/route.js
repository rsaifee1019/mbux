import { NextResponse } from 'next/server';

import Teacher from '@/models/Teacher';

export async function GET({ nextUrl }) {
  const url = nextUrl.clone();
  const page = parseInt(url.searchParams.get('page')) || 1; // Ensure page is an integer
  const limit = 10; // Number of items per page
  const offset = (page - 1) * limit;

  try {
    const teachers = await Teacher.findAll({
      offset,
      limit,
    });
    console.log(teachers);
    return NextResponse.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


