const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.5
const avaliacao2 = 6.1

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //arredondar 2 casas
console.log(media.toString()) //converter em string
console.log(media.toString(2)) //converter em binario

//Alguns cuidados com numeros
console.log("\nCuidados com Numeros")
console.log(7 / 0)
console.log("10" / 2)
console.log("Show" * 2)
console.log(0.1 + 0.7)
//console.log(10.toString())
console.log((10.2345).toFixed(2))