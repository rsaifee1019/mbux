 // lib/sequelize.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('natunpro_mbux', 'natunpro_mbux_admin', 'mbux_admin55', {
  host: 'bd08.exonhost.com', 
  dialect: 'mysql',
  dialectModule: require('mysql2'),

});

export default sequelize;
