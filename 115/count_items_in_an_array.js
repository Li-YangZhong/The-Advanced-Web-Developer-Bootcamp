var arr = [5,4,1,4,5]

const result = arr.reduce(function(accumulator, nextValue){
    if(nextValue in accumulator){
        accumulator[nextValue]++
    } else {
        accumulator[nextValue] = 1
    }
    return accumulator
},{})

console.log(result)