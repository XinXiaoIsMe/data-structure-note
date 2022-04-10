const MaxHeap = require('./MaxHeap.js')

class PriorityQueue {
  constructor() {
    this.heap = new MaxHeap()
  }

  isEmpty() {
    return this.heap.isEmpty()
  }

  getSize() {
    return this.heap.getSize()
  }

  getFront() {
    return this.heap.findMax()
  }

  enqueue(value) {
    this.heap.add(value)
  }

  dequeue() {
    return this.heap.extractMax()
  }
}

module.exports = PriorityQueue