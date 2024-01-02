/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.toLowerCase();
  string = string.replace(/[^a-zA-Z]/g, "");
  let reverse = string.split("").reverse().join("");
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] != reverse[i]) return false;
  }
  return true;
}

module.exports = isPalindrome;
