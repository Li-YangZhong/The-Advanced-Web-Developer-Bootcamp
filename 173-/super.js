class Vehicle {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    start(){
        return 'VROOM!'
    }
    toString(){
        `The make, model, and year ar ${this.make} ${this.model} ${this.year}`
    }
}

class Car extends Vehicle {
    constructor() {
        super(...arguments)
    }
}

var newCar = new Car('Volkswagon', 'Octavia', 2018)

console.log(newCar)