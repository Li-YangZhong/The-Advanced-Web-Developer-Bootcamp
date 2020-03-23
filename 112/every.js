var arr = [-1,-2,-3]

let result = arr.every(function(value, index, array){
    return value < 0
})

console.log(result)