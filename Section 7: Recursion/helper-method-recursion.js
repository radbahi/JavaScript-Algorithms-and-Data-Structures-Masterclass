// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/10046464#notes

function collectOddValues(arr) {
  let result = []; // this is defined outside to prevent it resetting to empty
  function helper(helperInput) {
    // this is just to show off a recursive helper method. obviously not the only way to do this.
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
