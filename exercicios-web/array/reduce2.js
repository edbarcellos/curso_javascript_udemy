const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maira', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Lucia', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsitas? Retornar verdadeiro ou falso

const soBolsista = (acumulador, valor) => acumulador && valor
let resultado = alunos.map(e => e.bolsista).reduce(soBolsista)
console.log(`Todos os alunos são bolsistas? ${(resultado) ? 'Sim' : 'Não'}`)

// Desafio 2: Algum aluno é bolsista? Retornar verdadeiro ou falso

const algumBolsista = (acumulador, valor) => acumulador || valor
resultado = alunos.map(e => e.bolsista).reduce(algumBolsista)
console.log(`Algum aluno é bolsista? ${(resultado) ? 'Sim' : 'Não'}`)