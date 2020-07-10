// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344112#notes

function countDown(num) { // recursive solution
    if (num <= 0) {
        console.log("All done!")
        return
    }
    console.log(num)
    num--
    countDown(num)
}

function countDown(num) { // iterative solution
    for (let i = num; i > 0; i--) {
        console.log(i)
    }
    console.log("All done!")
}

