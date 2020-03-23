function vowelCount(str){
    var splitArr = str.split('')
    var obj = {}
    var vowels = 'aeiou'

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(letter in obj){
                obj[letter]++
            } else {
                obj[letter] = 1
            }
        }
    })
    return obj
}

console.log(vowelCount('bird'))

//The in operator returns true if the specified property is in the specified object or its prototype chain.