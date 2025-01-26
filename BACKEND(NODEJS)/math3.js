const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
};

// we can do like this also
const _sum = 5;
export { _sum as sum };


export default obj;
// module.exports = 123;