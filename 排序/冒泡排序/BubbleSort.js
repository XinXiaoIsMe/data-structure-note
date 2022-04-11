class BubbleSort {
  static sort(data) {
    for (let i = 0; i < data.length - 1; i++) {
      let isSwaped = false // 用于判断是否已经排好序
      for (let j = 0; j + 1 < data.length - i; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]]
          isSwaped = true
        }
      }
      if (!isSwaped) break
    }
  }

  // 优化版本 记录最后一次swap的时候的下标lastSwapedIndex，从lastSwapedIndex开始的元素已经有序了。因此只需要对
  // [0, lastSwapedIndex - 1]的元素进行排序即可.
  static sort2(data) {
    for (let i = 0; i < data.length - 1;) {
      let lastSwapedIndex = 0
      for (let j = 0; j + 1 < data.length - i; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]]
          lastSwapedIndex = j + 1
        }
      }
      i = data.length - lastSwapedIndex // 这里可以把i看作已经排好序的元素数量，例如： i = 0 表示有0个元素排好序，i = 1 表示有1个元素排好序，因此这里将i赋值为 data.length - lastSwapedIndex 表示有 data.length - lastSwapedIndex 已经排好序
    }
  }

  // 从后向前冒泡
  static sort3(data) {
    for (let i = 0; i < data.length - 1;) {
      let lastSwapedIndex = data.length - 1
      for (let j = data.length - 1; j - 1 >= i; j--) {
        if (data[j] < data[j - 1]) {
          [data[j], data[j - 1]] = [data[j - 1], data[j]]
          lastSwapedIndex = j - 1
        }
      }
      i = lastSwapedIndex + 1
    }
  }
}

module.exports = BubbleSort