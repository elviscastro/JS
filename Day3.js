// 3/7 - Fluxo de decisão

const opcao0 = prompt("Deseja programar em Front-end (1) ou Back-end (2)?");
let linguagens = "";
if (opcao0 == 1) {
  const opcao1 = prompt("Deseja aprender React (1) ou Vue (2)?");
  if (opcao1 == 1) {
    const opcao3 = prompt(
      "Você escolheu React, você deseja seguir se especializando nesta área ou seguir se desenvolvendo para virar Fullstack? (1) Sim, (2) Não",
    );
    if (opcao3 == 1) {
      while (linguagens != null) {
        linguagens = prompt(
          "Tem mais alguma tecnologia que você gostaria de aprender?",
        );
      }
    } else {
      alert("Ok, boa sorte na sua carreira de Back-end Java.");
    }
  } else if (opcao1 == 2) {
    const opcao3 = prompt(
      "Você escolheu Vue, você deseja seguir se especializando nesta área ou seguir se desenvolvendo para virar Fullstack? (1) Sim, (2) Não",
    );
    if (opcao3 == 1) {
      while (linguagens != null) {
        linguagens = prompt(
          "Tem mais alguma tecnologia que você gostaria de aprender?",
        );
      }
    } else {
      alert("Ok, boa sorte na sua carreira de Back-end Java.");
    }
  } else {
    alert("Você não digitou um número válido.");
  }
} else if (opcao1 == 2) {
  const opcao2 = prompt("Deseja aprender C# (1) ou Java (2)?");
  if (opcao2 == 1) {
    const opcao3 = prompt(
      "Você escolheu C#, você deseja seguir se especializando nesta área ou seguir se desenvolvendo para virar Fullstack? (1) Sim, (2) Não",
    );
    if (opcao3 == 1) {
      while (linguagens != null) {
        linguagens = prompt(
          "Tem mais alguma tecnologia que você gostaria de aprender?",
        );
      }
    } else {
      alert("Ok, boa sorte na sua carreira de Back-end Java.");
    }
  } else if (opcao2 == 2) {
    const opcao3 = prompt(
      "Você escolheu Java, você deseja seguir se especializando nesta área ou seguir se desenvolvendo para virar Fullstack? (1) Sim, (2) Não",
    );
    if (opcao3 == 1) {
      while (linguagens != null) {
        linguagens = prompt(
          "Tem mais alguma tecnologia que você gostaria de aprender?",
        );
      }
    } else {
      alert("Ok, boa sorte na sua carreira de Back-end Java.");
    }
  } else {
    alert("Você não digitou um número válido.");
  }
} else {
  alert("Você não digitou um número válido.");
}
