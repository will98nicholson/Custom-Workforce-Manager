const router = require('express').Router();
const jobRoutes = require('./jobs');
const userRoutes = require('./user');
const serviceRoutes = require('./services');
const purchaseRoutes = require('./purchases');

router.use('/jobs', jobRoutes);
router.use('/user', userRoutes);
router.use('/services', serviceRoutes);
router.use('/purchases', purchaseRoutes)


module.exports = router
