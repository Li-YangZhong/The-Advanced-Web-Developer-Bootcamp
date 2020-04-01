var instructor = {first:'elie', last:'schoppik', job:'instructor', numSiblings: 3}

var {first, last, ...data} = instructor

console.log(first, last, data)

var instructor2 = {...instructor, first:'Tim', last:'Garcia'}
console.log(instructor2)