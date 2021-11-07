console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const cliente = new Obj('Edgar')
const cliente2 = new Obj('Gabriel')
console.log(cliente.nome)
console.log(cliente2.nome)
cliente2.exec()