// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/9816156#notes

function validAnagram(str1, str2) {
  // my solution which works
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    // if not same length, obviously they can't be compared...
    return false; // ...so immediately return false
  }
  let frequencyCounter1 = {}; // this counts frequency of individual letters in the array
  let frequencyCounter2 = {}; // this counts frequency of individual letters in the array
  for (let val of str1) {
    // for each letter in str1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // add 1 to the already existing count of that letter OR 0
  }
  for (let val of str2) {
    // for each letter in arr2
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; // add 1 to the already existing count of that letter OR 0
  }
  for (let key in frequencyCounter1) {
    // for each key in frequencyCounter1
    if (!(key in frequencyCounter2)) {
      // if that key * 2 is not in frequencyCounter2...
      return false; // ...return false
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      // if the count of each letter in both arrays is not the same...
      return false; // ...return false
    }
  }
  return true;
}

function validAnagram(first, second) {
  // instructor's solution, less code and more efficient
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or if letter is 0 then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
