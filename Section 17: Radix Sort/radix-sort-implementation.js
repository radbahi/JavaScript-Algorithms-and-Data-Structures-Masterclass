// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072116#notes

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}






// helper functions from last lesson
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
    if (num === 0) {
        return 1
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}