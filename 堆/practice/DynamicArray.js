class DynamicArray {
  constructor (arg = 10) {
    if (Array.isArray(arg)) {
      this.data = [...arg]
      this.size = arg.length
    } else {
      this.data = new Array(arg)
      this.size = 0
    }
  }

  getSize () {
    return this.size
  }

  getCapacity () {
    return this.data.length
  }

  isEmpty () {
    return this.size === 0
  }

  get (index) {
    if (index < 0 || index >= this.size) throw new RangeError('Get failed. Required index > 0 and index < size')
    return this.data[index]
  }

  set (index, el) {
    if (index < 0 || index >= this.size) throw new RangeError('Get failed. Required index > 0 and index < size')
    this.data[index] = el
  }

  contains (el) {
    for (let i = 0; i < this.size; i ++) {
      if (el === this.data[i]) return true
    }
    return false
  }

  add (el, index) {
    if (index < 0 || index > this.size) throw new RangeError('Add failed. Required index >= 0 and index <= size')
    if (this.size === this.data.length) this.resize(this.size * 2)
    let size = this.size
    while (size > index) {
      this.data[size] = this.data[size - 1]
      size --
    }
    this.data[index] = el
    this.size ++
  }

  addLast (el) {
    this.add(el, this.size)
  }

  addFirst (el) {
    this.add(el, 0)
  }

  remove (index) {
    if (index < 0 || index > this.size) throw new RangeError('Remove failed. Required index >= 0 and index < size')
    if (this.size > 0 && this.size * 4 < this.data.length) this.resize(this.size * 2)
    const delEl = this.data[index]
    while (index < this.size) {
      this.data[index] = this.data[index + 1]
      index ++
    }
    this.size --
    return delEl
  }

  removeFirst () {
    return this.remove(0)
  }

  removeLast () {
    return this.remove(this.size - 1)
  }

  removeElement (el) {
    let i
    for (i = 0; i < this.size; i ++) {
      if (this.data[i] === el) break
    }
    if (i !== this.size) this.remove(i)
  }

  resize (size) {
    const newData = new Array(size)
    for (let i = 0; i < this.data.length; i ++) newData[i] = this.data[i]
    this.data = newData
  }

  swap (i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

module.exports = DynamicArray
