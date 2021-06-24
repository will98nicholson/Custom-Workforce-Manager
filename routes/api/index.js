const router = require('express').Router();
const jobRoutes = require('./jobs');

router.use('/jobs', jobRoutes)


module.exports = router