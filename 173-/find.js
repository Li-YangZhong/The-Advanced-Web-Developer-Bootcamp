var instructors = [{name: 'Elie'}, {name: 'Matt'}, {name: 'Tim'}, {name: 'Colt'}]

var result = instructors.find(function(val){
    return val.name === 'Tim'
})

console.log(result)