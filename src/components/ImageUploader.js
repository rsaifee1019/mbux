// app/upload/page.js
'use client';
import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    setUploadResult(result);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>

      {uploadResult && (
        <div>
          <h4>Upload Result:</h4>
          <pre>{JSON.stringify(uploadResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
