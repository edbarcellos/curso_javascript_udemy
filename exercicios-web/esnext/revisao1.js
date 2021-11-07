// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3, 4, 5, 6]
console.log(x, y)

const { idade: age, nome: name } = { nome: 'Julia', idade: 9 }
console.log(name, age)