const MergeSort = require('./MergeSort_v2')
// const MergeSort = require('./BetterMergeSort')
const arr = [3, 2, 4, 1]
Number.prototype.compareTo = function (arg) {
  return this - arg
}

MergeSort.sort(arr)
console.log(arr)
