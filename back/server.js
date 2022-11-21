//Dependencies
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const port = 4000

const posRoutes = require('./routes/pos.routes')

//App settings

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(posRoutes)

//Error Manager

app.use((err, req, res, next) => {

    console.log(err)

    res.status(404).json({
        message: err
    })

})



app.listen(port, () => console.info(`Listening to port: ${port}`))