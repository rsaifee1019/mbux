import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize.js';
import Student from './Student.js';
import PersonalDetails from './PersonalDetails.js';

const Applicant = sequelize.define('Applicant', {
  ssc_registration: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name_English: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  application_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('unpaid','pending', 'accepted', 'rejected'),
    defaultValue: 'unpaid',
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },

});

// Define the foreign key relationship with PersonalDetails
Applicant.belongsTo(PersonalDetails, {
  foreignKey: 'personalDetailsId', // This will add the foreign key in Applicant table
});

export default Applicant;
