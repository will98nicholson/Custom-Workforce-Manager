const isAdmin = require('../../utils/admin');
const router = require('express').Router();
const servicesController = require('../../controllers/servicesController')

router.route('/')
    .get(servicesController.findAll)

// router.route('/:id')
//     .get(servicesController.findById)
//     .delete(isAdmin, servicesController.remove)
//     .put(isAdmin, servicesController.update)

module.exports = router;