const router = require('express').Router();
const jobRoutes = require('./jobs');
const userRoutes = require('./user');
const serviceRoutes = require('./services');

router.use('/jobs', jobRoutes);
router.use('/user', userRoutes);
router.use('/services', serviceRoutes);



module.exports = router
