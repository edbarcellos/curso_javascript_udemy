const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(8))
console.log(resultado(5))

const resultado2 = nota => nota >=7 ? 'Aprovado' : (nota >= 5 && nota < 7 ? 'Recuperação' : 'Reprovado')

console.log(resultado2(10))
console.log(resultado2(5.1))
console.log(resultado2(4.5))