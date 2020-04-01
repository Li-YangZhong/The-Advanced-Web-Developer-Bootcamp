class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    sayHello(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

var elie = new Student('Elie', 'Schoppik')
console.log(elie)
elie.sayHello()
