class BinarySearch {
  constructor () {}

  static search (list, tar) {
    let l = 0
    let r = list.length
    while (l < r) {
      const m = l + ((r - l) >>> 1)
      if (tar > list[m]) l = m + 1
      else if (tar < list[m]) r = m
      else return m
    }
    return -1
  }
}

module.exports = BinarySearch
