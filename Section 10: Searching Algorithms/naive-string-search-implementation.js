// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11162778#notes

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    // index counter for long string to compare letter to short string
    for (let j = 0; j < short.length; j++) {
      // index counter for short string to compare letter to long string
      if (short[j] !== long[i + j]) {
        // if the two letters do not match...
        console.log("BREAK!");
        break; // ...break out of this loop and move onto the next loop for long
      }
      if (j == short.length - 1) {
        // if all letters match up to the last one...
        console.log("FOUND ONE!");
        count++; // ...count it
      }
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");
