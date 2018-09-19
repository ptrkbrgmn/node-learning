"use strict";

const fs = require("fs");

function stats (file) {
  return new Promise(
    (resolve, reject) => {
      fs.stat(file, 
        (err, data) => {
          if (err) {
            return reject(err);
          }
          resolve(data);         
        }
      )
    }
  );
}

Promise.all([
  stats("app/resources/file1"),
  stats("app/resources/file2"),
  stats("app/resources/file3")
])
.then((data) => console.log(data))
.catch((err) => console.error(err));
