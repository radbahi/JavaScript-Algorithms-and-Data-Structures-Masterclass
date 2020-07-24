// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072016#notes

function mergeSort(arr) {
  if (arr.length <= 1) {
    // this is to eventually return the value once the arrays are cut up until there's only one element in it
    return arr;
  }
  let mid = Math.floor(arr.length / 2); // define a midpoint to cut the array in half
  let left = mergeSort(arr.slice(0, mid)); // recursively call to continue cutting down this half of the array
  let right = mergeSort(arr.slice(mid)); // recursively call to continue cutting down this half of the array

  return merge(left, right); // call the function below to now actually sort them
}

function merge(arr1, arr2) {
  // function from last lesson
  let results = [];
  let i = 0; // make a pointer for each array
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    // if these are both lesser than the arrays, do the loop
    if (arr2[j] >= arr1[i]) {
      // if one element in this array is less than or equal to the element in the other array...
      results.push(arr1[i]); // ...push onto results
      i++;
    } else {
      results.push(arr2[j]); // or push the other one
      j++;
    }
  }

  while (i < arr1.length) {
    // if the while loop above breaks due to an array being finished, see if this array still has more to go...
    results.push(arr1[i]); // ... then push the remainders
    i++;
  }

  while (j < arr1.length) {
    // ditto
    results.push(arr1[j]);
    j++;
  }

  return results;
}
