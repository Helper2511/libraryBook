import { Sequelize } from 'sequelize';

// Replace these with your actual database credentials
const sequelize = new Sequelize('libraryDb', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
