let temperaturas = [12, 18, 15, 20, 11, 17, 14];
let maior= temperaturas[1]
let menor= temperaturas[1]

for (let i = 0; i< temperaturas.length; i++) {
    if (temperaturas[i]>maior) {
        maior= temperaturas[i]
    }
    else if (temperaturas[i]<menor) {
        menor= temperaturas[i]
    }
}
console.log (maior)
console.log (menor)


/*Considere o array: let temperaturas = [12, 18, 15, 20, 11, 17, 14];
Utilize um laço for para encontrar o maior e o menor valor do array. Mostre os dois valores no console.*/