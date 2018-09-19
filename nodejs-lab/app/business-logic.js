//app/business-logic.js
function describe(name, func) {
  console.log(`Runnin ${name}`);

return func();
 }

 module.exports.describe = describe;
