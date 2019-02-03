const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');


router.post('/register', (req, res) => {
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            return res.render('error', { message: err.message });
        }
    
        passport.authenticate('local')(req, res, () => {
            res.send(`Welcome on board, ${user.username}!`);
        })
    })
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(`Successful login, ${req.user.username}!`);
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.send('Successful logout');
});


module.exports = router;