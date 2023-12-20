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

const Book = require("./models/Book.js")
/**
 * Middleware
 */
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true})) // body parser

/**
 * Routes & Routers
 * 
 * INDUCES 
 */

// Index
app.get("/books", async (req, res) => {
    // Find the books
    let books = await Book.find({})
    res.render("index.ejs", {
        books: books.reverse()
    })
})

// New
app.get("/books/new", (req, res) => {
    // render the form to create a new book
    res.render("new.ejs")
})
// Delete

// Update

// Create
app.post("/books", async (req, res) => {
    // Change the completed value of our req.body
    if (req.body.completed === "on") {
        // if checked "on"
        req.body.completed = true
    } else {
        // if not checked undefined
        req.body.completed = false
    }

    // Create our new book
    let newBook = await Book.create(req.body)

    // Redirect back to the index route
    res.redirect("/books")
})

// Edit

// Show
app.get("/books/:id", async (req, res) => {
    // Find the one book
    let foundBook = await Book.findById(req.params.id)

    // render the found book
    res.render("show.ejs", {
        book: foundBook
    })
})

/**
 * Server Listener
 */
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))