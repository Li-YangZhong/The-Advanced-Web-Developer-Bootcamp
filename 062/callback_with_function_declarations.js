function greet(name, formatter) {
    return console.log('Hello, ' + formatter(name));
}

function upperCaseName(name) {
    return name.toUpperCase();
}

greet('Tim', upperCaseName);