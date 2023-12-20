/**
 * Dependencies
 * 1. Packages
 * 2. Variables - App, PORT
 */
require("dotenv").config() // Access our .env variables
require("./config/db.js") // brings in our db connection
const express = require("express");
const morgan = require("morgan"); // logging
const app = express();
const { PORT = 3013 } = process.env;

/**
 * Middleware
 */
app.use(morgan("dev"))

/**
 * Routes & Routers
 * 
 * INDUCES 
 */

// Index

// New

// Delete

// Update

// Create

// Edit

// Show


/**
 * Server Listener
 */
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))