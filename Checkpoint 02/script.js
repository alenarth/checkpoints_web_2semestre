// Variável declarada fora das funções: ela mantém o valor entre um clique e outro
let pontuacao = 0;

// Soma um ponto e atualiza o placar
function adicionarPonto() {
  pontuacao++;
  document.getElementById("pontuacao").innerText = pontuacao;
  document.getElementById("mensagem").innerText = "";
}

// Retira um ponto, mas não deixa a pontuação ficar abaixo de zero
function retirarPonto() {
  if (pontuacao === 0) {
    document.getElementById("mensagem").innerText = "A pontuação não pode ficar abaixo de zero.";
    return;
  }

  pontuacao--;
  document.getElementById("pontuacao").innerText = pontuacao;
  document.getElementById("mensagem").innerText = "";
}
