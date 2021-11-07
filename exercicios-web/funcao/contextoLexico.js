const valor = 'Global'

/** 
 * Como a função abaixo está sendo declarada dentro
 * de um arquivo, ou seja, dentro de um "módulo" do
 * Node.js, o contexto léxico dessa função é esse
 * módulo (arquivo). 
 */
function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()

/**
 * Como a função minhaFuncao() foi declarada dentro
 * do contexto léxico do módulo/arquivo, ela memoriza
 * esse contexto independente da chamada. Ou seja, 
 * qdo. ela é chamada dentro de exec(), mesmo existindo
 * uma constante 'valor' dentro de exec(), no momento
 * no qual a função minhaFuncao() foi declarada o
 * contexto léxico era outro. Por isso o resultado
 * abaixo é 'Global' e não 'Local'
 */
function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec()