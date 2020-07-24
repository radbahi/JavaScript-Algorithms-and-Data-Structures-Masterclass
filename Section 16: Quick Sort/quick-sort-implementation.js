// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072080#notes

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
    return arr;
  }
}
