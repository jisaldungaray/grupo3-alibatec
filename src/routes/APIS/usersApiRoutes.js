const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/APIS/usersApiController')

router.get('/', usersApiController.userList)
router.get('/:id', usersApiController.detail)

module.exports = router