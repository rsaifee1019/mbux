import sequelize from '../lib/sequelize.js';
import { DataTypes } from 'sequelize';

const Payment = sequelize.define('Payment', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  paymentType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    allowNull: true,
  },
  userType: {
    type: DataTypes.ENUM('applicant', 'student'),  // To distinguish between payment made by an applicant or student
    allowNull: true,
  },
  transactionId: {
    type: DataTypes.STRING,  // Optional payment gateway reference
    allowNull: true,
  },
    applicantId: {
    type: DataTypes.STRING, // Change to STRING to match ssc_registration type
    allowNull: true,         // Nullable because some payments will be from students
    references: {
      model: 'Applicants',
      key: 'ssc_registration',
    }
  },
  studentId: {
    type: DataTypes.INTEGER, // Foreign key for Student
    allowNull: true,         // Nullable because some payments will be from applicants
    references: {
      model: 'Students',
      key: 'id',
    }
  },
});

export default Payment;