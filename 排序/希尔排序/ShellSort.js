class ShellSort {
  constructor () {}

  // static sort (list) {
  //   let h = list.length >>> 1
  //   while (h >= 1) {
  //     for (let i = h; i < list.length; i ++) {
  //       for (let j = i; j - h >= 0 && list[j].compareTo(list[j - h]) < 0; j -= h) {
  //         [list[j], list[j - h]] = [list[j - h], list[j]]
  //       }
  //     }
  //     h = h >>> 1
  //   }
  //   return list
  // }

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

  // static sort (list) {
  //   let h = list.length >>> 1
  //   while (h >= 1) {
  //     for (let start = 0; start < h; start ++) {
  //       // 对 [start + h, start + 2h, start + 3h ...] 进行插入排序
  //       for (let i = start + h; i < list.length; i += h) {
  //         let cur = list[i]
  //         let j
  //         for (j = i; j - h >= 0 && cur.compareTo(list[j - h]) < 0; j -= h) {
  //           list[j] = list[j - h]
  //         }
  //         list[j] = cur
  //       }
  //     }
  //     h = h >>> 1
  //   }
  //   return list
  // }

  // 对希尔排序进行优化 使 h 的取值为 1 4 7 ...
  static sort (list) {
    let h = 1
    while (h < list.length) h = 3 * h + 1
    while (h >= 1) {
      for (let i = h; i < list.length; i ++) {
        let cur = list[i]
        let j
        for (j = i; j - h >= 0 && cur.compareTo(list[j - h]) < 0; j -= h) {
          list[j] = list[j - h]
        }
        list[j] = cur
      }
      h = Math.floor(h / 3)
    }
    return list
  }
}

module.exports = ShellSort
