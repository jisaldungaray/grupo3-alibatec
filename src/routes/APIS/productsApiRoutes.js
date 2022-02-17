const express = require('express');
const router = express.Router();

const productApiController = require('../../controllers/APIS/productsApiController');

router.get('/', productApiController.list);
router.get('/:id', productApiController.detail);
router.get('/create', productApiController.add);
router.post('/create', productApiController.create);
router.get('/update/:id', productApiController.edit);
router.put('/update/:id', productApiController.update);
router.delete('/delete/:id', productApiController.destroy)

module.exports = router;