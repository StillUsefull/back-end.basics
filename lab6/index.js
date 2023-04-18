//node_modules

const express = require('express');
const path = require('path')
require('dotenv').config();

//modules
const weatherRouter = require('./routes/weather.js');
const errorMiddleware = require('./middlewares/errorMiddleware.js');
//
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use('/', weatherRouter);
app.use(errorMiddleware); //error middleware must be last



//start
const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is started at ${PORT}`);
        })
    } catch(e) {
        console.error(e);
    }
}

start();