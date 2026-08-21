// Given an integer number , return true if number is a palindrome, and false otherwise.

/**
 *
 * number should be zero or positive to check if it is a  palindrome.
 * converted the number into a string to reverse it.
 * split() method to separate the string into individual characters.
 * reverse() method to reverse the array of characters.
 * join() method to combine the characters back into a string.
 * compare the reversed string with the original value to check.
 *
 * Runtime -> 10ms
 *
 * Memory -> 65.43 MB
 *
 * */

const palindromeNumber = function (value) {
  if (value > -1) {
    value = value.toString();
    const valueRev = value.split("").reverse().join("");
    if (valueRev === value) {
      return true;
    }
  }
  return false;
};

console.log(palindromeNumber(121));
console.log(palindromeNumber(-121));
console.log(palindromeNumber(10));
