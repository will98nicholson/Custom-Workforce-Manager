const db = require('../models');

module.exports = {
    findAllPos: (req, res) => {
        db.Purchased.find()
            .then(data => res.json(data))
            .catch(error => console.log(error))
    },
    findPoById: (req, res) => {
        db.Purchased.find({ _id: req.params.id }).populate('service_id').populate('job_id').exec()
            .then(data => res.json(data))
            .catch(error => console.log(error))
    },
    findByJob: (req, res) => {
        db.Purchased.find({ job_id: req.params.jobid }).populate('service_id').populate('job_id').exec()
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    createPo: (req, res) => {
        console.log('route hit!')
        db.Purchased.create(req.body)
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    updatePo: (req, res) => {
        db.Purchased.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    delete: (req, res) => {
        db.Purchased.findByIdAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    deleteByJob: (req, res) => {
        db.Purchased.find({ job_id: req.params.jobid })
            .then(data => db.Purchased.deleteMany(data)
                .then(data2 => res.json(data2))
                .catch(err => console.log(err)))
            .catch(err => console.log(err))
    }
}