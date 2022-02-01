var lista_numeros = [9, 1, 3, 5]
// console.log(`Nossa lista de números contem os valores: ${lista_numeros}`)
lista_numeros[4] = 7
// console.log(`Nossa lista de números contem os valores: ${lista_numeros}`)
lista_numeros.push(8) // Acrescenta um valor ao final da lista.
lista_numeros.length // Nos diz o tamanho da lista, retorna um número dizendo quantos elementos têm dentro da nossa lista.
console.log(`Nossa lista de números contem os valores: ${lista_numeros}, sendo que ${lista_numeros[4]} e ${lista_numeros[5]} foram acrescentados depois.`)
console.log(`Descobrindo a quantidade de elementos da nossa lista com o atributo length: ${lista_numeros.length}`)
console.log(`Ordenando nossa lista de números com o método sort(), fica assim: ${lista_numeros.sort()}`)