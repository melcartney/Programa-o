let vendas = [120, 75, 240, 55, 180, 90, 310, 65];
let soma= 0
let Maior= vendas[0]
let vendasacima= 0

function calcularTotal(vendas) { 
// Retorne a soma de todos os valores 
vendas.forEach(function(v){
  soma= soma+v
});
return soma
} 
function calcularMedia(vendas) { 
// Utilize calcularTotal() para evitar repetir código 
let media= soma/vendas.length
return  media
} 
function encontrarMaior(vendas) { 
// Retorne a maior venda 
  vendas.forEach(function(v) {
    if (v>Maior) {
      Maior= v
    }
  });
  return  Maior
} 
function contarVendasAcimaDe(vendas, valor) { 
// Conte quantas vendas superam o valor informado 
  vendas.forEach(function(v) {
    if (v>valor) {
      vendasacima= vendasacima+1
    }
  });
  return  vendasacima
} 

function gerarRelatorio(vendas, valor) {
    console.log(calcularTotal(vendas))
    console.log(calcularMedia(vendas))
    console.log(encontrarMaior(vendas))
    console.log(contarVendasAcimaDe(vendas, valor))
}

gerarRelatorio(vendas,150)


/*Desafio integrador: análise de vendas 
Uma loja registrou as vendas de um dia em um array. Crie as funções abaixo: 
1. calcularTotal(vendas): recebe o array e retorna a soma das vendas. 
2. calcularMedia(vendas): recebe o array e retorna a média das vendas. 
3. encontrarMaior(vendas): recebe o array e retorna a maior venda. 
4. contarVendasAcimaDe(vendas, valor): retorna quantas vendas são maiores que o valor 
informado. 
No programa principal, utilize as quatro funções com o array: 
[120, 75, 240, 55, 180, 90, 310, 65] 
Apresente um relatório organizado no console com total vendido, média, maior venda e 
quantidade de vendas acima de R$ 150,00. 
Desafio extra: crie uma quinta função chamada gerarRelatorio que receba o array, chame as 
outras funções e apresente o relatório. 
Trecho inicial (complete o código): 
function calcularTotal(vendas) { 
// Retorne a soma de todos os valores 
} 
function calcularMedia(vendas) { 
// Utilize calcularTotal() para evitar repetir código 
} 
function encontrarMaior(vendas) { 
// Retorne a maior venda 
} 
function contarVendasAcimaDe(vendas, valor) { 
// Conte quantas vendas superam o valor informado 
} 
let vendas = [120, 75, 240, 55, 180, 90, 310, 65]; */
