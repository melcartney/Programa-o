let notas= [10,10,10,10,10]
let soma= 0
let resultado

function calcularmedia (media) {
   notas.forEach(function(n){
    soma= soma+ n
   });
   return soma/notas.length
}
let media= calcularmedia(notas)
console.log(media)