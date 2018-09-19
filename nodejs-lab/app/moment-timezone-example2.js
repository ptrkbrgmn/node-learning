const moment = require('moment-timezone');

var date = moment("Tue, 05 Jun 2018 13:26:19 GMT");
// var date = moment("2014-02-27T10:00:00");
const now = moment().tz("Europe/Stockholm");

console.log(date.isBefore(now))
console.log(now.isBefore(date))
