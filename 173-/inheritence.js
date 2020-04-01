function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.sayHello = function() {
    console.log(`Hello ${this.firstName} ${this.lastName}`)
}

function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

var newStudent = new Student('E', 'L')
console.log(newStudent)
newStudent.sayHello()