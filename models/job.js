const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Job = new Schema({
    
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
            required: false,
        },
        location: {
            streetAddress:{
                type: String, 
                required: true, 
            },
            city: {
                type: String, 
                required: true, 
            },
            state:{
                type: String, 
                required: true, 
            },
            zipcode:{
                type: Number,
                required: true, 
            } 
        },
        phone: { 
            type: String, 
            required: true,
            // TODO: validator 
        },
        email: { 
            type: String, 
            required: true, 
            match: /.+\@.+\..+/,
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
    crewAssignedToo:{
        type: String,
        required: true,
        default: "Unassigned Jobs"
    },
    dailyPosition:{ 
        type: Number,
        required: false,
    },
    lastUpdated:{
        type: String,
        required: false,
    },
    assigned:{
        type: Boolean,
        default:false,
        required:true,
    },
    completed:{
        type: Boolean,
        default:false,
        required:true,
    },
    // purchased: [{
    //     type: mongoose.Schema.Types.ObjectId, ref: 'Purchased'
    // }]
    // clock:{
    // TODO: include a date and time for both clocking in and out
    // },
    // forms: {
    //     workOrderPath:{
    // TODO: Figure out how to save a file path to retrieve completed job / workorder forms
    //         type: string,
    //         required: false,
    //     },
    //  },
    //  services {
    //         services/products sold get appended here including, quantity, price
    //  }
},
{
    timestamps:true
});

// add user_id to pair jobs with employees
// use user_id / job_id to complete pdf form

module.exports = mongoose.model('Job', Job);