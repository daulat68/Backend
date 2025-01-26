const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("this is root");
    res.render("home.ejs");
});

app.get("/ig/:username", (req,res) => {
    // const followers = ["adam", "bob", "steve", "abc"];
    let { username } = req.params;
    // res.render("instagram.ejs", {username,followers});
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(instaData);
    if(data) {
    res.render("instagram.ejs", { data: instaData[username] });
    }
    else{
        res.render("error.ejs")
    }
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6 + 1 )
    // res.render("rolldice.ejs", { num : diceVal });
    res.render("rolldice.ejs", {  diceVal });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

