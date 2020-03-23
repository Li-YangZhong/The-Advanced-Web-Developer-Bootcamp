var instructors = [
    { name: 'Ellie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }
]
var result = instructors.filter(function (value, index, array) {
    return value.name.length > 3
})

console.log(result)