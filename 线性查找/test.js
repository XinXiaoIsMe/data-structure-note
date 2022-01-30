const LinearSearch = require('./LinearSearch')
const Student = require('./Student')

const data = [new Student('lisi'), new Student('zhangsan'), new Student('zhaoliu')]
const target = new Student('zhangsan')
console.log(LinearSearch.search(data, target))
