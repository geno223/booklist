/**
 * Dependencies
 */
const mongoose = require('mongoose')

// Connect to our database
mongoose.connect(process.env.DATABASE_URL)

// Define our Database Connection Status
const db = mongoose.connection

// Callback events
db.on("error", (err) => console.log(err.message + 'houston we have a problem')) 
db.on("connected", () => console.log("mongo connected")) 
db.on("disconnected", () => console.log("mongo disconnected"))