const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const APIRoutes = require('./api');
const path = require('path');

//
router.use('/auth', authRoutes);

//api routes
router.use('/api', APIRoutes);

//front end routes
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

module.exports = router;
