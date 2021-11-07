function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            // Aqui vai gerar um erro simulado
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro específico: ${err}`)
    )
    .then(() => console.log('Quase fim...'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!')) // Após o catch, o then não receberá mais nenhum dado.