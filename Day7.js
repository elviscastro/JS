function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return 0;
  } else {
    return a / b;
  }
}

let n1 = 0,
  n2 = 0;
let operacao = "";

while (operacao != "sair") {
  n1 = Number(prompt("Digite o primeiro número: "));
  n2 = Number(prompt("Digite o segundo número: "));
  operacao = prompt(
    "Digite a operação desejada: 'soma', 'subtracao', 'multiplicacao', 'divisao' ou 'sair'",
  );
  if (operacao === "soma") {
    alert(soma(n1, n2));
  } else if (operacao === "subtracao") {
    alert(subtracao(n1, n2));
  } else if (operacao === "multiplicacao") {
    alert(multiplicacao(n1, n2));
  } else if (operacao === "divisao") {
    alert(divisao(n1, n2));
  } else if (operacao === "sair") {
    alert("Até a próxima");
  } else {
    alert("Operação inválida!");
  }
}
