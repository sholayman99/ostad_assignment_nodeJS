/**
 * Author: Md Sholayman
 * Description : The is the root folder for a nodeJS project where a server in running on
   port 3000 and inside the server there is some route .If we go on those routes we will see 
   different page with different output.
 * Date:28 August,2023.
 */

//importing core modules ===>(requirement-1)
const http = require("http"); 
const fs = require('fs');



//creating the server

const server = http.createServer((req,res)=>{

    //route for home page  ===>(requirement-5)
    if(req.url === "/"){
        res.write("This is Home Page.");
        res.end();
    }

    //route for about page ===>(requirement-6)
    else if(req.url === "/about"){
        res.write("This is About Page."); 
        res.end();
    }

    //route for contact page ===>(requirement-7)
    else if(req.url === "/contact"){
        res.write("This is Contact Page.");
        res.end();
    }

    //route for file write ===>(requirement-8)
    else if(req.url === "/file-write"){
        fs.writeFile("demo.txt","hello world",(err)=>{

            if(err){
                console.log(err);
                res.writeHead(400,{"Content-Type":"text/html"});
                res.write("Failed to write");
                res.end();
            }
            
            else{
                res.writeHead(200,{"Content-Type":"text/html"}); 
                res.write("File Written Successfully.");
                res.end();
            }

        });
    }
   


}

);


//listening to the server and consoling it===>(requirement-2,3,4)

server.listen(3000,()=>{
    console.log("Listening on port 3000");
})