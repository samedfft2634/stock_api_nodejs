'use strict'
/* __________________ Category Router __________________ */
const router = require('express').Router();

const { isAdmin, isStaff } = require("../middlewares/permissions");
const {list, create, read, update, delete:deleteCategory} = require('../controllers/category')

// URL: /categories

router.route('/')
.get(isStaff, list)
.post(isAdmin, create)

router.route('/:id')
.get(isStaff, read)
.put(isAdmin, update)
.patch(isAdmin, update)
.delete(isAdmin, deleteCategory)

module.exports = router