import { NextResponse } from 'next/server';
import sequelize from "@/lib/sequelize";
import Applicant from '../../../models/Applicant'; // Import your Applicant model
import Payment from '../../../models/Payment';
import PersonalDetails from '@/models/PersonalDetails';


export async function POST(req) {
  try {
    const body = await req.json(); // Parse the incoming JSON body

    // Extract data from the request body
    const {
      subject,
      type,
      ssc_registration,
      nameInBengali,
      nameInEnglish,
      birthRegNo,
      mobile,
      dateOfBirth,
      nationality,
      religion,
      maritalStatus,
      fatherNameBengali,
      fatherNameEnglish,
      fatherNID,
      fatherMobile,
      motherNameBengali,
      motherNameEnglish,
      motherNID,
      motherMobile,
      permanentAddress,
      presentAddress,
      guardianName,
      guardianOccupation,
      guardianIncome,
      guardianMobile,
      sscBranch,
      sscBoard,
      sscRoll,
      sscYear,
      sscPassYear,
      sscGPA,
      sscInstituteName,
      sscInstituteAddress,
      subjectsA,
      subjectsB,
      fourthSubject,
      extraCurricularActivities,
      hobbies,
      socialServiceExperience,
      documents,
    } = body;


    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    const tran_id = `TXN${timestamp}${random}`;
    const application_date = new Date();

    // Create the new Applicant
    const newApplicant = await Applicant.create({
      ssc_registration,
      application_date,
      name_English: nameInEnglish,
      phone: mobile,
      status: 'unpaid', // Default status
    });

    // Create the new PersonalDetails entry
    const newPersonalDetails = await PersonalDetails.create({
      name_Bangla: nameInBengali,
      name_English: nameInEnglish,
      birth: dateOfBirth,
      religion,
      mobile,
      married: maritalStatus,
      fathers_Name_English: fatherNameEnglish,
      fathers_Name_Bangla: fatherNameBengali,
      fathers_Nid: fatherNID,
      fathers_Mobile: fatherMobile,
      mothers_Name_English: motherNameEnglish,
      mothers_Name_Bangla: motherNameBengali,
      mothers_Nid: motherNID,
      mothers_Mobile: motherMobile,
      address_Permanent: permanentAddress.village,
      district_Permanent: permanentAddress.district,
      zip_Permanent: permanentAddress.zip, // Assuming you have a zip field
      address_Current: presentAddress.village,
      district_Current: presentAddress.district,
      zip_Current: presentAddress.zip, // Assuming you have a zip field
      guardians_Name: guardianName,
      guardians_Monthly_Income: guardianIncome,
      guardians_Occupation: guardianOccupation,
      guardians_Mobile_Number: guardianMobile,
      subjectsA: JSON.stringify(subjectsA), // Store as JSON string if needed
      subjectsB: JSON.stringify(subjectsB), // Store as JSON string if needed
      fourthSubject,
      ssc_Section: sscBranch,
      ssc_Board: sscBoard,
      ssc_Roll: sscRoll,
      sss_Year: sscYear,
      sss_Year: sscPassYear,
      ssc_GPA: sscGPA,
      ssc_Institution_Name: sscInstituteName,
      ssc_Institution_Address: sscInstituteAddress.village, // Assuming you want to store village

      ssc_Institution_District: sscInstituteAddress.district,
      ssc_Institution_Village: sscInstituteAddress.village,
      extracurriculars: extraCurricularActivities,
      hobbies,
      social_Service: socialServiceExperience,
      ssc_Transcript: documents.sscTranscript,
      ssc_Certificate: documents.sscCertificate,
      ssc_Admit: documents.sscRegAndAdmitCard,
      image: '', // Placeholder for image, adjust as necessary
      birth_Certificate: '', // Placeholder for birth certificate, adjust as necessary
      fathers_Nid_Card: '', // Placeholder for father's NID card, adjust as necessary
      mothers_Nid_Card: '', // Placeholder for mother's NID card, adjust as necessary
    });

    // Associate PersonalDetails with Applicant
    await newApplicant.update({ personalDetailsId: newPersonalDetails.id });

    // Create the new Payment entry
    const newPayment = await Payment.create({
      applicantId: ssc_registration,
      transactionId: tran_id,
      status: 'unpaid', // Default status
      amount: 3350,
      userType: "applicant"
    });

    // Respond with the created applicant data
    return NextResponse.json({ tran_id, status: 201 });
  } catch (error) {
    console.error('Error creating applicant:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
