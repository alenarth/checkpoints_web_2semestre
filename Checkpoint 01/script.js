// Calcula o valor total da compra (preço unitário x quantidade)
function calcularTotal() {
  // .value pega o que foi digitado e Number() converte o texto em número
  let preco = Number(document.getElementById("preco").value);
  let quantidade = Number(document.getElementById("quantidade").value);

  // Evita calcular com campos vazios ou valores inválidos
  if (preco <= 0 || quantidade <= 0) {
    document.getElementById("resultado").innerText = "Informe um preço e uma quantidade maiores que zero.";
    return;
  }

  let total = preco * quantidade;

  // toFixed(2) deixa duas casas decimais e replace troca o ponto pela vírgula (padrão brasileiro)
  let totalFormatado = total.toFixed(2).replace(".", ",");

  // innerText atualiza o texto do parágrafo de resultado na página
  document.getElementById("resultado").innerText = "Total da compra: R$ " + totalFormatado;
}
