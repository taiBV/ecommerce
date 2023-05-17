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
const helper = require("../src/utils/AuthHelper")
const {APIError} = require("./core/handleError");
// const {ErrorHandler} = require("./core/handleError");

// middleware
app.use(helper.verifyApiKey);

app.use('/api', helper.checkPermission,routerApp)

// handle error
app.use((req, res, next) => {
    // Xử lý lỗi theo ý muốn của bạn
    const err = new Error("API eROR")
    err.status = 500
    // Phản hồi lại lỗi cho client
    next(err)
});
app.use((err, req, res, next) => {
    // Xử lý lỗi theo ý muốn của bạn
    // console.error(err);

    const statusCode = err.statusCode || 500
    // Phản hồi lại lỗi cho client
    return res.status(statusCode).json({
        statusCode: statusCode,
        message: err.message || "Service Error !",
        data: err.data || null
    })
});
module.exports = app
