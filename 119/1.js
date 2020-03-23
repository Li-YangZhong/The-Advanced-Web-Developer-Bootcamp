function counter() {
    var count = 0
    return function inner(){
        count++
        return count
    }

    
}

var counter1 = counter()

console.log(counter1())//1
console.log(counter1())//2

var counter2 = counter()
console.log(counter2())//1
