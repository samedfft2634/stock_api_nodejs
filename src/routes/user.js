'use strict'
/* __________________ User Router __________________ */
const router = require('express').Router();

const { isAdmin, isLogin } = require("../middlewares/permissions");
const {list, create, read, update, delete:deleteUser} = require('../controllers/user')

// URL: /users

router.route('/')
.get(isLogin, list)
.post(create)

router.route('/:id')
.get(isLogin, read)
.put(isLogin, update)
.patch(isLogin, update)
.delete(isAdmin, deleteUser)

module.exports = router