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
        enum: {
            values: ["Administrator", "Employee"],
            message: "{VALUE} is not a valid user type."
        },
        required: true,
    },
    purchased: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Service'
    }
},
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        }
    }
);



module.exports = mongoose.model('User', User);