function outer1() {
    var start = 'Closures are'
    return function inner() {
        return start + ' ' + 'awesome'
    }
}

console.log(outer1())

console.log(outer1()())
//--------------
function outer(a){
    return function inner(b) {
        return a + b
    }
}

console.log(outer(5)(5) )//10

var storeOuter = outer(5)
console.log(storeOuter(10) )// 15