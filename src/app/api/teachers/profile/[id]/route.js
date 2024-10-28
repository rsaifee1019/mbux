import Teacher from "@/models/Teacher";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { pathname } = new URL(request.url); // Get the full URL
    const id = pathname.split('/').pop(); // Extract the ID from the URL path
    console.log(`Received request for teacher profile with ID: ${id}`); // Log the ID

    try {
        const teacher = await Teacher.findByPk(id);
        
        if (!teacher) {
            console.log(`No teacher found with ID: ${id}`); // Log if no teacher is found
            return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
        }

        console.log(`Teacher found:`, teacher); // Log the found teacher data
        return NextResponse.json(teacher);
    } catch (error) {
        console.error('Error fetching teacher:', error); // Log any errors that occur
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}