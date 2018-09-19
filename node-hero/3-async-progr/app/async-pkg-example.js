const async = require("async");
const fs = require("fs");

async.map(["app/resources/file1", "app/resources/file2", "app/resources/file3"], 
  fs.stat, 
  (err, results) => {
  //results is now an array of stats for each file
  results.forEach(function(element) {
    console.log(element);
  });
  }
);