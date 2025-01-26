// const math = import("./math3"); // THIS REQUIRE VALUE FROM MATH3.JS
// require()-- a built-in function to include external modules that exists in separate files
//  module.exports-- a special object
import * as math from './math3.js';
console.log(math.sum(2,2));
console.log(math.PI);
console.log(math);

const info = require("./fruits4") // THIS IS REQUIRING A DIRECTORY(TAKING DATA FROM A DIRECTORY)
console.log(info);
console.log(info[0].name);
