let num1, num2;
let pontuacao = 0;

function novaPergunta() {
  num1 = Math.floor(Math.random() * 10) + 1; // Números de 1 a 10
  num2 = Math.floor(Math.random() * 10) + 1; // Números de 1 a 10
  document.getElementById('pergunta').textContent = `${num1} x ${num2} = ?`;
  document.getElementById('feedback').textContent = '';

  const respostaCorreta = num1 * num2;
  let opcoes = [respostaCorreta];
  
  while (opcoes.length < 4) {
    let opcao = Math.floor(Math.random() * 100) + 1; // Números aleatórios até 100
    if (!opcoes.includes(opcao)) {
      opcoes.push(opcao);
    }
  }
  
  opcoes = opcoes.sort(() => Math.random() - 0.5);
  
  const buttons = document.querySelectorAll('.opcao');
  buttons.forEach((button, index) => {
    button.textContent = opcoes[index];
  });
}

function verificarResposta(opcao) {
  const respostaCorreta = num1 * num2;
  const respostas = document.querySelectorAll('.opcao');
  const respostaSelecionada = parseInt(respostas[opcao].textContent);

  if (respostaSelecionada === respostaCorreta) {
    pontuacao++;
    document.getElementById('feedback').textContent = 'Correto! 🎉';
    document.getElementById('feedback').style.color = 'green';
    document.getElementById('pontuacao').textContent = `Pontuação: ${pontuacao}`;
    setTimeout(novaPergunta, 500); // Atualiza a pergunta após resposta
  } else {
    document.getElementById('feedback').textContent = 'Errado, tente de novo! ❌';
    document.getElementById('feedback').style.color = 'red';
  }
}

function iniciarJogo() {
  novaPergunta();
}

iniciarJogo();
