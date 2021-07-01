const express = require('express');
const cors = require("cors");
const placesRoute = require('./routes/places')

const server = express()
server.use(express.json())
server.use(cors())



server.use("/api/v1", placesRoute)



module.exports = server