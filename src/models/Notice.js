import sequelize from '../lib/sequelize.js';
import { DataTypes } from 'sequelize';

const Notice = sequelize.define('Notice', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
  title: {
    type: DataTypes.STRING,   // Title of the notice
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,     // Description of the notice (optional)
    allowNull: true,
  },

  link: {
    type: DataTypes.STRING,    // Link to the file (e.g., Word, PDF, etc.)
    allowNull: true,
  },

  dateUploaded: {
    type: DataTypes.DATE,      // Date the notice was uploaded
    allowNull: false,
    defaultValue: DataTypes.NOW, // Set default to current date
  },
}, {
  tableName: 'notices', // Specify the table name if different from the model name
  timestamps: false,     // Disable timestamps if not required
});

export default Notice;
