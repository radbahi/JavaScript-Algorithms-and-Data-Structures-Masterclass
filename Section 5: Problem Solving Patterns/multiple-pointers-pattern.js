// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183942#notes

// naive solution. time complexity is O(n^2). space complexity is O(1).
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) { // nested loop
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

// refactored code. time complexity is O(n). space complexity = O(1)
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left, arr[right]]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}