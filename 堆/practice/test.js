const MinHeap = require('./MinHeap')

const heap = new MinHeap()
const data = []
for (let i = 0; i < 10; i++) {
  const value = Math.round(Math.random() * 10)
  data.push(value)
  heap.add(value)
}
const ret = []
while (heap.size()) {
  const min = heap.extractMin()
  ret.push(min)
}
console.log(data, ret)