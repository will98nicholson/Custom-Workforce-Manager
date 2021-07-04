const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serviceSchema = require('./service')

const Purchased = new Schema({

    items: [{
        service_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Service'
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    job_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Job',
    required: true,
}}
    );

module.exports = mongoose.model('Purchased', Purchased);

