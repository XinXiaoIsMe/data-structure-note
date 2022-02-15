class InsertionSort {
  static sort (list) {
    for (let i = 0; i < list.length; i ++) {
      for (let j = i; j > 0 && list[j].compareTo(list[j - 1]) < 0; j --)
        this._swap(list, j, j - 1)
    }
    return list
  }

  static betterSort (list, l = 0, r = list.length) {
    for (let i = l; i < r; i ++) {
      let t = list[i], j // 保存当前需要插入的元素下标
      for (j = i; j > l && t.compareTo(list[j - 1]) < 0; j --)
        list[j] = list[j - 1] // 当不是最终需要插入的位置时将元素向后平移一位
      // 寻找到最终位置后
      list[j] = t
    }
    return list
  }

  // 从后往前遍历
  static reverseSort (list) {
    for (let i = list.length - 1; i >= 0; i --) {
      let t = list[i], j
      for (j = i; j < list.length - 1 && t.compareTo(list[j + 1]) > 0; j ++)
        list[j] = list[j + 1]
      list[j] = t
    }
    return list
  }

  static _swap (list, i, j) {
    let temp = list[i]
    list[i] = list[j]
    list[j] = temp
  }
}

module.exports = InsertionSort
