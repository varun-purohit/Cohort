/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let promiseP = new Promise(function (resolve) {
    setTimeout(resolve, milliseconds);
  });
  return promiseP;
}

sleep(2000).then(function () {
  console.log("promise resolved");
});

module.exports = sleep;
