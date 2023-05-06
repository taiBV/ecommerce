const app = require("./src/app")
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

// process.on('SIGINT', () => {
//     console.log('Received SIGINT. Press Control-D to exit.');
// });
