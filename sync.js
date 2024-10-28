import models from './src/models/index.js';
const { 
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
  TimeSlot 
} = models;

import sequelize from './src/lib/sequelize.js';

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully');
    
    await sequelize.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
})();