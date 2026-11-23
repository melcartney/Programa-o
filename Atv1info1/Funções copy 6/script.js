let notasTurma = [7, 8, 5, 9, 6, 10];
let soma = 0;

function gerarRelatorioNotas(notas) {
  notas.forEach(function (n) {
    soma = soma + n;
  });
  return soma / notas.length;
}

function verificarAprovacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "De recuperação";
  } else {
    return "Reprovado";
  }
}

let mediaTurma = gerarRelatorioNotas(notasTurma);
let situacaoturma = verificarAprovacao(mediaTurma);
console.log("Média da turma:", mediaTurma);
console.log("Situação da turma: ", situacaoturma);

/*Função que gera um relatório de notas
Crie uma função chamada gerarRelatorioNotas que receba um array de notas e retorne a
média da turma.
Depois, no programa principal, mostre:
- a média retornada pela função;
- a situação da turma, usando a função verificarAprovacao do exercício 62.
Teste com [7, 8, 5, 9, 6, 10]. Se necessário, adapte a função do exercício 62 para reutilizá-la.
Trecho inicial (complete o código):
function gerarRelatorioNotas(notas) {
// Some as notas percorrendo o array
// Calcule a média e retorne
}
let notasTurma = [7, 8, 5, 9, 6, 10];
let mediaTurma = gerarRelatorioNotas(notasTurma);
console.log("Média da turma:", mediaTurma);
// Utilize verificarAprovacao(mediaTurma)*/
