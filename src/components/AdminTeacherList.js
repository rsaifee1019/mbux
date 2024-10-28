// components/TeacherList.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminTeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await fetch('/api/admin/teachers');
      const data = await response.json();
      setTeachers(data);
    };
    fetchTeachers();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/teachers/${id}`, { method: 'DELETE' });
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div>
      <h2>Teachers</h2>
      <button onClick={() => router.push('/admin/teachers/new')}>Add New Teacher</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.title}</td>
              <td>{teacher.emailID}</td>
              <td>
                <button onClick={() => router.push(`/admin/teachers/${teacher.id}`)}>Edit</button>
                <button onClick={() => handleDelete(teacher.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTeacherList;
