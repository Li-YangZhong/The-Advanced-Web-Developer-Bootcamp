var person = {
    firstName: 'Elie',
    sayHi: function(){
        return 'Hi ' + this.firstName
    },
    determineContext: function(){
        return this === person
    }
}

console.log(person.sayHi())

console.log(person.determineContext())