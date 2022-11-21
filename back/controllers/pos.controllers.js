const { pool } = require('../db/db')
const router = require('../routes/pos.routes')

//GET Methods

const dbTest = async (req, res, next) => {

    try {

        const qRes = await pool.query('SELECT * FROM pos_order')

        res.json(qRes.rows)

    } catch (err) {
        next(err)
    }

}

const getOrders = async (req, res, next) => {

    try {

        const qRes = await pool.query('SELECT * FROM pos_order ORDER BY id ASC LIMIT 3')

        res.json(qRes.rows)

    } catch (err) {
        next(err)
    }

}

const getCatItems = async (req, res, next) => {

    try {

        const qRes = await pool.query('SELECT * FROM pos_prod ORDER BY prod_category ASC, id ASC')

        res.json(qRes.rows)

    } catch (err) {
        next(err)
    }

}

const getProdById = async (req, res, next) => {

    const { id } = req.params

    try {

        const qRes = await pool.query(`SELECT * FROM pos_prod WHERE id = ${id}`)

        res.json(qRes.rows[0])

    } catch (err) {
        next(err)
    }

}


//POST Methods

const newProduct = async (req, res, next) => {

    const body = req.body

    try {

        await pool.query(`INSERT INTO pos_prod (
            prod_name,
            prod_category,
            prod_subcat,
            prod_desc,
            prod_price,
            prod_comments
            ) VALUES (
                '${body.prod_name}',
                '${body.prod_category}',
                '${body.prod_subcat}',
                '${body.prod_desc}',
                '${body.prod_price}',
                '${body.prod_comments}'
            );`)

        req.json('OK')

    } catch (err) {
        next(err)
    }

}

//PUT Methods

const updateProd = async (req, res, next) => {

    const { id } = req.params

    const body = req.body

    try {

        await pool.query(`UPDATE pos_prod SET
            prod_name = '${body.prod_name}',
            prod_category = '${body.prod_category}',
            prod_subcat = '${body.prod_subcat}',
            prod_desc = '${body.prod_desc}',
            prod_price = '${body.prod_price}',
            prod_comments = '${body.prod_comments}'
            WHERE id = ${id}
        `)

        res.json('OK')

    } catch (err) {
        next(err)
    }

}


module.exports = {
    dbTest,
    getOrders,
    getCatItems,
    newProduct,
    getProdById,
    updateProd
}