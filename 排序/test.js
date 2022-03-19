const SelectionSort = require('./选择排序/SelectionSort')
const InsertionSort = require('./插入排序/InsertionSort')
const ShellSort = require('./希尔排序/ShellSort')
const Male = require('./utils/Male')
const SortHelper = require('./utils/SortHelper')

// 选择排序
// SortHelper.sortTest(SelectionSort, SortHelper.generateTestData(Male, 1000))
// SortHelper.sortTest(SelectionSort, SortHelper.generateTestData(Male, 10000))

// 插入排序
// const males = SortHelper.generateTestData(Male, 10)
// const sortedMales = InsertionSort.reverseSort([...males])
// console.log(males, sortedMales)

// 希尔排序
SortHelper.sortTest(ShellSort, SortHelper.generateTestData(Male, 20))
