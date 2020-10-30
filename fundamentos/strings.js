const escola = "Cod3r"

console.log(escola.charAt(4)) //pega somente a quarta letra
console.log(escola.charAt(5)) //pega a quinta letra, que nao tem, entao mostra vazio
console.log(escola.charCodeAt(3)) //mostra o codigo da letra na tabela unicode
console.log(escola.indexOf('3')) //mostra a letra no indice 3

console.log(escola.substring(1)) //mostra tudo apos a primeira letra
console.log(escola.substring(0, 3)) // mostra da letra 0 a terceira

console.log('Escola '.concat(escola).concat("!"))   //concatenacao usando concat
console.log('Escola ' + escola + "!") //concatenação usando +
console.log(escola.replace(3, 'e')) //mudar numero por letra usando o replace

console.log('Ana,Maria,Pedro'.split(',')) //criando um array usando split