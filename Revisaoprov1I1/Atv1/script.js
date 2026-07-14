let baseterreno= parseFloat(prompt("Insira o valor da base terreno em metros"));
let alturaterreno= parseFloat(prompt("Insira o valor da altura do terreno em metros"));
let precometro= parseFloat(prompt("Insira o valor do metro quadrado"));
let areaterreno= (baseterreno*alturaterreno)/2;
let valorterreno= areaterreno*precometro;
alert (`O valor da área do terreno é de ${areaterreno} \n E o preço total da área do terreno é de ${valorterreno}`);