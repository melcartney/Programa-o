let desconto;
let precofinal;
function calcularPrecoComDesconto(preco, percentual) {
  // Calcule o valor do desconto e retorne o preço final
  desconto = (preco * percentual) / 100;
  precofinal = preco - desconto;
  return precofinal;
}
console.log(calcularPrecoComDesconto(100, 10));

/*Função para calcular desconto
Crie uma função chamada calcularPrecoComDesconto que receba o preço de um produto e
o percentual de desconto. A função deve calcular e retornar o preço final.
No programa principal, teste com:
- preço de R$ 150,00 e desconto de 10%;
- preço de R$ 89,90 e desconto de 15%;
- preço de R$ 240,00 e desconto de 20%.
Atenção: o percentual deve ser recebido como número (por exemplo, 10 para 10%).
Trecho inicial (complete o código):
function calcularPrecoComDesconto(preco, percentual) {
// Calcule o valor do desconto e retorne o preço final
}
console.log(calcularPrecoComDesconto(150, 10));*/
