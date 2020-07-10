// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344110#notes

function sumRange(num) { // recursive solution. this function adds up all the numbers from the argument down to 1 together.
    if (num === 1) {
        return 1
    }
    return num + sumRange(num - 1)
}