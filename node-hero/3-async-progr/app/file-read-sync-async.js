
//synchronuous example
// const fs = require('fs');
// let content;
// try {
//   content = fs.readFileSync("app/resources/hello.txt", "utf-8");
// } catch (ex) {
//   console.log(ex)
// }
// console.log(content);

/************************************/

//asynchronuous example
const fs = require("fs");

console.log("before reading a file block...");

fs.readFile(
  "app/resources/hello.txt", 
  "utf-8", 
  function (err, content) {
    if (err) {
      return console.log(err);
    }
    console.log(content)
  }
)

console.log("after reading a file block...");