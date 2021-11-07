function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // o resolve é a callback de sucesso / reject é a callback de fracasso
        setTimeout(() => {
            resolve(frase) // aceita somente um parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // tratar o erro