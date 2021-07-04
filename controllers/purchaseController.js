const db = require('../models');

module.exports = {
    findAllPos: (req, res) => {
        db.Purchased.find().populate('service_id').populate('job_id').exec()
        .then(data => res.json(data))
        .catch(error => console.log(error))
    },
    findPoById: (req, res) => {
        db.Purchased.find({_id: req.params.id}).populate('items').populate('job_id').exec()
        .then(data => res.json(data))
        .catch(error => console.log(error))
    },
    createPo: (req, res)=> {
        console.log('route hit!')
        db.Purchased.create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err))
    },
    updatePo: (req, res) => {
        db.Purchased.findOneAndUpdate({ _id: req.params.id}, req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err))
    }
}