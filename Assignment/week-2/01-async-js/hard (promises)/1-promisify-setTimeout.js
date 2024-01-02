/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let promiseP = new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
  return promiseP;
}

wait(2).then(function () {
  console.log("Promise resolved");
});

module.exports = wait;
