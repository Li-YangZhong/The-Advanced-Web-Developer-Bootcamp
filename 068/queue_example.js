function square(n) {
    return n * n
}
setTimeout(function() {
    console.log('Callback was placed', 'on the queue')
}, 0)
console.log(square(2))