function fatorial(p1) {
    var fat = 1
    controle = p1
    while (controle > 1) {
        fat *= controle
        controle--
    }
    return fat
}
console.log(fatorial(5))