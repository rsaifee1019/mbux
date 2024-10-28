import sequelize from '../lib/sequelize.js';
import { DataTypes } from 'sequelize';

const Staff = sequelize.define('Staff', {
  indexNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  identityID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nationalID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  image: {
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
  educationalQualification: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  educationalBackground: {
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
  joiningDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  previousOrganization: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  previousDesignation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  previousJobJoinDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  previousJobResignDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
}, {
  tableName: 'staff',
  timestamps: false, // Disable timestamps if not required
});

export default Staff;
