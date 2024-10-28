// components/PaymentList.js
import { useEffect, useState } from 'react';

const AdminPaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const response = await fetch('/api/admin/payments');
      const data = await response.json();
      setPayments(data);
    };
    fetchPayments();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/payments/${id}`, { method: 'DELETE' });
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  return (
    <div>
      <h2>Payment Records</h2>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Payment Date</th>
            <th>Status</th>
            <th>User Type</th>
            <th>Transaction ID</th>
            <th>Applicant ID</th>
            <th>Student ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.amount}</td>
              <td>{new Date(payment.paymentDate).toLocaleDateString()}</td>
              <td>{payment.status}</td>
              <td>{payment.userType}</td>
              <td>{payment.transactionId || 'N/A'}</td>
              <td>{payment.applicantId || 'N/A'}</td>
              <td>{payment.studentId || 'N/A'}</td>
              <td>
                <button onClick={() => handleDelete(payment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPaymentList;
