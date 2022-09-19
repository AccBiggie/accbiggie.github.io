//Connection with DataBase
const mongoose = require('mongoose');
const uri = "mongodb+srv:""";
const connectDataBase = ( ) => 
    {
        mongoose.connect(uri).then((data) => 
        {
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        }); 
    }
module.exports = connectDataBase;
