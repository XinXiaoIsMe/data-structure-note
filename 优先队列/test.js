const PriorityQueue = require('./PriorityQueue')
const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
console.log(arr)
console.log('-------------------------------------------------------------')
const queue = new PriorityQueue()
for (let i = 0; i < arr.length; i++) {
  queue.enqueue(arr[i])
}
while (queue.isEmpty() === false) console.log(queue.dequeue())