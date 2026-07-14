let paginasmaterial= parseFloat(prompt("Insira a quantidade de páginas em um material"));
let copiasquant= parseFloat(prompt("Insira a quantidade de cópias que serão"));
let custpagina= parseFloat(prompt("Insira o custo por página"));
let percntta= parseFloat(prompt("Insira o percentual da taxa adicional"));

let totalpag= paginasmaterial*copiasquant;
let custobase= totalpag*custpagina;
let taxa= (percntta*custobase)/100;
let custofinal= taxa+custobase;
alert (`O total de páginas a serem impressas vai ser de ${totalpag}`);
alert (`O custo base será de R$${custobase}`);
alert (`O valor da taxa adicional será de R$${taxa .toFixed(2)}`);
alert (`Por fim, o custo total será de R$${custofinal}`);