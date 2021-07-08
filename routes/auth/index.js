const express = require('express');
const router = express.Router();
const db = require('../../models');
const passport = require('../../middleware/passport.js');
console.log(passport.authenticate('local'));
router.post('/login', passport.authenticate('local'), function (req, res) {
    console.log("User:" + req.user);
    // admin(req.user);
    // res.json(req.user);
    req.session.save((err) => {
        if (err) {
            return res.json(err).status(500);
        }
        res.json(req.user);
    });
    }
);

router.get('/user',
    function (req, res) {
        console.log(req.user);
        if (req.user) { res.json(req.user); }
        else { res.json(null); }

    }
);
// router.get('/login',
//     function (req, res) {
//         req.session.logged_in = true;
//         req.user;
//     }
// );

router.post('/register',
    function (req, res) {
        db.User.create(req.body)
            .then(userDoc => {
                console.log(userDoc);
                res.json(userDoc);
            })
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.json('logged out');
    });
});

module.exports = router;
