"use client"
import { useEffect, useState } from "react";

export default function Faculty({ params }) {
    const { id } = params; // Get the ID from the URL parameters

    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        const fetchTeacher = async () => {
            const response = await fetch(`/api/teachers/profile/${id}`,{
                method: "GET",
            }); // Adjust the API endpoint as needed
            if (response.ok) {
                const data = await response.json();
                setTeacher(data);
            } else {
                console.error('Failed to fetch teacher data');
            }
        };

        fetchTeacher();
    }, [id]);

    if (!teacher) return <div>Loading...</div>;

    return (
        <div>
            <h1>Faculty Profile</h1>
            <h2>{teacher.title || "No Title"}</h2>
            <p>Designation: {teacher.designation || "No Designation"}</p>
            <p>Email: {teacher.emailID || "No Email"}</p>
            <p>Mobile No: {teacher.mobileNo || "No Mobile No"}</p>
            {/* Add more fields as needed */}
        </div>
    );
}