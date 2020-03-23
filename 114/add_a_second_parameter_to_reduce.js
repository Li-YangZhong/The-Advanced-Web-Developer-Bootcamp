var arr = [1,2,3,4,5]

let result = arr.reduce(function(accumulator, nextValue){
    return accumulator + nextValue
}, 10)

console.log(result)

var arr2 = ['Tim', 'Matt', 'Colt', 'Elie']

let result2 = arr2.reduce(function(accumulator, nextValue){
    return accumulator += ' ' +  nextValue
}, 'The instructors are')

console.log(result2)