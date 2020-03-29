function Person(name){
    this.name = name
}

Person.prototype.sayHi = function(){
    console.log('Hi ' + this.name) 
}

elie = new Person('Elie')
elie.sayHi()