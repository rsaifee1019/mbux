import sequelize from '../lib/sequelize.js';
import { DataTypes } from 'sequelize';

const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  uploadDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  nationalID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  religion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bloodGroup: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mobileNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emailID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  educationDegree: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  educationBackground: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  presentAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  permanentAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  maritalStatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fathersName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mothersName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'teachers',
  timestamps: false, // Disable timestamps if not required
});

export default Teacher;