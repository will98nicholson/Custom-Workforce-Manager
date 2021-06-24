const router = require('express').Router();

// /api/jobs => find all jobs, create new job
router.route('/')
.get(jobsController.findall)
.post(jobsController.create)

// /api/jobs/:id => find/delete specific job (admin only)
router.route('/:id')
.get(jobsController.findById)
.delete(jobsController.remove)

// /api/jobs/:user => find jobs assigned to specific user (emp & admin)
router.route('/:user')
.get(jobsController.findByName)
.put(jobsController.update)

module.exports = router;