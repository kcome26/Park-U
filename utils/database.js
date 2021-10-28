import { Sequelize } from 'sequelize';
//pass your password to local db in arguments 
const sequelize = new Sequelize('loginDB', 'root', 'YOURPASSWORDHERE', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;
