function sayHi() {
    return 'Hi ' + this.firstName
}

var colt = {
    firstName: 'Colt'
}

var elie = {
    firstName: 'Elie'
}

console.log(sayHi.call(colt)) // Hi Colt
console.log(sayHi.call(elie)) // Hi Elie