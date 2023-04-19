//node_modules

const express = require('express');
require('dotenv').config();

//modules
const studentRouter = require('./routes/student.js');
//
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use('/', studentRouter);

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