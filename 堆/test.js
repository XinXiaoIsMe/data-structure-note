const MaxHeap = require('./MaxHeap_v1')

// const n = 100
// const maxHeap = new MaxHeap()
// for (let i = 0; i < n; i ++) maxHeap.add(Math.floor(Math.random() * i))
// const arr = []
// for (let i = 0; i < n; i ++) arr[i] = maxHeap.extractMax()
// for (let i = 0; i < n - 1; i ++) {
//   if (arr[i] < arr[i + 1]) throw new Error('Error')
// }
// console.log('Test MaxHeap completed.', arr)

console.log('-----------------------------')
// 测试 heapify
const len = 1000000
const arr = new Array(len).fill().map((item, index) => index)
console.time('add')
const heap1 = new MaxHeap()
arr.forEach(item => heap1.add(item))
console.timeEnd('add')
console.time('heapify')
const heap2 = new MaxHeap(arr)
console.timeEnd('heapify')
