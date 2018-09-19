const columnify = require("columnify");

const x = 5;

const data = {
  "commander@0.6.1": x,
  "minimatch@0.2.14": 3,
  "mkdirp@0.3.5": 2,
  "sigmund@1.0.0": 3
}; 
console.log(columnify(data));
