const express = require("express")
const path = require('path')
const body = require("body-parser")

const host = '127.0.0.1'
const port = '3000'
const app = express()
app.use(express.static(__dirname + '/html'))
app.use(express.static(__dirname + '/css'))
//app.use(express.static(__dirname + '/css/index-style.css'))
//app.use(express.static(__dirname + '/css/enquiry-style.css'))

app.get("/" , (req ,res)=>{
	res.sendFile(path.join(__dirname + "/html/landing.html"))
	console.log("here running")
})

app.listen(port , ()=> {console.log(`running at ${port} and ${host}`)})