let precos = [29.90, 45.50, 119.90, 79.90, 25.00];
let soma= 0
let media
precos.forEach (function(p){
soma= soma+p
}
)
media= soma/notas.length
console.log(soma.toFixed(2))
console.log(media.toFixed(2))