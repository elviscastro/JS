// 2/7 - Ler informações e imprimir.

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);

// DESAFIO OPCIONAL

const pergunta = prompt(
  "Você gosta de estudar JS? Responda com o número 1 para SIM ou 2 para NÃO.",
);
if (pergunta == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (pergunta == 2) {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
  alert("Você não digitou um número válido.");
}
