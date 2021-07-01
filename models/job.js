const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Job = new Schema({
    // name: {
    //     type: String, 
    //     required: true, 
    // },
    // _id: {
    //     type: Number, 
    //     required: true, 
    // },
    // services_id: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'Service',
    //     required: true, 
    // },
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
        contact: { 
            type: String, 
            required: true, 
        },
        location: { 
            type: String, 
            required: true, 
        },
        phone: { 
            type: String, 
            required: true,
            // TODO: validator 
        },
        email: { 
            type: String, 
            required: true, 
            // TODO: validator
        },        
    },
    quote_date: {
        type: Date,
        required: true
    },
    quote_price: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },

    description: { 
        type: String, 
        required: false, 
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