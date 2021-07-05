const db = require('../models');

module.exports = {
    findCurrent: (req, res) => {
        db.User.find({ _id: req.session.passport.user })
        .then((data) => {
            res.json(data)
        })
        .catch(err => console.log(err))
    },
    // findAll: (req, res) => {
    //     db.Job.find(req.query)
    //         .then((data) => {
    //             res.json(data)
    //         })
    //         .catch(err => console.log(err))
    // },
    // findById: (req, res) => {
    //     db.Job.find({ id: req.params.id })
    //         .then((data) => {
    //             res.json(data)
    //         })
    //         .catch(err => console.log(err))
    // },
    // findByName: (req, res) => {
    //     db.Job.find(req.params.name)
    //         .then((data) => {
    //             res.json(data)
    //         })
    //         .catch(err => console.log(err))
    // },
    // create: (req, res) => {
    //     db.Job.create(req.body)
    //         .then((data) => {
    //             res.json(data)
    //         })
    //         .catch(err => console.log(err))
    // },
    // remove: (req, res) => {
    //     db.Job.findOneAndDelete({ id: req.params.id })
    //         .then(data => res.json(data))
    //         .catch(err => console.log(err))
    // },
    // update: (req, res) => {
    //     db.Job.findOneAndUpdate({ id: req.params.id }, req.body)
    //         .then((data) => res.json(data))
    //         .catch(err => console.log(err))
    // }
}
