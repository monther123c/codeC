"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Optional:
//
// Write a function that takes an array and returns an array contains the running sum of the original array.

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

// Note that Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
let preVal=0;
let nextVal =0;
const runningSumOfArray = (arr) => {
  let runningSumArray=0;
for (i=0 ;i<arr.lenght-1;i++){
runningSumOfArray=arr[i]+arr[i+1]+runningSumArray;
}
  return runningSumArray;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Given an array of values use filter to extract odd values.
//
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200]
// Output:
// [89, 41, 31, 111, 31]
//

const oddFiltration = (arr) => {
    for(i=0;i<arr.length ;i++){
     return arr[i] % 2 !== 0;
    }
    };
// -------------------------------------------------------------------------------------------------------

module.exports = { runningSumOfArray, oddFiltration };