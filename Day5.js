var frutas = [];
var laticineos = [];
var bebidas = [];
var congelados = [];
var doces = [];

var resposta = true;
var item = "";
var categoria = "";

while (resposta) {
  item = prompt("Qual item deseja adicionar?");
  categoria = prompt(
    "Qual categoria? \n1 - Frutas, \n2 - Laticíneos, \n3 - Bebidas, \n4 - Congelados, \n5 - Doces)",
  );
  switch (categoria) {
    case "1":
      frutas.push(item);
      break;
    case "2":
      laticineos.push(item);
      break;
    case "3":
      bebidas.push(item);
      break;
    case "4":
      congelados.push(item);
      break;
    case "5":
      doces.push(item);
      break;
    default:
      alert("Categoria inválida");
  }
  var op = prompt("Deseja adicionar outro item? (sim/nao)");
  if (op == "nao") resposta = false;
}

alert(
  "Lista de Compras: \n\tFrutas: " +
    frutas +
    "\n\tLaticíneos: " +
    laticineos +
    "\n\tBebidas: " +
    bebidas +
    "\n\tCongelados: " +
    congelados +
    "\n\tDoces: " +
    doces,
);
