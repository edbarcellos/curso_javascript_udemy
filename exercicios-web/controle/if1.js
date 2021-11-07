function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(6)
soBoaNoticia(7)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo() //undefined
seForVerdadeEuFalo(null) 
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ') //aqui a string não está vazia. ela tem um espaço
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
