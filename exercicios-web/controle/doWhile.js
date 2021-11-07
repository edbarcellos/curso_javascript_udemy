function getInteiroAleatorioEntre(min, max) {
    const valor = (Math.random() * (max - min)) + min
    return Math.floor(valor)
}

let opcao
let counter = 0

do {
    counter++
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida: ${opcao}`)
} while (opcao != -1)

console.log(`Quantidade de sorteios: ${counter}`)