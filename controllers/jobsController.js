const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Job.find()
            .then((data) => {
                res.json(data)
            })
            .catch(err => console.log(err))
    },
    findById: ( req, res ) => {
        console.log( req.params );
        db.Job.find({ id: parseInt(req.params.id) }) //convert to string to get param
            .then((data) => {
                res.json(data)
            })
            .catch(err => console.log(err))
    },
    findByName: (req, res) => {
        db.Job.find(req.params.user)
            .then((data) => {
                res.json(data)
            })
            .catch(err => console.log(err))
    },
    create: (req, res) => {
        console.log('route hit')
        db.Job.create(req.body)
            .then((data) => {
                res.json(data)
            })
            .catch(err => console.log(err))
    },
    remove: (req, res) => {
        db.Job.findOneAndDelete({ id: req.params.id })
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    update: (req, res) => {
        db.Job.findOneAndUpdate({ id: req.params.id }, req.body)
            .then((data) => res.json(data))
            .catch(err => console.log(err))
    },
}
