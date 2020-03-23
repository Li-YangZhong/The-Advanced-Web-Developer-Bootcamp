var arr = [1,2,3,4,5]

let result = arr.reduce(function(accumulator, nextValue){
    return accumulator + nextValue
})

console.log(result)