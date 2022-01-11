var recebe_hora = new Date()
var recebe_minutos = new Date()

var hora_atual = recebe_hora.getHours()
var minuto_atual = recebe_minutos.getMinutes()

console.log(`Agora são exatamente ${hora_atual}:${minuto_atual} hs ...`)
if (hora_atual < 12) {
    console.log(`Bom dia!`)
} else if (hora_atual < 18) {
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite!`)
}