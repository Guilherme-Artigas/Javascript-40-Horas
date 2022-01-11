var idade = 70
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Você tem ${idade} anos, ainda não pode votar!`)
} else if (idade < 18 || idade > 65) {
    console.log(`Você tem ${idade} anos, o voto para você é opcional!`)
} else {
    console.log(`Você tem ${idade} anos, o voto para você é obrigatório!`)
}