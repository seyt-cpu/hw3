require('dotenv').config() // load env variables


const express = require('express') // import express server
const app = express()
const port = 5433

const Pool = require("pg").Pool;
const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Middleware
app.use(express.json())

// GET
app.get('/', async (req, res) => {
    const result = await pool.query(`SELECT * FROM ${process.env.DB_TABLE}`)
    console.log("GET request successful:", result.rows)
    res.status(200).json(result.rows)
    
})

// POST
app.post('/createuser', async (req, res) => {
    const {name, url} = req.body;
    const result = await pool.query(`INSERT INTO ${process.env.DB_TABLE} (name, url) VALUES ($1, $2) RETURNING *`, [name, url])
    console.log("POST request successful:", result.rows[0]);
    res.status(201).json(result.rows[0]);
    
})


app.listen(port, () => {
    console.log(`Servive holding on http://localhost:${port}`)
})