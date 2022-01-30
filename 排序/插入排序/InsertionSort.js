class InsertionSort {
  static InsertionSort (list) {
    for (let i = 0; i < list.length; i ++) {
      for (let j = i; j > 0 && list[j].compareTo(list[j - 1]) > 0; j --)
        this._swap(list, j, j - 1)
    }
    return list
  }

  static BetterInsertionSort (list) {
    for (let i = 0; i < list.length; i ++) {
      let t = list[i], j // 保存当前需要插入的元素下标
      for (j = i; j > 0 && t.compareTo(list[j - 1]) > 0; j --)
        list[j] = list[j - 1] // 当不是最终需要插入的位置时将元素向后平移一位
      // 寻找到最终位置后
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
