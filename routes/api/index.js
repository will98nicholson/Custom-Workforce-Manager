const router = require('express').Router();
const jobRoutes = require('./job');
const userRoutes = require('./user');

router.use('/jobs', jobRoutes);
router.use('/user', userRoutes);


module.exports = router