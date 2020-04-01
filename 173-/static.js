class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    sayHello(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }

    static isStudent(obj){
        return obj.constructor === Student
    }
}

var s = new Student('E', 'S')
console.log(s)
console.log(Student.isStudent(s))
console.log(Student.isStudent([]))
