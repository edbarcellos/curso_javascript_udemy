// Um array em JS é um objeto, especial, porém um objeto
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Julia']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados === undefined)
console.log(aprovados === null)
console.log(aprovados)

aprovados.sort() // Função de ordenação de array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Julia']
aprovados.splice(1, 1) // Remove/Insere elemetos do array
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Julia']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)