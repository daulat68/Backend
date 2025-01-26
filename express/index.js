
const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;  // 8080 , 3000 ---- THESE CAN BE USED FOR MAKING OUR CUSTOM SERVERS

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});


// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);

//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });
// });


app.get("/", (req,res) => {
    res.send("Hello, World , root3!");
});

app.get("/apple", (req,res) => {
    res.send("Hello, World Apple!");
});

app.get("/orange", (req,res) => {
    res.send("Hello, World Orange!");
});

// app.get("*", (req, res) => {
//     res.send("this doesn't exist");
// });   
// THIS IS CREATED IF THE USER ENTERS ANY VALUE THAT IS NOT PRESENT


app.post("/", (req, res) => {
    res.send("you sent a post request");
});


app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
});
// THIS IS CREATED IF THE USER ENTERS ANY VALUE THAT GETS STORED IN THE "USERNAME" VARIABLE


app.get("/search", (req, res) => {
    let {q} = req.query; 
    if(!q){
        req.send(`<h1>Nothing Searched</h1>`);
    }
    res.send(`<h1>These are the search results for query: ${q}</h1>`);
});