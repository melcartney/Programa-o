let entregasN= parseInt(prompt("Insira o número de entregas realizadas"))
let tempoentre= parseFloat(prompt("Insira o tempo médio por entrega em minutos"))
let consumoentre= parseFloat(prompt("Insira o consumo médio de gasolina por litro por entrega"))
let custogaso= parseFloat(prompt("Insira o custo da gasolina por litro"))

let horasentre= (tempoentre/60)*entregasN
let consumogas= consumoentre*entregasN
let custotot= custogaso*consumoentre

alert (`O total de horas de entregas foi de ${horasentre} horas \n
      E o custo total de combustível foi de ${consumogas} litros\n
    O custo médio por entrega é R$${custotot/entregasN}`)