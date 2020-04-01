class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    sayHello(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

class Student extends Person { }

var newStudent = new Student('E', 'L')
console.log(newStudent)
newStudent.sayHello()