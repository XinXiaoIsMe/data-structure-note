const BST = require('./BST')

const arr = [4, 3, 5, 7, 1]
const tree = new BST()
arr.forEach(item => tree.add(item))
// arr.forEach(item => tree.add2(item))
// tree.preOrder()
// console.log(tree.contains(0))
// console.log(tree.contains2(9))
// console.log(tree.toString())
// tree.inOrder()
// tree.postOrder()
tree.perOrder2()
