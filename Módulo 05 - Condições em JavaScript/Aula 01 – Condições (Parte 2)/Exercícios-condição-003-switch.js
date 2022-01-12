var pega_dia = new Date()
var dia_da_semana = pega_dia.getDay()
/*
    O javaScript vai nos trazer o resultado do dia da semana em número. Ou seja:

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

// console.log(dia_da_semana)
var dia_atual
switch(dia_da_semana) {
    case 0:
        dia_atual = 'Domingo'
        // console.log(`Domingo`)
        break
    case 1:
        dia_atual = 'Segunda-Feira'
        // console.log(`Segunda-Feira`)
        break
    case 2:
        dia_atual = 'Terça-Feira'
        // console.log(`Terça-Feira`)
        break
    case 3:
        dia_atual = 'Quarta-Feira'
        // console.log(`Quarta-Feira`)
        break
    case 4:
        dia_atual = 'Quinta-Feira'
        // console.log(`Quinta-Feira`)
        break
    case 5:
        dia_atual = 'Sexta-Feira'
        // console.log(`Sexta-Feira`)
        break
    case 6:
        dia_atual = 'Sábado'
        // console.log(`Sábado`)
        break
}

var pega_hora = new Date()
var pega_minuto = new Date()

var hora_atual = pega_hora.getHours()
var minuto_atual = pega_minuto.getMinutes()

console.log(`Hoje é ${dia_atual}, e agora são ${hora_atual} horas e ${minuto_atual} minutos.`)