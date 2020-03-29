for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000)
} //print 5 five times

for(var i = 0; i < 5; i++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        },1000)
    })(i)
}

for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000)
} 