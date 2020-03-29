var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [7,8,9]

//ES5
var combined1 = arr1.concat(arr2).concat(arr3)
console.log(combined1)

var combined2 = [...arr1, ...arr2, ...arr3]
console.log(combined2)

//-----------

var newArr = [3,2,4,1,5]

//ES5
console.log(Math.max.apply(this,newArr))

//ES2015
console.log(Math.max(...newArr))