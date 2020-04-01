var firstMap = new Map

firstMap.set(1, 'Elie')
firstMap.set(false, 'a boolean')
firstMap.set('nice', 'a string')
console.log(firstMap.size) // 3

firstMap.delete('nice')
console.log(firstMap.size) // 2

firstMap.forEach(v => console.log(v))

console.log(firstMap.values())