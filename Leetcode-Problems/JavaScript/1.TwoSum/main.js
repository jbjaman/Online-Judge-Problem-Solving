// Given an integer array and a target, return indices of two distinct numbers whose sum equals the target. Exactly one solutioon exists.

/**
 *
 * a. Brute Force Algorithm
 *
 * Runtime -> 34ms
 *
 * Memory -> 54.8 MB
 *
 */

let twoSum = function (arrOfNums, targetValue) {
  for (let i = 0; i < arrOfNums.length; i++) {
    for (let j = i + 1; j < arrOfNums.length; j++) {
      if (arrOfNums[i] + arrOfNums[j] === targetValue) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
