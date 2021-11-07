/**
 * A ideia por trás do async/await é fazer um código assíncrono
 * parecer síncrono. Para isso ele fica aguardando a execução de
 * todo o código assíncrono para depois disparar o resultado.
 */
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

/* esperarPor()
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...')) */

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor()
    console.log(`Async/Await ${valor}...`)
    await esperarPor()
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor()
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const resposta = await executar()
    console.log(resposta)
}

executar().then(console.log)
executarDeVerdade()