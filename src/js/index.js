// Seleciona todos os botões com a classe .btn-troca-cor
const botoes = document.querySelectorAll(".btn-troca-cor");

// Para cada botão encontrado
botoes.forEach((botao) => {
  // Adiciona um evento de clique
  botao.addEventListener("click", () => {
    // Encontra o parágrafo dentro do mesmo bloco .paragrafo
    const paragrafo = botao.closest(".paragrafo").querySelector("p");

    
    // Se o botão já estiver ativado, desativa e esconde o parágrafo
    if (botao.classList.contains("ativo")) {
      botao.classList.remove("ativo"); // remove a marca de ativo
      paragrafo.setAttribute("hidden", ""); // esconde o <p>
    } 
    // Se não estiver ativado, ativa e mostra o parágrafo
    else {
      botao.classList.add("ativo"); // adiciona a marca de ativo
      paragrafo.removeAttribute("hidden"); // mostra o <p>
    }
  });
});