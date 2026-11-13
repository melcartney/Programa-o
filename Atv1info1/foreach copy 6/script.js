let temperaturas = [18, 22, 16, 25, 19, 27, 21];
let maiortemp= temperaturas[0]
let menortemp= temperaturas[0]
temperaturas.forEach (function(t){
    if (t>maiortemp) {
        maiortemp=t
    }
    else if (t<menortemp) {
        menortemp=t
    }
})
console.log (menortemp)
console.log(maiortemp)