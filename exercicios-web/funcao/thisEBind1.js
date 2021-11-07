const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO


/**
 * o bind é uma função de uma função
 * ele recebe como parâmetro um objeto para o qual
 * vc quer que o "this" seja referenciado
 * naquele contexto
 */
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()