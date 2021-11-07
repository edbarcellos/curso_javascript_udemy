console.log(soma(3,4))

// function declaration
// hoisting = true
function soma(param1, param2) {
    return param1 + param2
}

// function expression (função anônima)
// hoisting = false
const sub = function (param1, param2) {
    return param1 - param2
}
console.log(sub(3, 4))

// named function expression (função nomeada)
// util para debug
// hoisting = false
const mult = function mult(param1, param2) {
    return param1 * param2
}
console.log(mult(3, 4))