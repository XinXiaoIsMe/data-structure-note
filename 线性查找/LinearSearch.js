class LinearSearch {
    constructor () {
        if (new.target) {
            throw new Error('不能使用 new 调用!')
        }
    }

    static search (data, target) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].equals(target)) return i
        }
        return -1
    }
}

module.exports = LinearSearch
