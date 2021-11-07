let comparaComThis = function (param) {
    console.log(this === param)
}
/**
 * Dentro do note, ao declarar uma função fora de
 * um contexto menor (outra função, um objeto, etc),
 * o this é global
 */
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
/**
 * O this em uma função arrow aponta para o contexto
 * no qual a função foi escrita. Isso não muda.
 * Por exemplo. Uma função declarada em um arquivo JS
 * do node, terá o this apontando para o module.exports.
 */