const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller');

// fazer a documentação
router.get('/maravilhosas', controller.getMaravilhosas);

// fazer a documentação
router.get('/maravilhosas/:id', controller.getMaravilhosaById);

// fazer a documentação
router.post('/maravilhosas', controller.addMaravilhosa)

// fazer a documentação
router.put('/maravilhosas/:id', controller.updateMaravilhosa)

// fazer a documentação
router.delete('/maravilhosas/:id', controller.deleteMaravilhosa)

module.exports = router;