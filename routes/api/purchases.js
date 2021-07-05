const router = require('express').Router();
const purchaseController = require('../../controllers/purchaseController')

router.route('/')
    .get(purchaseController.findAllPos)
    .post(purchaseController.createPo)

router.route('/:id')
    .get(purchaseController.findPoById)
    .put(purchaseController.updatePo)
    .delete(purchaseController.delete)

router.route('/:jobid')
    .get(purchaseController.findByJob)
    .delete(purchaseController.deleteByJob)

module.exports = router;