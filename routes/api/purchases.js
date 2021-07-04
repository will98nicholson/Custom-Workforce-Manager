const router = require('express').Router();
const purchaseController = require('../../controllers/purchaseController')

router.route('/')
    .get(purchaseController.findAllPos)
    .post(purchaseController.createPo)

router.route('/:id')
    .get(purchaseController.findPoById)
    .put(purchaseController.updatePo)

module.exports = router;