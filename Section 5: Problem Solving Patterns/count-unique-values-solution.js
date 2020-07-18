// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183948#notes

function countUniqueValues(arr) {
  // my solution that works
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < 1) {
    return 0;
  }
  let uniqueCounter = 1;
  let currentValue = arr[0];
  for (let index of arr) {
    if (index !== currentValue) {
      uniqueCounter++;
      currentValue = index;
    }
  }
  return uniqueCounter;
}

function countUniqueValues(arr) {
  // instructor's solution
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
