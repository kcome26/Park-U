import { Sequelize } from 'sequelize';
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
const sequelize = new Sequelize('loginDB', 'root', 'YOURPASSWORDHERE', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;
/*
One important thing to note is, and I will probably try this, you can create a .env file and declare a variable, set that variable to your password.

By doing this, this file will never be uploaded to github, so your database password will never be exposed
*/