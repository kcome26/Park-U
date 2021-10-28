import { Sequelize } from 'sequelize';
//pass your info in arguments(1st argument: database_name, 2nd: user name, 3rd: local DB password) 
const sequelize = new Sequelize('loginDB', 'root', 'YOURPASSWORDHERE', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;
