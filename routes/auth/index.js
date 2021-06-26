const express = require('express');
const router = express.Router();
const db = require('../../models');
const passport = require('../../middleware/passport');

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        console.log(req.user);
        res.json(req.user);
    }
);


router.post('/register',
    function (req, res) {
        db.User.create(req.body)
        .then(userDoc => {
            console.log(userDoc);
            res.json(userDoc);
        })
   }
);

router.get('/logout',
    function (req, res) {
        req.logout;
        res.json({ msg: "logged out user" });
    }
);

router.get('/user',
    function (req, res) {
        console.log(req.user);
        res.json(req.user);
    }
);

module.exports = router;