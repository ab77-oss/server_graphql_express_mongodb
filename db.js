const mongoose = require("mongoose");
const colors = require('colors');
require('dotenv').config();

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.URI, {useNewUrlParser: true  });
    console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline.bold);

};

module.exports = connectDB