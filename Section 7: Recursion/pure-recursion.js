// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/10793654#notes

function collectOddValues(arr) {
  // pure recursive function
  let newArr = []; // its fine if this is getting reset with each function call because we concat all the arrays on line 14 anyway

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1))); // concat merges the separate arrays with single values in them all in one array
  return newArr; // remember that newArr constantly gets redefined at the top level which is how we get all the values together
}
