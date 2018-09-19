const superagent = require("superagent");
const moment = require("moment-timezone");
const sleep = require("system-sleep");
const NUM_RETRIES = 3;
const url = "http://lab.elasticsearch-nav-content.service.elastx.consul.dex.nu:9200/flow-raw/raw/epi.421368";
const smokeTestStartTime = moment().tz("Europe/Stockholm");

console.log("SMOKETEST_START_TIME: " + smokeTestStartTime.format())

request(url, 
  function(aMessage) {
    console.log(aMessage);
  }, 
  function(res) {
    const epiRawJson = res.body;
    const indexedTime = moment.tz(epiRawJson._source._meta._indexed, "Europe/Stockholm");
    console.log("INDEXED_TIME: " + indexedTime.format())
    return smokeTestStartTime.isBefore(indexedTime);
  }
);

function request(url, callback, shouldBeTrue) {
  _request(url, 0, callback, shouldBeTrue);
}

function _request(url, retriedCount, callback, shouldBeTrue) {
  superagent
    .get(url)
    .end(function(error, res) {
      if (!shouldBeTrue(res)) {
        if (retriedCount >= NUM_RETRIES) {
          return callback && callback("ERROR: Condition was not fullfilled after " + (retriedCount+1) + " attempts");
        }
        sleep(1000);
        return _request(url, retriedCount + 1, callback, shouldBeTrue);
      }
      callback("SUCCESS");
  });
}