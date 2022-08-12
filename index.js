const express = require('express')
const app = express()
const router = require('./router')

const PORT = process.env.PORT || 5000

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Orders API Routes
app.use('/orders', router)

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})