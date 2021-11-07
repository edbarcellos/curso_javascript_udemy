let num1 = 1
let num2 = 2

/**
 * O resultado é o mesmo, porém a forma prefix tem
 * precedência sobre a forma posfix em uma expressão
 * numérica
 */
num1++ // posfix
console.log(num1)
--num1 // prefix
console.log(num1)

/**
 * No exemplo abaixo, o num1 (prefix) foi incrementado
 * antes da comparação, e o num2 (posfix) foi decrementado
 * somente depois da comparação. Se mudarmos o num2 para
 * prefix (--num2), a comparação será feito somente depois
 * do increment/decremento, e será false
 */
console.log(++num1 === num2--)
console.log(num1 === num2)