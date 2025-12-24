const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected!');
    } 
    catch(err) {
        console.log('Database connection failed');
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;