function potencia(base, exp) {
    let resultado = Math.pow(base, exp) // Método antigo
    resultado = base ** exp // Método novo
    return resultado
}

console.log(potencia(3, 2))