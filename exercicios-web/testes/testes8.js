const notas = [1, 2, 3, 4, 5]

notas.forEach(function(nota, index) {
    console.log(`${index}) Nota ${nota}`)
})

Array.prototype.forEach2 = function(f) {
    for (let i = 0; i < this.length; i++) {
        f(this[i], i, this)
    }
}

console.log('########')

notas.forEach2(function(nota, index) {
    console.log(`${index}) Nota ${nota}`)
})

console.log('########')

const notasDobradas = notas.map((nota, index) => nota * 2)

const listaNotas = array => {
    array.forEach2(function(nota, index) {
        console.log(`${index}) Nota ${nota}`)
    })
}

listaNotas(notas)
console.log('########')
listaNotas(notasDobradas)