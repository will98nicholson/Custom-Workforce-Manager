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
                values:['Residential', 'Commercial'],
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
            // TODO: validator 
        },
        email: { 
            type: String, 
            required: true, 
            // TODO: validator
        },        
    },
    notes: { 
        type: String, 
        required: false, 
    },
//     clock:{
//          //TODO: include a date and time for both clocking in and out
//     },
//     forms: {
//         workOrderPath:{
//           //TODO: Figure out how to save a file path to retrieve completed job / workorder forms
//             type: string,
//             required: false,
//         },
//     }
});



module.exports = mongoose.model('Job', Job);