const moment = require('moment-timezone');

const now = moment().tz("Europe/Stockholm");
const indexed = moment.tz("2018-05-31T15:55:48.328+02:00", "Europe/Stockholm");

console.log(indexed.isBefore(now))
console.log(now.isBefore(indexed))

// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a + b}.`);
// // "Fifteen is 15.