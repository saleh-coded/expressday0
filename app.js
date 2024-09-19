// npm init -y intialize my folder as node js
// npm i express
// app.js, 
    // change: "main": "app.js",
    // add: "start": "node app.js"
// npm start

const express = require("express"); // similar to import but for express
const app = express(); // to cearte my server, app is an instance of expressn
    
//routes
app.get("/", (request, response)=> {
    console.log("My Name");
    return response.json({message: "Saleh"});
});
    

    
// listen

app.listen(8000, () => {
    console.log("IT WORKS");    
});