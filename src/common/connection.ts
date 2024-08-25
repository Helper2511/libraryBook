import { Sequelize } from 'sequelize';
import { CONFIG } from '../config/vars';

const sequelize = new Sequelize(CONFIG['dbName'], CONFIG['dbUserName'], CONFIG['dbPassword'], {
  host: CONFIG['dbHost'],
  dialect: 'mysql',
});

export default sequelize;
