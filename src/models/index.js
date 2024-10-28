   // src/models/index.js
   import Student from './Student.js';
   import Fee from './Fee.js';
   import Payment from './Payment.js';
   import Applicant from './Applicant.js';
   import PersonalDetails from './PersonalDetails.js';
   import Teacher from './Teacher.js';
   import Staff from './Staff.js';
   import { DataTypes } from 'sequelize';
   import sequelize from '../lib/sequelize.js';
   import Notice from './Notice.js';

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
      }
    });
    
    const Schedule = sequelize.define('Schedule', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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
    
    const TimeSlot = sequelize.define('TimeSlot', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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
    
    // Define relationships
    Department.hasMany(Course);
    Course.belongsTo(Department);
    
    Department.hasMany(Schedule);
    Schedule.belongsTo(Department);
    
    Schedule.hasMany(TimeSlot);
    TimeSlot.belongsTo(Schedule);
    
    Course.hasMany(TimeSlot);
    TimeSlot.belongsTo(Course);

   Payment.belongsTo(Applicant, { foreignKey: 'applicantId', allowNull: true });
   Applicant.hasMany(Payment, { foreignKey: 'applicantId' });

   Payment.belongsTo(Student, { foreignKey: 'studentId', allowNull: true });
   Student.hasMany(Payment, { foreignKey: 'studentId' });

   Payment.belongsTo(Fee, { foreignKey: 'feeId', allowNull: false });
   Fee.hasMany(Payment, { foreignKey: 'feeId' });

   // Ensure you are exporting the models correctly
   export default {
      Applicant,
      Student,
      Payment,
      Fee,
      PersonalDetails,
      Teacher,
      Staff,
      Department,
      Course,
      Schedule,
      TimeSlot,
      Notice
    };