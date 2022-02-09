class CustomArray {
  constructor (capacity = 10) {
    this.data = new Array(capacity)
    this.size = 0
  }

  getSize () {
    return this.size
  }

  getCapacity () {
    return this.data.length
  }

  get (index) {
    if (index < 0 || index >= this.size) throw new RangeError('Get failed. Required index > 0 and index < size')
    return this.data[index]
  }

  getLast () {
    return this.get(this.size - 1)
  }

  set (index, el) {
    if (index < 0 || index >= this.size) throw new RangeError('Get failed. Required index > 0 and index < size')
    this.data[index] = el
  }

  isEmpty () {
    return this.size === 0
  }

  contains (el) {
    for (let i = 0; i < this.size; i ++) {
      if (el.equals(this.data[i])) return true
    }
    return false
  }

  findIndex (el) {
    for (let i = 0; i < this.size; i ++) {
      if (el.equals(this.data[i])) return i
    }
    return -1
  }

  toString () {
    let str = `Array: size = ${ this.size }, capacity = ${ this.data.length }`
    if (this.size) {
      let i
      for (i = 0; i < this.size; i ++) str += ('\n' + this.data[i].toString())
    }
    return str
  }

  add (index, el) {
    if (index < 0 || index > this.size) throw new RangeError('Add failed. Required index > 0 and index < size')

    if (this.size === this.data.length) this.resize(this.size * 2)
    let size = this.size
    while (size > index) {
      this.data[size] = this.data[size - 1]
      size --
    }
    this.data[index] = el
    this.size ++
    return this.size
  }

  addFirst (el) {
    return this.add(0, el)
  }

  addLast (el) {
    return this.add(this.size, el)
  }

  remove (index) {
    if (index < 0 || index >= this.size) throw new RangeError('Delete failed. Required index > 0 and index < size')
    const delEl = this.data[index]
    for (let i = index; i < this.size - 1; i ++) this.data[i] = this.data[i + 1]
    this.size --
    this.data[this.size] = null
    if (this.size === Math.floor(this.data.length / 2)) this.resize(this.size)
    return delEl
  }

  removeFirst () {
    return this.remove(0)
  }

  removeLast () {
    return this.remove(this.size - 1)
  }

  removeElement (el) {
    const index = this.findIndex(el)
    if (index !== -1) this.remove(index)
  }

  resize (len) {
    const newData = new Array(len)
    for (let i = 0; i < this.size; i ++) newData[i] = this.data[i]
    this.data = newData
  }
}

module.exports = CustomArray
