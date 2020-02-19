const express = require('express');
const router = express.Router();
const userService = require("../controllers/user");
const auth = require("../middlewares/autentication");

//routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/token', auth, verifyToken);
router.get('/all', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Email or Password is invalid'}))
        .catch(err => next(err));
}

function verifyToken(req, res) {

    userService.verifyToken(req)
        .then(user => { res.json({ user })  })
        .catch(err => {
            console.error(err.message);
            res.status(500).send("Server error")
        })

}

function register(req, res, next) {

    userService.create(req.body)
        .then((token) => { res.json({ message: "Register Account Successfully", token: token }) })
        .catch( err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err))
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({message: "User has update successfully"}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.deleteUser(req.params.id)
        .then(() => res.json({ message: "User has been deleted." }))
        .catch(err => next(err))
}
