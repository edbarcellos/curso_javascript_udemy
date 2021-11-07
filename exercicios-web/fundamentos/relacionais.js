console.log('01)', '1' == 1) // == -> igual
console.log('02)', '1' === 1) // === -> estritamente igual (verifica tipos)
console.log('03)', '3' != 3) // != -> diferente
console.log('04)', '3' !== 3) // !== -> estritamente diferente (verifica tipos)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // está comparando referência e não valor, por isso falso
console.log('10)', d1 == d2) // está comparando referência e não valor, por isso falso
console.log('11)', d1.getTime() === d2.getTime()) // está comparando valor e não referência, por isso true
console.log('12)', undefined == null)
console.log('13)', undefined === null) // tipos diferentes