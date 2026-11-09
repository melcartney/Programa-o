let notas = [5, 8, 6, 9, 4, 10, 7, 3];
let soma= 0
let maioresque= 0
let media= 0
for (let i = 0; i< notas.length; i++) {
    soma= soma+notas[i]

    media= soma/(notas.length-1)

    if (notas[i]>=7){
        maioresque= maioresque+1
    }
    }

        console.log("Soma: "+ soma)
        console.log("Media: "+ media.toFixed(2))
        console.log("Maiores ou iguais a sete: "+ maioresque)
/*Considere o array: let notas = [5, 8, 6, 9, 4, 10, 7, 3];
Utilize um laço for para: a) calcular a soma das notas; b) calcular a média da turma; c) contar quantas notas são maiores ou
iguais a 7; d) mostrar todos os resultados no console.*/