console.log("Hello World")

// process 
let args = process.argv;  // THIS CONTAINS TWO PATH, FIRST IS THE EXECUTABLE PATH FOR THE FILE , SECOND IS THE FILE PATH 

for(let i=0; i< args.length; i++){
    console.log("hello to ", args[i]);
}