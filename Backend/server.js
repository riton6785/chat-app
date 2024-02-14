const express = require("express")
const chats = require("./data/data")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
var colors = require('colors')
const userRoutes = require('./routes/userRoutes')
const { notFound, erroHandler } = require("./middlewares/errorMiddleware")


dotenv.config()
connectDB()
const app = express()
app.use(express.json());
app.use("/api/user", userRoutes)
app.get("/api/chats",(req,res)=>{
    res.send(chats)
})

app.get("/",(req,res)=>{
    res.send("<h1>welcome here</h1>")
})

// single chat
app.get("/api/chats/:id",(req,res)=>{
    const singleChat = chats.find((c)=>req.params.id === c._id)
    res.send(singleChat)
})
app.use(notFound);
app.use(erroHandler);
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(process.env.PORT)
    console.log(`server is running on port ${5000}`.yellow.bold)
})

