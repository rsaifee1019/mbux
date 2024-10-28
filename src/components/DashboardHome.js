// components/DashboardHome.js
"use client"
import { useState } from 'react';
import AdminPaymentList from './AdminPaymentList';
import AdminApplicantList from './AdminApplicantList';
import AdminNoticeList from './AdminNoticeList';
import AdminTeacherList from './AdminTeacherList';

const DashboardHome = () => {
  const [activeSection, setActiveSection] = useState('applicants');

  const renderSection = () => {
    switch (activeSection) {
      case 'applicants':
        return <AdminApplicantList />;
      case 'notices':
        return <AdminNoticeList />;
      case 'teachers':
        return <AdminTeacherList />;
      case 'payments':
        return <AdminPaymentList />;
      default:
        return <AdminApplicantList />;
    }
  };

  return (
    <div style={styles.dashboardContainer}>
      <aside style={styles.sidebar}>
        <h2>Admin Dashboard</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <button onClick={() => setActiveSection('applicants')}>Applicants</button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => setActiveSection('notices')}>Notices</button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => setActiveSection('teachers')}>Teachers</button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => setActiveSection('payments')}>Payments</button>
          </li>
        </ul>
      </aside>

      <main style={styles.mainContent}>
        <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
        {renderSection()}
      </main>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    marginBottom: '15px',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
};

export default DashboardHome;
