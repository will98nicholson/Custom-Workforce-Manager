const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    username: { 
        type: String, 
        required: true, 
    },
    password: { 
        type: String, 
        required: true, 
    },
    type: {
        type: String,
        enum:{
            values: ["Administrator", "Employee"],
            message: "{VALUE} is not a valid user type."
        },
        required: true,
    }
});



module.exports = mongoose.model('Users', User);