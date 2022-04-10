const MaxHeap = require('../../堆/MaxHeap_v1')

class HeapSort {
  constructor() { }

  static sort(list) {
    const maxHeap = new MaxHeap()
    list.forEach(item => maxHeap.add(item))
    for (let i = list.length - 1; i >= 0; i--) list[i] = maxHeap.extractMax()
  }

  // 利用heapify的思想实现堆排序（原地排序）
  static sort2(list) {
    if (list.length <= 1) return
    const length = list.length
    for (let i = Math.floor((length - 1) / 2); i >= 0; i--) {
      this.#siftDown(i, list, length)
    }
    for (let i = length - 1; i >= 0; i--) {
      [list[i], list[0]] = [list[0], list[i]]
      this.#siftDown(0, list, i)
    }
  }

  static #siftDown(k, data, n) {
    while (2 * (k + 1) - 1 < n) {
      let i = 2 * (k + 1) - 1
      if (i + 1 < n && data[i + 1] > data[i]) i = i + 1
      if (data[k] > data[i]) break
      [data[k], data[i]] = [data[i], data[k]]
      k = i
    }
  }
}

module.exports = HeapSort
