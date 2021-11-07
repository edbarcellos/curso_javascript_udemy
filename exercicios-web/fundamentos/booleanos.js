let isAtivo = false
console.log('Literal false: ' + isAtivo)

isAtivo = true
console.log('Literal true: ' + isAtivo)

isAtivo = 1
console.log('Número 1 literal: ' + !!isAtivo)

isAtivo = ''
console.log('String vazia sem espaço: ' + !!isAtivo)

isAtivo = 'Edgar'
console.log('String: ' + !!isAtivo)

isAtivo = -1
console.log('Número negativo: ' + !!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // não testa a atribuição, e sim o valor

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(!!('' || null || 0 || ''))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Edgar'
console.log(nome || 'Desconhecido')