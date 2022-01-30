const SelectionSort = require('./选择排序/SelectionSort')
const InsertionSort = require('./插入排序/InsertionSort')
const Male = require('./utils/Male')
const SortHelper = require('./utils/SortHelper')

// 选择排序
// SortHelper.sortTest(SelectionSort, SortHelper.generateTestData(Male, 1000))
// SortHelper.sortTest(SelectionSort, SortHelper.generateTestData(Male, 10000))

// 插入排序
const males = SortHelper.generateTestData(Male, 10)
const sortedMales = InsertionSort.BetterInsertionSort([...males])
console.log(males, sortedMales)
