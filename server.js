const express = require('express');

// This is how I should define the routes

const BookingRouter = ("./Routes/booking")


const app = express()

app.use(express.json())

// This how I should define the apis 



// server.use("/api/v1", authRoutes)
// server.use("/api/v1/users", userRoutes)


module.exports = server