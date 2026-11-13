let numeros = [12, 7, 4, 9, 16, 3, 20, 11, 8];
let impares = 0;
let pares = 0;

numeros.forEach(function (n) {
  if (n % 2 == 0) {
    pares = pares + 1;
  } else {
    impares = impares + 1;
  }
});
console.log(impares);
console.log(pares);
