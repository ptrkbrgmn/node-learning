"use strict";

//In reality I asume this would be an async function run in another thread by libuv.
//An http req for ex.
function doSomehthingOldStyle(successCallback, failureCallback) {
  console.log("It is done");
  if (Math.random() > 0.5) {
    successCallback("SUCCESS");
  } else {
    failureCallback("FAILURE");
  }
}

doSomehthingOldStyle(
    (result) => {
      console.log(`Succeded with ${result}`);
    },
    (error) => {
      console.log(`Failed with error ${error}`);
    }
  )
