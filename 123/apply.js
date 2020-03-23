function addNumbers(a,b,c,d){
    return this.firstName + ' just calculated ' + (a+b+c+d)
}

var colt = {
    firstName: 'Colt'
}

var elie = {
    firstName: 'Elie'
}

console.log(addNumbers.call(elie, 1,2,3,4))
console.log(addNumbers.apply(elie, [1,2,3,4]))