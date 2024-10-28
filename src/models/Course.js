import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize.js';
import Department from './Department.js';
import TimeSlot from './TimeSlot.js';

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'bg-blue-50'
  },
  departmentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Department',
      key: 'id'
    }
  }
});


export default Course;