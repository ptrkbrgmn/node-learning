const moment = require('moment-timezone');

/**
 * Unfortunately add() and subtract() modifies value of instance and returns
 * a new instance with the old value. Quite weird and not very functional.
 * 
 * DON'T USE Moment.js, it is mutable and causes bugs:
 * https://github.com/date-fns/date-fns/issues/275#issuecomment-264934189
 * 
 */
const now = moment();
const nowPlusOneSec = now.clone().add(1, "second");
const nowMinusOneSec = now.clone().subtract(1, "second");
console.log(now);
console.log(nowMinusOneSec);
console.log(nowPlusOneSec);

