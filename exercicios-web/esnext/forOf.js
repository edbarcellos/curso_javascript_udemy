// for of, ao contrário do for in (q opera em cima de índices), opera em cima de valores

// PERCORRENDO STRING (QUE É UM ARRAY)
for (let letra of 'Cod3r') {
    console.log(letra)
}

// PERCORRENDO ARRAY
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

// PERCORRENDO MAP
const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

// PERCORRENDO SET
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}