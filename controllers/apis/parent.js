const express = require('express');
const parentService = require('../../services/parents/parent');

let router = express.Router();

router.get('/', parentService.getParents);

router.get('/:id', parentService.getParentById);

router.post('/', parentService.createParent);

router.put('/:id', parentService.updateParent);

router.delete('/:id', parentService.deleteParent);

module.exports = router;