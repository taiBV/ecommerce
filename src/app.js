const express = require('express')
require("../src/databases/connection/mongodb")

const app = express()
const morgan = require('morgan')
const helmet = require("helmet");
const compression = require('compression')
// var bodyParser = require('body-parser')
// init middleware
app.use(morgan('dev'))
app.use(helmet());
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const PORT = 1998


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
// router
const routerApp = require('./routes')

// ...

app.use('/api', routerApp)

module.exports = app
