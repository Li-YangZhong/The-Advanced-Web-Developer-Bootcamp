var s = new Set;

s.add(10)
s.add(20)
s.add(10)

console.log(s.size) // 2

console.log(s.has(10)) // true

s.delete(20)
console.log(s.size) // 1

// create a set from an array

var s2 = new Set([3,1,4,1,2,1,5])
console.log(s2) // Set { 3, 1, 4, 2, 5 }

