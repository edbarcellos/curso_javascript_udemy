// operador ... rest(juntar)/spread(espalhar)
// usar rest como parâmetro de função
const soma = (...nums) => {
    totalizador = 0
    nums.forEach(n => totalizador += n)
    return totalizador
}
console.log(soma(3, 4, 5, 6, 7))

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // espalhei todos os atributos de funcionário dentro do objeto clone
console.log(clone)

 // usar spread com array
 const grupoA = ['João', 'Pedro', 'Gloria']
 const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
 console.log(grupoFinal)