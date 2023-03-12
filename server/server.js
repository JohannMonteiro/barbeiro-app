require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const connectDB = require('./DBconn');

// Connectar com o banco de dados
connectDB();

mongoose.connection.once('open', () => {
    console.log('Conectado ao banco de dados');
});
