const express = require('express');
const apiController = require('../controllers/api');

const router = express.Router();

router.get('/getPosts', apiController.getPosts);
router.get('/getMenuItems', apiController.getMenuItems);
router.post('/post', apiController.createPost);

module.exports = router;