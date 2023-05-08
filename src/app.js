const express = require('express')
require("../src/databases/connection/mongodb")

const app = express()
const morgan = require('morgan')
const helmet = require("helmet");
const compression = require('compression')
// init middleware
app.use(morgan('dev'))
app.use(helmet());
app.use(compression())

const PORT = 1998


app.listen(PORT,() => {
    console.log(`App listening on port ${PORT}`)
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
module.exports = app
