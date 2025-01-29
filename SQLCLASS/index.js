const { faker } = require('@faker-js/faker')
const mysql = require('mysql2')
const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require("method-override")

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'backend_app',
    password: 'root'
})

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//  ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//  ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), 
        faker.internet.email(),
        faker.internet.password(),
    ];
  }

let data = []
for (let i = 0; i < 100; i++) {
    data.push(getRandomUser())
}



app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try{
    connection.query(q, [data], (err, result) => {
        if(err) throw err;
        console.log(result)
        let count = result[0]["count(*)"]
        res.render("home.ejs", {count})
        // res.send("success")
        // res.send(result)
        // res.send(result[0])
        // console.log(result.length)
        // console.log(result[0])
        // console.log(result[1])
        }) 
} catch (err){
    console.log(err)
    res.send("some error in DB")
}

})

// SHOW ROUTE
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            // console.log(users)
            // res.send(users)
            res.render("showusers.ejs", {users: result})
            
            }) 
    } catch (err){
        console.log(err)
        res.send("some error in DB")
    }
})

// Edit Route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0]
            res.render("edit.ejs",{ user })
        })
    } catch (err){
        console.log(err)
        res.send("some error in DB")
    }
})

// UPDATE (DB) Route
app.patch("/user/:id", (req, res) =>{
    let { id } = req.params;
    let {password: formPass, username: newUsername} = req.body
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("Wrong password")
            }
            else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                })
            }
            // res.send(user);
            // res.render("edit.ejs", {user})
        })
    } catch (err){
        console.log(err)
        res.send("some error in DB")
    }
})

app.listen("8080", () => {
    console.log("server listening to port 8080")
})