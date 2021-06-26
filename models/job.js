const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Job = new Schema({
    name: {
        type: String, 
        required: true, 
    },
    id: {
        type: Number, 
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    client: {
        type: { 
            type: String, 
            enum: {
                values:['Residential', 'Commerical'],
                message: '{VALUE} is not supported.'
            },
            required: false,
        },
        name: { 
            type: String, 
            required: true, 
        },
        location: { 
            type: String, 
            required: true, 
        },
        phone: { 
            type: Number, 
            required: true, 
        },
        email: { 
            type: String, 
            required: true, 
        },        
    },
    notes: { 
        type: String, 
        required: false, 
    }
});



module.exports = mongoose.model('Jobs', Job);