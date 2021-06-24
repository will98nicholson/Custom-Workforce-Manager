const db = require('../models');

module.exports = {
    findall: (req, res)=> {
        db.jobs.find(req.query)
        .then((data)=> {
            res.json(data)
        })
        .catch(err => console.log(err))
    },
    findById: (req, res)=> {
        db.jobs.find({_id: req.params.id})
        .then((data)=> {
            res.json(data)
        })
        .catch(err => console.log(err))
    }, 
    findByName: (req, res)=> {
        db.jobs.find(req.params.name)
        .then((data)=> {
            res.json(data)
        })
        .catch(err => console.log(err))
    },
    create: (req, res)=> {
        db.jobs.create(req.body)
        .then((data)=> {
            res.json(data)
        })
        .catch(err => console.log(err))
    }, 
    remove: (req, res)=> {
        db.jobs.findOneAndDelete({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    }, 
    update: (req, res)=> {
        db.jobs.findOneAndUpdate({_id: req.params.id})
        .then((data)=> {
            res.json(data)
        })
        .catch(err => console.log(err))
    },
}