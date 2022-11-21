const { Router } = require('express')
const { dbTest, getOrders, getCatItems, newProduct, getProdById, updateProd } = require('../controllers/pos.controllers')
const router = new Router()

//GET

router.get('/', dbTest)
router.get('/pen-orders', getOrders)
router.get('/cat-items', getCatItems)
router.get('/get-prod/:id', getProdById)

//POST

router.post('/new-product', newProduct)

//PUT

router.put('/update-porduct/:id', updateProd)

module.exports = router
