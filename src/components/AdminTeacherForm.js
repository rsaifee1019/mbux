// components/TeacherForm.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const TeacherForm = ({ teacherId }) => {
  const [title, setTitle] = useState('');
  const [emailID, setEmailID] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (teacherId) {
      const fetchTeacher = async () => {
        const response = await fetch(`/api/teachers/${teacherId}`);
        const data = await response.json();
        setTitle(data.title);
        setEmailID(data.emailID);
      };
      fetchTeacher();
    }
  }, [teacherId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, emailID };
    const method = teacherId ? 'PUT' : 'POST';
    const url = teacherId ? `/api/teachers/${teacherId}` : '/api/teachers';
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    router.push('/admin/teachers');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{teacherId ? 'Edit' : 'Add New'} Teacher</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={emailID}
        onChange={(e) => setEmailID(e.target.value)}
        required
      />
      <button type="submit">{teacherId ? 'Update' : 'Create'} Teacher</button>
    </form>
  );
};

export default TeacherForm;
