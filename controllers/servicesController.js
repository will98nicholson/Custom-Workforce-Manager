const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Service.find()
            .then((data) => {
                res.json(data)
            })
            .catch(err => console.log(err))
    }
}