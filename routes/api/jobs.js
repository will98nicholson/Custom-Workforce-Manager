const isAdmin = require('../../utils/admin');

const router = require('express').Router();
const jobsController = require('../../controllers/jobsController')

// /api/jobs => find all jobs, create new job
router.route('/')
    .get(jobsController.findAll)
    .post(isAdmin, jobsController.create)

// /api/jobs/:id => find/delete specific job (admin only), update job (emp & admin)
router.route('/:id')
    .get(jobsController.findById)
    .delete(jobsController.remove)
    .put(jobsController.update)

// /api/jobs/:user => find jobs assigned to specific user (emp & admin)
router.route('/:user')
    .get(jobsController.findByName)

module.exports = router;
