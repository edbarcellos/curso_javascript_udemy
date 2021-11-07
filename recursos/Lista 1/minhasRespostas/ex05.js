function toMoney(num) {
    let resultado = num.toFixed(2).toString().replace('.', ',')
    return 'R$' + resultado
}
console.log(toMoney(0.1 + 0.2))