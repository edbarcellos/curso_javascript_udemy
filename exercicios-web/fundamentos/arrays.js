const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // qtd. de itens de um array

valores.push({id: 3}, null, 'teste') // insere itens no array
console.log(valores)

console.log(valores.pop()) // retira último item do array
console.log(valores)
delete valores[0] // deleta um valor específico de um array
console.log(valores)

console.log(typeof valores)