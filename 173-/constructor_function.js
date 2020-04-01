function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

var elie = new Student('Elie', 'Schoppik')

console.log(elie)

Student.prototype.sayHello = function(){
    console.log(`Hello ${this.firstName} ${this.lastName}`)
}

elie.sayHello()
