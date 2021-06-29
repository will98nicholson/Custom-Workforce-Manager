const isAdmin = require('../../utils/admin');

const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/:user')
    .get(userController.findCurrent)

module.exports = router;