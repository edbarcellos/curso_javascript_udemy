const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    /**
     * Se retornar true, o elemento entra no 
     * array notasBaixas. 
     * Se retornar false, o elemento é ignorado
     * e passamos para a próxima iteração.
     */
    return (nota < 7)
})
console.log(notasBaixas2)

// Com callback arrow function
const notasBaixas3 = notas.filter(nota => (nota < 7))
console.log(notasBaixas3)

// Com callback arrow function setada previamente
const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas4)