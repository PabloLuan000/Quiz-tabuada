let num1, num2;
let pontuacao = 0;
let fase = 1;
let tempo = 60;
let intervalo;

// Função para gerar uma nova pergunta
function novaPergunta() {
  num1 = gerarNumero(fase);
  num2 = gerarNumero(fase);
  document.getElementById('pergunta').textContent = `${num1} x ${num2} = ?`;
  document.getElementById('feedback').textContent = '';

  const respostaCorreta = num1 * num2;
  const opcoes = gerarOpcoes(respostaCorreta);
  
  atualizarBotoes(opcoes);
}

// Função para gerar números baseados na fase
function gerarNumero(fase) {
  return Math.floor(Math.random() * (fase * 3)) + 1;
}

// Função para gerar opções de resposta
function gerarOpcoes(respostaCorreta) {
  const opcoes = [respostaCorreta];
  while (opcoes.length < 4) {
    let opcao = gerarNumero(fase);
    if (!opcoes.includes(opcao)) {
      opcoes.push(opcao);
    }
  }
  return opcoes.sort(() => Math.random() - 0.5);
}

// Função para atualizar o texto dos botões com as opções
function atualizarBotoes(opcoes) {
  const buttons = document.querySelectorAll('.opcao');
  buttons.forEach((button, index) => {
    button.textContent = opcoes[index];
  });
}

// Função para verificar a resposta do usuário
function verificarResposta(opcao) {
  const respostaCorreta = num1 * num2;
  const respostas = document.querySelectorAll('.opcao');
  const respostaSelecionada = parseInt(respostas[opcao].textContent);

  if (respostaSelecionada === respostaCorreta) {
    pontuacao++;
    document.getElementById('feedback').textContent = 'Correto! 🎉';
    document.getElementById('feedback').style.color = 'green';
    document.getElementById('pontuacao').textContent = `Pontuação: ${pontuacao}`;

    if (pontuacao % 5 === 0) {
      fase++;
      document.getElementById('fase').textContent = `Fase: ${fase}`;
    }

    setTimeout(novaPergunta, 500); // Atualiza a pergunta após resposta
  } else {
    document.getElementById('feedback').textContent = 'Errado, tente de novo! ❌';
    document.getElementById('feedback').style.color = 'red';
  }
}

// Função para atualizar o cronômetro
function atualizarCronometro() {
  tempo--;
  document.getElementById('cronometro').textContent = `Tempo: ${tempo}s`;
  
  if (tempo === 0) {
    clearInterval(intervalo);
    alert(`Tempo esgotado! Sua pontuação final foi: ${pontuacao}`);
    location.reload(); // Recarrega o jogo ao fim do tempo
  }
}

// Função para iniciar o jogo
function iniciarJogo() {
  novaPergunta();
  intervalo = setInterval(atualizarCronometro, 1000); // Atualiza o cronômetro a cada segundo
}

iniciarJogo();
