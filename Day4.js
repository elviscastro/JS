// com numero predefinido
// let numero = 7;
// com numero aleatorio
let numero = Math.floor(Math.random() * 11);
let tentativas = 3;
while (tentativas > 0) {
  let chute = prompt("Digite um número entre 0 e 10");
  if (chute == numero) {
    alert("Você acertou! Parabens");
    break;
  } else {
    alert("Você errou! Tente novamente");
    tentativas--;
  }
}
alert("O numero era " + numero);
