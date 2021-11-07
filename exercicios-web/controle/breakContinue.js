const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // não age em blocos IF
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log(' ')

for (y in nums) {
    if (y == 5) {
        continue // não age em blocos IF
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log(' ')

externo: // rótulo atribuido ao for logo abaixo
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            /* nesse caso ele não age em cima 
            do primeiro laço, e sim do laço 
            com o rótulo "externo" */
            break externo
        }
        console.log(`Par = ${a},${b}`)
    }
}