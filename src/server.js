require("dotenv").config();
const express = require('express')
const cors = require('cors')
const mongodbConnect = require('./config/db')

const authController = require("./controllers/auth.controller") 

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("hello world!")
})
app.use("/auth", authController)

const port = process.env.PORT || 3001

module.exports = () => {
    app.listen(port, async () => {
        try {
            await mongodbConnect()
            console.log(`Server is running on the port ${port}`)
        } catch (error) {
            console.log({
                message: error.message,
                location: "server.js"
            })
        }
    })
}