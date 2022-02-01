var lista_valores = [1, 8, 2, 7, 6, 5, 3, 4, 9, 20, 11, 13, 15, 12, 16, 18]
console.log(lista_valores)

// for (var posicao = 0; posicao < lista_valores.length; posicao++) {
//     console.log(`O índice ${posicao} contem o valor ${lista_valores[posicao]}`)
// }

for (var posicao in lista_valores) {
    console.log(`O índice ${posicao} contem o valor ${lista_valores[posicao]}`)
}