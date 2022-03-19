class ShellSort {
  constructor () {}

  static sort (list) {
    let h = list.length >>> 1
    while (h >= 1) {
      for (let i = h; i < list.length; i ++) {
        for (let j = i; j - h >= 0 && list[j].compareTo(list[j - h]) < 0; j -= h) {
          [list[j], list[j - h]] = [list[j - h], list[j]]
        }
      }
      h = h >>> 1
    }
    return list
  }

  // static sort (list) {
  //   let h = list.length >>> 1
  //   while (h >= 1) {
  //     for (let i = h; i < list.length; i ++) {
  //       let cur = list[i]
  //       let j = i
  //       for (; j - h >= 0 && cur.compareTo(list[j - h]) < 0; j -= h) {
  //         list[j] = list[j - h]
  //       }
  //       list[j] = cur
  //     }
  //     h = h >>> 1
  //   }
  //   return list
  // }
}

module.exports = ShellSort
