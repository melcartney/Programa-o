let diasuso= parseFloat(prompt("Insira a quantidade de dias de uso no mês"));
let horasuso= parseFloat(prompt("Insira a quantidade de horas de uso no dia"));
let horask= parseFloat(prompt("Insira a quantidade de kWH por hora que o equipamento consome"));
let custok= parseFloat(prompt("Insira o valor do kWH por hora"));
let taxamen= parseFloat(prompt("Insira o valor da taxa mensal de manutenção do equipamento"));


let totalhoras= diasuso*horasuso;
let consumoen= totalhoras*horask;
let custoen= consumoen*custok;
let custofinal= custoen+taxamen;
alert (`O total de horas em um mês que o equipamento trabalha é de ${totalhoras} horas`);
alert (`O total do uso de energia é de ${consumoen} kWH`);
alert (`O valor do gasto de energia é de R$${custoen}`);
alert (`Por fim o custo total, contando com a taxa de manutenção, será de R$${custofinal}`);