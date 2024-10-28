// components/ApplicantList.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminApplicantList = () => {
  const [applicants, setApplicants] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchApplicants = async () => {
      const response = await fetch('/api/admin/applicants');
      const data = await response.json();
      setApplicants(data);
    };
    fetchApplicants();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/applicants/${id}`, { method: 'DELETE' });
    setApplicants(applicants.filter((applicant) => applicant.id !== id));
  };

  return (
    <div>
      <h2>Applicants</h2>
      <button onClick={() => router.push('/admin/applicants/new')}>Add New Applicant</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Application Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.name}</td>
              <td>{applicant.email}</td>
              <td>{new Date(applicant.applicationDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => router.push(`/admin/applicants/${applicant.id}`)}>Edit</button>
                <button onClick={() => handleDelete(applicant.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminApplicantList;
