const MaxHeap = require('../../堆/MaxHeap_v1')

class HeapSort {
  constructor () {}

  static sort (list) {
    const maxHeap = new MaxHeap()
    list.forEach(item => maxHeap.add(item))
    for (let i = list.length - 1; i >= 0; i --) list[i] = maxHeap.extractMax()
  }
}

module.exports = HeapSort
