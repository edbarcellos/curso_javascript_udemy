const pessoa = {
    nome: 'Edgar',
    sobrenome: 'Barcellos Junior',
    idade: 36,
    altura: 186,
    peso: 144,
    endereco: {
        logradouro: 'Rua Felipe Gubert',
        numero: 165,
        complemento: 'Sobrado 2',
        cidade: 'Piraqura',
        estado: 'PR',
        cep: '83305-340'
    },
    profissao: 'Desenvolvedor Full Stack',
    estadoCivil: 'Casado'
}

console.log(`${pessoa.endereco.logradouro}, ${pessoa.endereco.numero} - ${pessoa.endereco.complemento}
${pessoa.endereco.cep} - ${pessoa.endereco.cidade} / ${pessoa.endereco.estado}`)

function getImc({peso, altura}) {
    return (peso / (Math.pow((altura / 100), 2))).toFixed(2)
}

function printImc(obj) {
    let {nome, sobrenome} = obj
    let imc = getImc(obj)

    console.log(`
    Olá ${nome} ${sobrenome}.
    Seu IMC é ${imc}.
    `)
}

printImc(pessoa)