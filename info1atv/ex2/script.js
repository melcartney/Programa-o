let disciplinasN= parseFloat(prompt("Insira a quantidade de disciplinas"))
let discEH= parseFloat(prompt("Insira a quantidade de horas de estudo de disciplinas por dia"))
let diasEst= parseFloat(prompt("Insira o número de dias de estudos"))
let horases= discEH*diasEst
let discpor= disciplinasN/discEH
alert (`Você estuda ${discpor .toFixed(1)} horas pra cada disciplina \n E considerando que vocẽ estuda por ${diasEst} dias, nesse total de dias você estudou por ${horases .toFixed(1)} horas`)