function taPorra(a, b, c) {
    let delta = (b ** 2) - (4 * a * c)
    resultado1 = (-b + Math.sqrt(delta)) / (2 * a)
    resultado2 = (-b - Math.sqrt(delta)) / (2 * a)
    
    if (delta < 0) {
        return `Delta negativo: ${delta}`
    } else {
        return [resultado1, resultado2]
    }
}

console.log(taPorra(3, -5, 12))
console.log(taPorra(5, 4, 3))
console.log(taPorra(2, 0, 1))
console.log(taPorra(2, -10, 8))