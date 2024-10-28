import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize.js';
import Department from './Department.js';

const Schedule = sequelize.define('Schedule', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  departmentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Department,
      key: 'id'
    }
  },
  semester: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

export default Schedule;
