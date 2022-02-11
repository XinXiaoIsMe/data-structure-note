const LinkedList = require('./LinkedList')
const Stack = require('./LinkedListStack')
const Queue = require('./LinkedListQueue')

// const list = new LinkedList()
// for (let i = 0; i < 4; i ++) {
//   list.addFirst(i)
// }
// console.log(list.toString())
// list.set(2, 99)
// console.log(list.toString())
// list.remove(2)
// console.log(list.toString())
// list.removeFirst()
// console.log(list.toString())
// list.removeLast()
// console.log(list.toString())

// const stack = new Stack()
// for (let i = 0; i < 5; i ++) {
//   stack.push(i)
//   console.log(stack.toString())
// }
// stack.pop()
// console.log(stack.toString())
// console.log(stack.peek())

const queue = new Queue()
for (let i = 0; i < 10; i ++) {
  queue.enqueue(i)
  console.log('enqueue: ', queue.toString())
  if (i % 3 === 0) {
    queue.dequeue()
    console.log('dequeue: ', queue.toString())
  }
}
console.log(queue.getFront())
