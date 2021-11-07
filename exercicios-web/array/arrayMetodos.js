const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // retira o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no final
console.log(pilotos)

pilotos.shift() // retira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no início
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou! rsrs
console.log(pilotos)

/* slice corta o array nas posições informadas e
retorna para um novo array */
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1, pilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)