const { Router } = require('express')
const { dbTest, getOrders } = require('../controllers/pos.controllers')
const router = new Router()

//GET

router.get('/', dbTest)
router.get('/pen-orders', getOrders)



module.exports = router
