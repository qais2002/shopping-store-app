const express = require('express');
const router = new express.Router();
const auth = require('../middleware/authentication');
const User = require('../models/user');


// Signup User
router.post('/users/signup', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send();
    }
});

// Login User
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (err) {
        res.status(400).send();
    }
});


// Logging out user
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });

        await req.user.save();

        res.send();
    } catch (err) {
        res.status(500).send();
    }
});

// Logout all users
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];

        await req.user.save();

        res.send();
    } catch (err) {
        res.status(500).send();
    }
});

// Getting Users
router.get('/users/profile', auth, async (req, res) => {
    res.send(req.user);
});


// Update User
router.patch('/users/profile', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password'];
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
        return res.status(400).send({ error: 'Invalid property name!' });
    }

    try {
        // const user = await User.findById(req.params.id);

        updates.forEach((update) => req.user[update] = req.body[update]);

        await req.user.save();

        res.send(req.user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Deleting Users
router.delete('/users/profile', auth, async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user);
    } catch (err) {
        res.status(500).send();
    }
});



module.exports = router;