var arr = [1,2,3]

var [a,b,c] = arr

console.log(a,b,c)
//-----------
function returnNumbers(a,b){
    return [a,b]
}
[first, second] = returnNumbers(5,10)
console.log(first, second)
//---------
function swap(a,b){
    return [a,b] = [b,a]
}

console.log(swap(10,5)) //[ 5, 10 ]


