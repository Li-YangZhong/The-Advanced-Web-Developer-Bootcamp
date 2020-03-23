function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    var name = 'Tom Hanks';
    callback(name);
}

processUserInput(greeting);
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.