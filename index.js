/**
 * Author: Md Sholayman
 * Description : The is the root folder for a nodeJS project.
 * Date:28 August,2023.
 */

//importing the modules

const http = require("http");



//creating the server

const server = http.createServer((req,res)=>{

    //route for home page
    if(req.url === "/"){
        res.write("This is Home Page.");
        res.end();
    }
    //route for about page
    else if(req.url === "/about"){
        res.write("This is About Page.");
        res.end();
    }
    //route for contact page
    else if(req.url === "/contact"){
        res.write("This is Contact Page.");
        res.end();
    }
    //route for about page
    else if(req.url === "/"){}


})


//listening to the server and consoling it.

server.listen(3000,()=>{
    console.log("Listening on port 3000");
})