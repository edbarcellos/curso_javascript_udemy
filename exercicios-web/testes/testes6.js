let teste = "10, 20, 20, 8, 25, 3, 0, 30, 1"

let resultado = teste.split(", ")

for (i in resultado) {
    console.log(typeof i, typeof resultado[i])
}

for (let i = 0; i < resultado.length; i++) {
    console.log(typeof i, typeof resultado[i])
}

function calculaResultado(lista) {
    let resultado = lista.split(' ')
    let resultados = []
    for (i in resultado) {
        resultados.push(Number(resultado[i]))
    }
    let melhorResultado = resultados[0]
    let piorResultado = resultados[0]
    let contadorMelhorResultado = 0
    let piorJogo = 0
    
    for (i in resultados) {
        if (resultados[i] > melhorResultado) {
            contadorMelhorResultado++
            melhorResultado = resultados[i]
            console.log(`Melhor resultado até agora: ${melhorResultado} / Jogo: ${Number(i) + 1}`)
        } else if (resultados[i] < piorResultado) {
            piorResultado = resultados[i]
            piorJogo = Number(i)
        }
    }

    return [contadorMelhorResultado, piorJogo + 1]    
}

//console.log(calculaResultado(string))