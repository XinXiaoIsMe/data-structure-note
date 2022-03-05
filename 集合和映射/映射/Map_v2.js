// 基于二分搜索树实现映射
class Node {
  constructor (key = null, value = null) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}

class Map {
  constructor () {
    this.root = null
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  getNode (key) {
    return this._getNode(this.root, key)
  }

  _getNode (node, key) {
    if (node === null) return null
    if (node.key === key) return node
    else if (node.key > key) return this._getNode(node.left, key)
    else return this._getNode(node.right, key)
  }

  contains (key) {
    return this.getNode(key) !== null
  }

  get (key) {
    const node = this.getNode(key)
    return node === null ? null : node.value
  }

  set (key, value) {
    const node = this.getNode(key)
    if (node === null) {
      throw new Error(key + ' doesn\'n exist!')
    } else {
      node.value = value
    }
  }

  add (key, value) {
    this.root = this._add(this.root, key, value)
  }

  _add (node, key, value) {
    if (node === null) {
      this.size ++
      return new Node(key, value)
    }

    if (node.key > key) node.left = this._add(node.left, key, value)
    else if (node.key < key) node.right = this._add(node.right, key, value)
    else node.value = value

    return node
  }

  minimum () {
    if (this.size === 0) throw new RangeError('Map is empty!')
    return this._minimum(this.root)
  }

  _minimum (node) {
    if (node.left === null) return node
    this._minimum(node.left)
  }

  removeMin () {
    const min = this.minimum()
    this.root = this._removeMin(this.root)
    this.size --
    return min
  }

  _removeMin (node) {
    if (node.left === null) {
      const right = node.right
      node.right = null
      return right
    }

    node.left = this._removeMin(node.left)
    return node
  }

  remove (key) {
    const node = this.getNode(key)
    this.root = this._remove(this.root, key)
    return node
  }

  _remove (node, key) {
    if (node === null) return null
    if (node.key > key) {
      node.left = this._remove(node.left, key)
      return node
    } else if (node.key < key) {
      node.right = this._remove(node.right, key)
      return node
    }

    if (node.left === null) {
      const right = node.right
      node.right = null
      this.size --
      return right
    }

    if (node.right === null) {
      const left = node.left
      node.left = null
      this.size --
      return left
    }

    const successor = this._minimum(node.right)
    successor.right = this._removeMin(node.right)
    successor.left = node.left
    node.left = node.right = null
    return successor
  }
}

module.exports = Map
