/* Função em JS é First-Class Object (or Citizen)
Higher-order function
Isso significa que a linguagem trata a função
como um dado, ou seja, ela pode ser passada como
parâmetro em outra função por exemplo */

// criar de forma literal
function fun1() {
    console.log('Rodei!')
}

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})
run(fun1)

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)