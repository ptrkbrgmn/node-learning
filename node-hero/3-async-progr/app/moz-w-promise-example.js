"use strict";

/**
 * Unlike old-style passed-in callbacks, a promise comes with some guarantees:
 * - Callbacks will never be called before the completion of the current run of the JavaScript event loop.
 * - Callbacks added with .then even after the success or failure of the asynchronous operation, will be called, as above.
 * - Multiple callbacks may be added by calling .then several times, to be executed independently in insertion order.
 */

//In reality I asume this would be an async function run in another thread by libuv? Or maye not, maybe automates setTimeOut?
function doSomething() {
  return new Promise(
    (resolve, reject) => {
      console.log("It is done");
      if (Math.random() > 0.5) {
        resolve("SUCCESS");
      } else {
        reject("FAILURE");
      }
    }
  );
};

//When calling doSomething() a new Promise is instantiated but it does not now the implementation of 'resolve' and 'reject'.
//The implementation of these are specifice when calling '.then()'
// doSomething().then(
//   (result) => {
//     console.log(`Succeded with ${result}`);
//   },
//   (error) => {
//     console.log(`Failed with error ${error}`);
//   } 
// )

/***********************/

//Trying to understand how things work. 

// const resolveCallback = (result) => {
//   console.log(`Succeeded with ${result}`);
// };

// const rejectCallback = (error) => {
//   console.log(`Failed with ${error}`);
// };

// new Promise(
//   (resolveCallback, rejectCallback) => {
//     console.log("It is done");
//     if (Math.random() > 0.5) {
//       resolveCallback("SUCCESS");
//     } else {
//       rejectCallback("FAILURE");
//     }
//   }
// ).catch(rejectCallback);

/***********************/

//Chanining

const successCallback = (result) => {
  console.log(`Succeeded with ${result}`);
};

const failureCallback = (error) => {
  console.log(`Failed with ${error}`);
};

const promise2 = doSomething().then(successCallback, failureCallback);

