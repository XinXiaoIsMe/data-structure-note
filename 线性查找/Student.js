class Student {
    constructor (name) {
        this.name = name
    }

    equals (arg) {
        if (arg === this) return true

        if (arg == null) return false

        if (!(arg instanceof Student)) return false

        if (!arg.hasOwnProperty('name')) return false

        if (Object.keys(arg).length !== Object.keys(this)) return false

        return arg.name === this.name
    }
}

module.exports = Student
