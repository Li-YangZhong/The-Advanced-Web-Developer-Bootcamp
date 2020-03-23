console.log(this) //in a browser, this means windows

var instructor = 'Elie'
console.log(window.instructor)

console.log(window.instructor === instructor) //true

function whatIsThis() {
    return this
}

whatIsThis() // window objecct

function variableInThis() {
    this.person = 'Elie'
}

variableInThis()

console.log(person)