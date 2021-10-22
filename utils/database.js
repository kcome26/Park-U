import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB', 'root', 'July301994', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;