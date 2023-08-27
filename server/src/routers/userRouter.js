const express = require('express');
const { createUser } = require('../controllers/userController');
const upload = require('../midlewars/imageUpload');

const userRouter = express.Router();


userRouter.post('/create-user', upload.single('image'), createUser);



module.exports = userRouter;