function aplicaJurosSimples(capitalInicial, taxaDeJuros, tempoAplicacao) {
    return (capitalInicial + (capitalInicial * (taxaDeJuros / 100) * tempoAplicacao))
}

function aplicaJurosComposto(capitalInicial, taxaDeJuros, tempoAplicacao) {
    let total = capitalInicial
    for (let i = 0; i < tempoAplicacao; i++) {
        //total = total + (total * (taxaDeJuros / 100))
        total = aplicaJurosSimples(total, taxaDeJuros, 1)
    }
    return total
}

function calculaAplicacaoMensal(valorInicial, incrementoMensal, taxaDeJuros, tempoAplicacao) {
    let total = valorInicial
    for (let i = 0; i < tempoAplicacao; i++) {
        total = aplicaJurosSimples(total, taxaDeJuros, 1)        
        total = total + incrementoMensal        
    }
    return total
}

const aplicacao = 500
const incrementoMensal = 500
const taxaDeJuros = 0.85
const periodoEmMeses = 12 * 29

console.log('Juros Simples: ' + aplicaJurosSimples(aplicacao, taxaDeJuros, periodoEmMeses).toFixed(2))
console.log('Juros compostos: ' + aplicaJurosComposto(aplicacao, taxaDeJuros, periodoEmMeses).toFixed(2))
console.log('Aplicação mensal: ' + calculaAplicacaoMensal(aplicacao, incrementoMensal, taxaDeJuros, periodoEmMeses).toFixed(2))
console.log('Aposentadoria: ' + (calculaAplicacaoMensal(aplicacao, incrementoMensal, taxaDeJuros, periodoEmMeses) * taxaDeJuros / 100).toFixed(2))