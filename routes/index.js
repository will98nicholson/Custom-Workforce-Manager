const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const jobRoutes = require('./api')
const path = require('path');

//
router.use('/auth', authRoutes);

//api routes
router.use('/api', jobRoutes);
//front end routes
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router;
