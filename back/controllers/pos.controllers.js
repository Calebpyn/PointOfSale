const { pool } = require('../db/db')

//GET Methods

const dbTest = async (req, res, next) => {

    try {

        const qRes = await pool.query('SELECT * FROM pos_order')

        res.json(qRes.rows)

    } catch(err) {
        next(err)
    }

}

const getOrders = async (req, res, next) => {

    try {

        const qRes = await pool.query('SELECT * FROM pos_order ORDER BY id ASC LIMIT 3')

        res.json(qRes.rows)

    } catch(err) {
        next(err)
    }

}

module.exports = {
    dbTest,
    getOrders
}