let notas = [6, 8, 5, 9, 7, 4, 10, 6];
let maiorque= 0
let aprovadas= 0

notas.forEach (function(n){
    if (n>=7) {
        maiorque= maiorque+1
    }
    if (n>=6) {
        aprovadas= aprovadas+1
    }
})
console.log (aprovadas)
console.log(maiorque)