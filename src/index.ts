const express = require("express")
require("dotenv").config()

const PORT = process.env.PORT || 3001

const server = express();

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
    
})