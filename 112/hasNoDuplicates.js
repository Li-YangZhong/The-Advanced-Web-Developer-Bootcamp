function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val)
    })
}

console.log(hasNoDuplicates([1,2,3,4]))
console.log(hasNoDuplicates([1,2,2,3,4]))