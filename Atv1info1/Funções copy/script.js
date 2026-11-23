function verificarAprovacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "De recuperação";
  } else {
    return "Reprovado";
  }
}
console.log(verificarAprovacao(8.5));
console.log(verificarAprovacao(6));
console.log(verificarAprovacao(4));

/* Situação do estudante
Crie uma função chamada verificarAprovacao que receba a média de um estudante e
retorne:
- "Aprovado", se a média for maior ou igual a 7;
- "Em recuperação", se a média for maior ou igual a 5 e menor que 7;
- "Reprovado", se a média for menor que 5.
No programa principal, teste a função com as médias 8,5; 6; e 4.
Trecho inicial (complete o código):*/
