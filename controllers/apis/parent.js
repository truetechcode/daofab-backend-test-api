const express = require('express');
const parentService = require('../../services/parents/parent');

let router = express.Router();

router.get('/', parentService.getParents);

router.get('/:id', parentService.getParentById);

module.exports = router;