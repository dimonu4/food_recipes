const express = require("express");
const app = express();

app.use("/", express.static("./"))

app.listen('3001', ()=>{
	console.log('server on port 3001');
})

app.get("/", (req,res)=>{
})

