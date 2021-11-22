import express from 'express';
import sequelize from '../utils/database.js';
import router from './routes/routes.js';
import cors from 'cors';

//const express = require("express");
//const cors = require("cors");
//const router = require("./routes/routes.js");
//const sequelize = require('./utils/database.js');
const app = express();


var corsOptions = {
    origin: "http://localhost:19001"
  };
  
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(router);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
sequelize.sync(); 

const PORT = process.env.PORT || 19000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
//app.listen(5000);