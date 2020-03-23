'use strict'

console.log(this) //window

function whatIsThis() {
    return this
}

whatIsThis()//undefined