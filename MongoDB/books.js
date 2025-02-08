const mongoose = require ('mongoose')

let url = "https://localhost:8080/users"

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res) => {
    console.log("Connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low"]
    },
    default: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['Fiction', 'Non-Fiction'],
    }
})

const Book= mongoose.model("Book", bookSchema)

// let book1= new Book({
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     price: 2099,
//     category: "Fiction"
// })

// book1.save().then((res)=> {
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// The validation rules were working only when inserting but not in update --> To we use {runValidators: true}
Book.findByIdAndUpdate("67a79e68b37f91cfb78d313f", {price: -600}, {runValidators: true}).then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err.errors.price.properties.message)
})