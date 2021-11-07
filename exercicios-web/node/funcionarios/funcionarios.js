const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const getChineses = f => f.pais == 'China'
    const getMulheres = f => f.genero == 'F'
    const getMenorSalario = (funcionario, funcionarioAtual) => funcionario.salario <= funcionarioAtual.salario ? funcionario : funcionarioAtual

    const result = funcionarios
        .filter(getChineses)
        .filter(getMulheres)
        .reduce(getMenorSalario)
    console.log(result)
})

// Procurar a mulher chinesa com o menor salário