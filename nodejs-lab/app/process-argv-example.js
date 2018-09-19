'use strict';


//Your custom command line args are available from index 2 and above

// ~/dev/nodejs-lab $
// ~/dev/nodejs-lab $ npm start foo bar

// > nodejs-lab@1.0.0 start /Users/patrik.bergman/dev/nodejs-lab
// > node index.js "foo" "bar"

// 0 -> /Users/patrik.bergman/.nvm/versions/node/v9.11.1/bin/node
// 1 -> /Users/patrik.bergman/dev/nodejs-lab/index.js
// 2 -> foo
// 3 -> bar

for (let j = 0; j < process.argv.length; j++) {  
    console.log(j + ' -> ' + (process.argv[j]));
}