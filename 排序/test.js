const SelectionSort = require('./选择排序/SelectionSort')
const Male = require('./utils/Male')
const SortHelper = require('./utils/SortHelper')

// 选择排序
SortHelper.sortTest(SelectionSort, SortHelper.generateTestData(Male, 1000))
SortHelper.sortTest(SelectionSort, SortHelper.generateTestData(Male, 10000))
