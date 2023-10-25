const express = require('express');
const { loginController, registerController } = require('../controllers/userController');
const cors = require('cors')


const router =express.Router()




router.get('/')
router.post('/login', loginController)
router.post('/register', registerController)



module.exports =router