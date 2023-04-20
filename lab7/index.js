//node_modules

const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const MONGO = `mongodb+srv://root:${process.env.DB_PASSWORD}@lab7.kf5x3l4.mongodb.net/test`;

//modules
const studentRouter = require('./routes/student.js');
//
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use('/', studentRouter);

//start
const start = async () => {
    try {
        await mongoose.connect(MONGO, {
            useNewUrlParser: true
        });
        app.listen(PORT, () => {
            console.log(`Server is started at ${PORT}`);
        })
    } catch(e) {
        console.error(e);
    }
}

start();