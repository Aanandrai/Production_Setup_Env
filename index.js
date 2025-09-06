const express=require("express")
const config = require("./config/index.js")

const app=express()


const port=config.get("port")


app.get("/",(req,res)=>{
    res.send("HIII")
})

app.listen(port)