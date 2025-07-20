const express = require('express');
const roomController = require('../controllers/roomController')
const auth = require('../middleware/auth')
const router = express.Router();


router.post('/createRoom', auth.authenticateToken ,roomController.createRoom);



module.exports = router