const BST = require('./BST')

const arr = [4, 3, 5, 7, 1]
const tree = new BST()
arr.forEach(item => tree.add(item))
// arr.forEach(item => tree.add2(item))
// console.log(tree.contains(0))
// console.log(tree.contains2(9))
// console.log(tree.toString())
// tree.preOrder()
// console.log('---------------------------')
// tree.preOrder2()
// tree.inOrder()
// console.log('---------------------------')
// tree.inOrder2()
// tree.postOrder()
// console.log('---------------------------')
// tree.postOrder2()
// tree.removeMin()
// tree.removeMin()
tree.removeMax()
tree.removeMax()
tree.levelOrder()
