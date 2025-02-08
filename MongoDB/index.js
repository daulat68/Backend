const mongoose = require ('mongoose')

let url = "https://localhost:8080/users"

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res) => {
    console.log("Connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema)
// const Employee = mongoose.model("Employee", userSchema)

// const User1 = new User({
//     name: "John",
//     email: "john@gmail.com",
//     age: 48
// })
// const User2 = new User({
//     name: "Johnyy",
//     email: "johnyy@gmail.com",
//     age: 49,
// })

// User1.save()
// User2.save()

// User.insertMany([
//     {name:"A", email:"A@gmail.com", age:50},
//     {name:"B", email:"B@gmail.com", age:30},

//     {name:"C", email:"C@gmail.com", age:20}
// ]).then((res) => {
//     console.log(res)
// })

// User.find({}).then((data) => {
//     console.log(data)
// })
// User.find({age:{$gt:40}}).then((data) => {
//     console.log(data)
// })
// User.findOne({age:{$gt:30}}).then((data) => {
//     console.log(data)
// })


// User.findById('67a7856dd3f98ec92faa7b33').then((data) => {
//     console.log(data)
// })

// User.updateOne({name:"B"},{age:56}).then((res) => {
//     console.log(res)
// }).catch((err)=> {
//     console.log(err)
// })


// User.findOneAndUpdate({name:"B"},{age:40}).then((res) => {
//     console.log(res)
// }).catch((err)=> {
//     console.log(err)
// })


// For getting new updated value in console
// User.findOneAndUpdate({name:"B"},{age:40},{new: true}).then((res) => {
//     console.log(res)
// }).catch((err)=> {
//     console.log(err)
// })


// User.deleteOne({name: "B"}).then((res)=> {
//     console.log(res)
// })

User.deleteMany({age:48}).then((res) => {
    console.log(res)
})


// For getting deleted collection value in console where id is same
User.findByIdAndDelete('67a7945').then((res) => {
    console.log(res)
})

// For getting deleted collection value in console where age is 48
User.findOneAndDelete({age:48}).then((res) => {
    console.log(res)
})

