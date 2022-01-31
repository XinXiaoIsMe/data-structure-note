class Student {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  equals (student) {
    return student.name === this.name && student.age === this.age
  }

  toString () {
    return `name: ${ this.name }, age: ${ this.age }`
  }
}

module.exports = Student
