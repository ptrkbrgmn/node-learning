const parse = require('date-fns/parse');
const addSeconds = require('date-fns/add_seconds')
const subSeconds = require('date-fns/sub_seconds')
¸
const isWithinRange = require('date-fns/is_within_range')

//From JSON
//indexed: "2018-06-04T14:42:32.496+02:00"

//parse will defer to Date constructor if string format is not supported by ISO 8601 
const now = parse(new Date());
console.log("now: %s", now);

const smokeTestStart = parse("2018-06-04T14:42:42.496+02:00");
const indexedTime =    parse("2018-06-04T14:42:42.483+02:00");
const result = isAfter(indexedTime, smokeTestStart) || isSameSecond(smokeTestStart, indexedTime);
//console.log(result);  

const smokeTestStartMinusOneSec = subSeconds(smokeTestStart, 1);
const smokeTestStartPlusOneSec = addSeconds(smokeTestStart, 1);
const result2 = isWithinRange(indexedTime, smokeTestStartMinusOneSec, smokeTestStartPlusOneSec);
//console.log(result2);
console.log("smokeTestStartMinusOneSec: %s", smokeTestStartMinusOneSec);
console.log("smokeTestStartPlusOneSec: %s", smokeTestStartPlusOneSec);
console.log("indexedTime: %s", indexedTime);

//My guess is that input string with time<zone data (+2.00) creates a UTC date
//and stores timezone internally. To get local date-time string use below:
//var strDate = "2018-06-04T14:42:32.496+02:00";
//To local time representation in native JS Date object:
//var ltzDate = (new Date(strDate)).toLocaleString();
//console.log(ltzDate);