const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` //utiliza-se a crase para indicar o uso de um template string e o ${} para utilizar variaveis, funcoes, metodos...
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //função arrow para colocar em maiusculo strings que passar para ele
console.log(`Ei... ${up('cuidado')}!`)