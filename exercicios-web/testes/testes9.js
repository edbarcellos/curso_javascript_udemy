const notas = [1, 2, 3, 4, 5]

let dobroNotas = notas.map(nota => nota * 2)
console.log(dobroNotas)

Array.prototype.map2 = function(callback) {
    let returnArray = []
    for (let i = 0; i < this.length; i++) {
        returnArray.push(callback(this[i], i, this))
    }
    return returnArray
}

dobroNotas = notas.map2(nota => nota * 2)
console.log(dobroNotas)