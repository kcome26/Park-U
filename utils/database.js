import { Sequelize } from 'sequelize';
//const Sequelize = require('sequelize').Sequelize;
//const { Sequelize } = require('sequelize');
/*pass your info in arguments(1st argument: database_name, 2nd: user name, 3rd: local DB password)*/

/*
Database must be structured as:

CREATE TABLE `login_service` (
  `user_id` int unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`))   

  Using MySQL. You can use another DB, and other attributes, variable names but code must change too
*/
const sequelize = new Sequelize('logindb', 'root', 'dogg', {
    dialect: 'mysql',
    host: 'localhost', 
    port: 3306,
    pool: {
      max: 15,
      min: 5,
      idle: 20000,
      evict: 15000,
      acquire: 30000
    },
});
//module.exports = sequelize;
export default sequelize;
  //"type": "module",
/*
One important thing to note is, and I will probably try this, you can create a .env file and declare a variable, set that variable to your password.

By doing this, this file will never be uploaded to github, so your database password will never be exposed
*/