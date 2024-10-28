import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize.js';
import Course from './Course.js';
import Schedule from './Schedule.js';

const Department = sequelize.define('Department', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});



 
export default Department;