var nums = [5,7,1,4,2]

console.log(Math.max(nums)) //NaN
console.log(Math.max.apply(this, nums)) //7

function sumValues(a,b,c){
    return a+b+c
}

var values = [4,1,2]

console.log(sumValues(values)) // 4,1,2undefinedundefined
 
console.log(sumValues.apply(this,[4,1,2])) // 7
