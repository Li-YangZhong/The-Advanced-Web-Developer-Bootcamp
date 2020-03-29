function doubleAndFilter(arr) {
    return arr.map(function (value) {
        return value * 2
    }).filter(function (value) {
        return value % 3 === 0
    })
}

console.log(doubleAndFilter([5, 10, 15, 20])) // [30]

var doubleAndFilter2 = arr => arr.map(value => value * 2).filter(value => value % 3 === 0)

console.log(doubleAndFilter2([5, 10, 15, 20])) // [30]