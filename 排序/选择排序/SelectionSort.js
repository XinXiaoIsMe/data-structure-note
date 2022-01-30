class SelectionSort {
  constructor () {
    if (new.target) throw new Error('this is a static class.')
  }

  static sort (list) {
    if (list.length < 2) return list

    for (let i = 0; i < list.length; i ++) {
      let minIndex = i
      for (let j = i + 1; j < list.length; j ++) {
        if (list[j].compareTo(list[minIndex]) < 0) minIndex = j
      }
      this._swap(list, minIndex, i)
    }

    return list
  }

  static reverseSort (list) {
    if (list.length < 2) return list

    for (let i = list.length - 1; i >= 0; i --) {
      let maxIndex = i
      for (let j = i - 1; j >= 0; j --) {
        if (list[j].compareTo(list[maxIndex]) > 0) maxIndex = j
      }
      this._swap(list, maxIndex, i)
    }

    return list
  }

  static _swap (list, i, j) {
    let temp = list[i]
    list[i] = list[j]
    list[j] = temp
  }
}

module.exports = SelectionSort
