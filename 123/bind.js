function addNumbers(a,b,c,d){
    return this.firstName + ' just calculated ' + (a+b+c+d)
}

var elie = {
    firstName: 'Elie'
}

var elieCalc = addNumbers.bind(elie, 1,2,3,4)
console.log(elieCalc)
console.log(elieCalc()); //Elie just calculated 10

var elieCalc2 = addNumbers.bind(elie,1,2)
console.log(elieCalc2)
console.log(elieCalc2(3,4)) //Elie just calculated 10