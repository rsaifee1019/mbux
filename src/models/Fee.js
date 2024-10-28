import sequelize from '../lib/sequelize.js';
import { DataTypes } from 'sequelize';

const Fee = sequelize.define('Fee', {
  type: {
    type: DataTypes.STRING,   // Type of fee (e.g., 'registration', 'tuition', 'sports', etc.)
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,    // Fee amount
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,     // Description of the fee (optional)
    allowNull: true,
  },
});

export default Fee;
