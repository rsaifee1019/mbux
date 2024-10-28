// app/api/upload/route.js
import { NextResponse } from 'next/server';
import AWS from 'aws-sdk';

export async function POST(request) {
  const formData = await request.formData();
  const imageFile = formData.get('image'); // Assume the file input is named 'image'

  if (!imageFile) {
    return NextResponse.json({ error: 'No image file provided' }, { status: 400 });
  }

  // Convert file to a buffer
  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Configure AWS S3 SDK for Cloudflare R2
  const s3 = new AWS.S3({
    endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
    region: process.env.CLOUDFLARE_REGION, // "auto" for automatic regions
    signatureVersion: 'v4',
  });

  // Generate a more unique filename
  const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(7)}-${imageFile.name}`;
  const params = {
    Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
    Key: uniqueFileName, // Use the generated unique filename
    Body: buffer,
    ContentType: imageFile.type, // Set the correct content type
  };

  try {
    const uploadResult = await s3.upload(params).promise();
    return NextResponse.json(uploadResult);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
