// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183952#notes

function maxSubarraySum(arr, num) {
  // naive solution. time complexity = O(n^2)
  if (num > arr.length) {
    // obviously if the number is greater than the length then we can't calculate this
    return null;
  }
  let max = -Infinity; // set to -infinity in case the largest sum would still be a negative
  for (let i = 0; i < arr.length - num + 1; i++) {
    // i < arr.length - num + 1 to make sure the subarray's length doesn't go past the actual array's length
    let temp = 0; // stores our sum each loop
    for (let j = 0; j < num; j++) {
      // loops up to the num
      temp += arr[i + j]; // adds to the sum from each element in subarray
    }
    if (temp > max) {
      // if higher than previous max value...
      max = temp; // ...redefine it to be new max value
    }
  }
  return max;
}

function maxSubarraySum(arr, num) {
  // refactored. time complexity = O(n)
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    // obviously if the number is greater than the length then we can't calculate this
    return null;
  }
  for (let i = 0; i < num; i++) {
    // get an initial max value by just doing one subarray
    maxSum += arr[i]; // calculate it here
  }
  tempSum = maxSum; // make these the same value for now
  for (let i = num; i < arr.length; i++) {
    // let i = num to get the index at the end of the subarray and then continue onto end of whole array
    tempSum = tempSum - arr[i - num] + arr[i]; // continously move up the array by adding the first point of the array and the last point and subtract from tempSum
    maxSum = Math.max(maxSum, tempSum); // if tempSum ends up being bigger than maxSum, redefine it. if not, maxSum stays the same.
  }
  return maxSum;
}
