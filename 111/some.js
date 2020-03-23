var arr = [1,2,3]

var result = arr.some(function(value, index, array){
    return value < 2
})

console.log(result)