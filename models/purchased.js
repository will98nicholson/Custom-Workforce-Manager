const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Purchased = new Schema({
    
    service_id: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    job_id: {
        type: String
        // required: true,
    }
}
);

module.exports = mongoose.model('Purchased', Purchased);

