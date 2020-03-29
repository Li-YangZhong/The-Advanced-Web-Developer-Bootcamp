var instructor = {
    firstName: 'Elie',
    sayHi: function() {
        setTimeout(() => {
            console.log('Hello ' + this.firstName)
        }, 1000)
    }
}

instructor.sayHi();

var instructor2 = {
    firstName: 'Elie',
    sayHi: () => {
        setTimeout(() => {
            console.log('Hello ' + this.firstName)
        }, 1000)
    }
}

instructor2.sayHi()