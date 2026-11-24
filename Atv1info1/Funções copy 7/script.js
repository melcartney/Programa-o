
let precos = [50, 80, 120, 200];

function reajustarPrecos(valores, percentual) {
  let novosPrecos = [];

  for (let i = 0; i < valores.length; i++) {
    novosPrecos.push(valores[i] * (1 + percentual / 100));
  }

  return novosPrecos;
}

let reajustados = reajustarPrecos(precos, 8);

console.log(precos);
console.log(reajustados);


/*Função para aplicar reajuste em preços
Crie uma função chamada reajustarPrecos que receba um array de preços e um percentual
de reajuste. A função deve retornar um novo array com os preços reajustados.
Utilize for para construir o novo array. Não altere o array original.
Teste com os preços [50, 80, 120, 200] e reajuste de 8%. Ao final, mostre o array original e o
novo array.
Trecho inicial (complete o código):
function reajustarPrecos(precos, percentual) {
let novosPrecos = [];
// Percorra os preços com for
// Calcule o preço reajustado e adicione ao novo array
// Retorne o novo array
}
let precos = [50, 80, 120, 200];
let reajustados = reajustarPrecos(precos, 8);*/
