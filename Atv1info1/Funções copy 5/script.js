let maiornumero;

function encontrarMaior(numeros) {
  maiornumero = numeros[0];
  numeros.forEach(function (n) {
    if (maiornumero <= n) {
      maiornumero = n;
    }
  });
  return maiornumero;
}
console.log(encontrarMaior([18, 7, 25, 12, 31, 9]));
/*Função que calcula o maior valor de um array
Crie uma função chamada encontrarMaior que receba um array de números e retorne o
maior elemento.
Não utilize Math.max() nem sort(). Resolva percorrendo o array com for.
Teste com:
[18, 7, 25, 12, 31, 9]
[4, 40, 14, 22, 8]
[-5, -2, -11, -1]
Trecho inicial (complete o código):
function encontrarMaior(numeros) {
// Considere inicialmente o primeiro elemento como o maior
// Percorra o array com for e atualize o maior quando necessário
// Retorne o maior valor encontrado
}
console.log(encontrarMaior([18, 7, 25, 12, 31, 9]));*/
