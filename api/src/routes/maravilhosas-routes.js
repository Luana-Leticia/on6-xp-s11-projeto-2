const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller');

//@route GET maravilhosas
//@desc Retornar todas as maravilhosas
//@access Public
//@endpoint http://localhost:porta/maravilhosas
router.get('/maravilhosas', controller.getMaravilhosas);

//@route GET maravilhosas
//@desc Retornar apenas uma única maravilhosa pelo id : identificador
//@params :id
//@access Public
//@endpoint http://localhost:porta/maravilhosas/:id
router.get('/maravilhosas/:id', controller.getMaravilhosaById);

//@route POST maravilhosa
//@desc Criar uma maravilhosa
//@access Public
//@endpoint http://localhost:porta/maravilhosas
router.post('/maravilhosas', controller.addMaravilhosa)

//@route PUT maravilhosa
//@desc Atualizar uma maravilhosa pelo id: identificador
//@params :id
//@access Public
//@endpoint http://localhost:porta/maravilhosas/:id
router.put('/maravilhosas/:id', controller.updateMaravilhosa)

//@route DELETE maravilhosa
//@desc Deletar apenas uma única maravilhosa pelo id : identificador
//@params :id
//access Public
//@endpoint http://localhost:porta/maravilhosas/:id
router.delete('/maravilhosas/:id', controller.deleteMaravilhosa)

module.exports = router;