function printRest(a,b, ...c){
    console.log(a)
    console.log(b)
    console.log(c)
}

printRest(1,2,3,4,5) 
/* 
1
2
[ 3, 4, 5 ] 
*/

// ES5
function sumArguments1(){
    var total = 0
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(sumArguments1(1,2,3)) //6

//A little fancier ES5
function sumArguments2(){
    var argumentsArray = [].slice.call(arguments)
    return argumentsArray.reduce(function(accumulator,nextValue){
        return accumulator + nextValue
    })
}

console.log(sumArguments2(1,2,3)) //6