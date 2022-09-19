//Connection with DataBase
const mongoose = require('mongoose');
const uri = "mongodb+srv://accbiggie:Fuckyeh1577@lojafetech.qidpcca.mongodb.net/?retryWrites=true&w=majority";
const connectDataBase = ( ) => 
    {
        mongoose.connect(uri).then((data) => 
        {
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        }); 
    }
module.exports = connectDataBase;