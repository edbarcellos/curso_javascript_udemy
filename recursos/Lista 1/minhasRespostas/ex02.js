const calculaTriangulo = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado1 == lado3) {
        console.log('Equilátero')
    } else if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}

calculaTriangulo(10,10,10)
calculaTriangulo(10,10,20)
calculaTriangulo(10,20,10)
calculaTriangulo(20,10,10)
calculaTriangulo(10,20,30)