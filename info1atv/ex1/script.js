let volumeI= parseFloat(prompt("Qual é a quantidade inicial de líquido no recipiente em litros?"))
let litrosH= parseFloat(prompt("Insira a quantidade de litros adicionados por hora"))
let tempoA= parseFloat(prompt("Insira o tempo de abastecimento"))
let TotalL= (litrosH*tempoA)+volumeI
alert (`O volume total do reservatório foi de ${TotalL .toFixed(2)} litros`)