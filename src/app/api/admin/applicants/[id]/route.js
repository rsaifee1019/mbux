import Applicant from '@/models/Applicant';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params; // Get the ID from the URL parameters

  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) return NextResponse.json({ message: 'Applicant not found' }, { status: 404 });
    return NextResponse.json(applicant, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to retrieve applicant', error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params; // Get the ID from the URL parameters
  const body = await req.json(); // Parse the request body

  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) return NextResponse.json({ message: 'Applicant not found' }, { status: 404 });
    await applicant.update(body);
    return NextResponse.json(applicant, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update applicant', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params; // Get the ID from the URL parameters

  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) return NextResponse.json({ message: 'Applicant not found' }, { status: 404 });
    await applicant.destroy();
    return NextResponse.json({ message: 'Applicant deleted successfully' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to delete applicant', error: error.message }, { status: 500 });
  }
}
