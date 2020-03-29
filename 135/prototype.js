function Person(name){
    this.name = name
}

console.log(Person.prototype) //object

var elie = new Person('Elie')
var colt = new Person('Colt')

console.log(elie.__proto__ == Person.prototype) //true

console.log(Person.prototype.constructor === Person) //true

Person.prototype.isInstructor = true

console.log(elie.isInstructor) // true
console.log(colt.isInstructor) // true

var arr = new Array

console.log(arr.__proto__ === Array.prototype) // true