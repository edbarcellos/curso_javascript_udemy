// IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

/**
 * O padrão de função auto invocada (IIFE) serve
 * principalmente para executar um código com um
 * contexto léxico protegido.
 * 
 * Tudo que for criado dentro da função, será acessível
 * somente dentro da função.
 * 
 * Estratégia para fugir do escopo global.
 * 
 * Muito utilizado para fugir do escopo global do
 * navegador.
 */