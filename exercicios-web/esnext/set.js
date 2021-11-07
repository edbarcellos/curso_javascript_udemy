// Set é uma estrutura não indexada e que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Palmeiras')
times.add('Corinthians').add('Flamengo').add('Fluminense')
times.add('Vasco') // ignorou pq já existe

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)