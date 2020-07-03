// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/9816152#notes

// naive solution. time complexity is 0(n^2)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) { // if not same length, obviously they can't be compared...
        return false // ...so immediately return false
    }
    for (let i = 0; i < arr1.length; i++) { // loop through
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // uses indexOf to get index of that value. remember arr2 contains squared values of arr1
        if (correctIndex === -1) { // -1 means there is no index with that value...
            return false // ... so return false
        }
        arr2.splice(correctIndex, 1) // removes 1 of correctIndex in arr2 to shorten the array and remove duplicates
    }
    return true // return true when done
}

// refactored. time complexity is O(n)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) { // if not same length, obviously they can't be compared...
        return false // ...so immediately return false
    }
    let frequencyCounter1 = {} // this counts frequency of individual values in the array
    let frequencyCounter2 = {} // this counts frequency of individual values in the array
    for (let val of arr1) { // for each value in arr1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 // add 1 to the already existing count of that value OR 0
    }
    for (let val of arr2) { // for each value in arr2
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 // add 1 to the already existing count of that value OR 0
    }
    for (let key in frequencyCounter1) { // for each key in frequencyCounter1
        if (!(key ** 2 in frequencyCounter2)) { // if that key * 2 is not in frequencyCounter2...
            return false // ...return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) { // if the count of each value in both arrays is not the same...
            return false // ...return false
        }
    }
    return true
}