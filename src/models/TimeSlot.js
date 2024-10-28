import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize.js';
import Schedule from './Schedule.js';
import Course from './Course.js';

const TimeSlot = sequelize.define('TimeSlot', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  scheduleId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Schedule',
      key: 'id'
    }
  },
  courseId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Course',
      key: 'id'
    }
  },
  dayOfWeek: {
    type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'),
    allowNull: false
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  room: {
    type: DataTypes.STRING,
    allowNull: false
  }
});



export default TimeSlot;