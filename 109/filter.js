var arr = [1,2,3]

var newArr = arr.filter(function(value, index, array){
    return value > 2
})

console.log(newArr)