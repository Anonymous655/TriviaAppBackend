const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')
require('dotenv').config()


app.use(cors())    // to use CORS
app.use(express.json())  //  to use json as well


mongoose.connect(process.env.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database connected'))


app.use(routes)     // tells the server to use the routes in routes.js


app.listen(process.env.PORT, () => {
    console.log("The server is running ...")
})