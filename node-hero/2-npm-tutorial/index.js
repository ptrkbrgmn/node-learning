"use strict";

const _ = require("lodash");

const result = _.assign({"a": 1}, {"b": 1}, {"c": 1});

console.log(JSON.stringify(result, null, 2));