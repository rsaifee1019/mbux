// components/NoticeList.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminNoticeList = () => {
  const [notices, setNotices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNotices = async () => {
      const response = await fetch('/api/admin/notices');
      const data = await response.json();
      setNotices(data);
    };
    fetchNotices();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/notices/${id}`, { method: 'DELETE' });
    setNotices(notices.filter((notice) => notice.id !== id));
  };

  return (
    <div>
      <h2>Notices</h2>
      <button onClick={() => router.push('/admin/notices/new')}>Add New Notice</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date Uploaded</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr key={notice.id}>
              <td>{notice.title}</td>
              <td>{notice.description}</td>
              <td>{new Date(notice.dateUploaded).toLocaleDateString()}</td>
              <td>
                <button onClick={() => router.push(`/admin/notices/${notice.id}`)}>Edit</button>
                <button onClick={() => handleDelete(notice.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminNoticeList;
