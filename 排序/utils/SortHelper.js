class SortHelper {
  constructor () {
    if (new.target) throw new Error('this is a static class.')
  }

  static isSorted (list) {
    for (let i = 1; i < list.length; i++) {
      if (list[i - 1].compareTo(list[i]) > 0) return false
    }
    return true
  }

  static sortTest (sortCtor, list) {
    const startTime = new Date().valueOf()
    sortCtor.sort(list)
    if (!this.isSorted(list)) throw new Error('this list is not sorted.')
    const endTime = new Date().valueOf()
    console.log(`time: ${(endTime - startTime) / 1000}ms`)
  }

  static generateTestData (ctor, len) {
    const generateRandomValue = (min, max) => min + Math.floor(Math.random() * (max - min + 1))
    const generateName = () => {
      let name = ''
      for (let i = 0; i < 4; i ++) {
        name += String.fromCharCode(generateRandomValue(97, 97 + 25))
      }
      return `${name[0].toUpperCase()}${name.slice(1)}`
    }
    return Array(len).fill().map((item, index) => new ctor(generateName(), index))
  }
}

module.exports = SortHelper
