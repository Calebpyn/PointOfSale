const { Pool } = require('pg')
const { db } = require('../config')

//Creating the pool object

const pool = new Pool(db)

module.exports = {
    pool
}