var person =  {
    firstName: 'Colt',
    sayHi: function() {
        return 'Hi ' + this.firstName
    },
    determineContext: function(){
        return this === person
    },
    dog: {
        sayHello: function(){
            return 'Hello ' + this.firstName
        },
        determineContext: function() {
            return this === person
        }
    }

}

console.log(person.sayHi());// Hi Colt
console.log(person.determineContext());//true

console.log(person.dog.sayHello())// Hello undefined
console.log(person.dog.determineContext())//false