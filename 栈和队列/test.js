const Student = require('./Student')
const Stack = require('./Stack')
const Queen = require('./Queen')
// const LoopQueue = require('./LoopQueen')
// const LoopQueue = require('./LoopQueenV2')
const LoopQueue = require('./LoopQueenV3')
const Deque = require('./Deque')

const s1 = new Student('Mike', 18)
const s2 = new Student('Jerry', 19)
const s3 = new Student('Tom', 17)

// const stack = new Stack()
// console.log(stack)
// stack.push(s1)
// stack.push(s2)
// stack.push(s3)
// console.log(stack)
// stack.pop()
// console.log(stack)
// console.log(stack.peek())
// console.log(stack.getCapacity(), stack.getSize())
// console.log(stack.toString())

// const queue = new Queen()
// queue.enqueue(s1)
// queue.enqueue(s2)
// queue.enqueue(s3)
// console.log(queue)
// queue.dequeue()
// console.log(queue, queue.getFront(), queue.isEmpty())
// queue.dequeue()
// queue.dequeue()
// console.log(queue, queue.isEmpty())

// const loopQueue = new LoopQueue()
// for (let i = 0; i < 10; i ++) {
//   loopQueue.enqueue(i)
//   console.log('[enqueue]: ', loopQueue.toString())
//   if (i > 0 && i % 3 === 0) {
//     loopQueue.dequeue()
//     console.log('[dequeue]: ', loopQueue.toString())
//   }
// }

const deque = new Deque()
for (let i = 0; i < 10; i ++) {
  if (i % 2 === 0) {
    deque.addFront(i)
    console.log('[addFront]: ', deque.toString())
  } else if (i % 3 === 0) {
    deque.removeFront()
    console.log('[removeFront]: ', deque.toString())
  } else if (i % 5 === 0) {
    deque.removeLast()
    console.log('[removeLast]: ', deque.toString())
  } else {
    deque.addLast(i)
    console.log('[addLast]: ', deque.toString())
  }
}
