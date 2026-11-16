// getAttribute: lê o valor atual de um atributo do elemento
// setAttribute: define (ou altera) o valor de um atributo do elemento

function trocarProduto() {
  const imagem = document.getElementById("imagemProduto");
  const imagemAtual = imagem.getAttribute("src");

  // Verifica qual produto está na tela e troca pelo outro
  if (imagemAtual === "produto-a.png") {
    imagem.setAttribute("src", "produto-b.png");
    imagem.setAttribute("alt", "Produto B: relógio inteligente preto");
  } else {
    imagem.setAttribute("src", "produto-a.png");
    imagem.setAttribute("alt", "Produto A: caneca de cerâmica azul");
  }
}
