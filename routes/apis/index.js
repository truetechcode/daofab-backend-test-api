const parentController = require('../../controllers/apis/parent');

const express = require('express');
let router = express.Router();


router.use('/', parentController);


module.exports = router;