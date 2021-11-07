const notas = [100, 50, 10, 5, 1]

const agrupaNotas = notas => {
    let notasAgrupadas = {
        nota100: 0,
        nota50: 0,
        nota10: 0,
        nota5: 0,
        nota1: 0
    }
    
    for (i in notas) {
        switch (notas[i]) {
            case 100:
                notasAgrupadas.nota100++
                break
            case 50:
                notasAgrupadas.nota50++
                break
            case 10:
                notasAgrupadas.nota10++
                break
            case 5:
                notasAgrupadas.nota5++
                break
            case 1:
                notasAgrupadas.nota1++
                break
            default:
                console.log('Algo errado ocorreu!')
                break
        }
    }

    return notasAgrupadas
}

const qtdNotas = valor => {
    let totalNotas = []
    let saldo = valor
    for (i in notas) {
        if (saldo == 0) {
            break
        }
        while ((saldo / notas[i]) >= 1) {
            totalNotas.push(notas[i])
            saldo -= notas[i]
        }        
    }
    return agrupaNotas(totalNotas)
}

console.log(qtdNotas(1984))