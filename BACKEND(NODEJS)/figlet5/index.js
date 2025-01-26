const figlet = require("figlet");
// WE DONT HAVE TO WRITE ./ IN OUR CODE BECAUSE FIGLET IS A PACKAGE

figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
}
console.log(data);
});
