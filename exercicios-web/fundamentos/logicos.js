function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // operador OU
    const comprarTv50 = trabalho1 && trabalho2 // operador E
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise OU Exclusivo
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))