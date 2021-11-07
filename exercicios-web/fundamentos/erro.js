function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { // vai executar após análise do erro ocorrendo ou não um erro
        console.log('final')
    }
}

const obj = { nome: 'João' }
imprimirNomeGritado(obj)