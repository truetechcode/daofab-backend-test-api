const parentController = require('../../controllers/apis/parent');

const express = require('express');
let router = express.Router();


router.use('/parents', parentController);


module.exports = router;