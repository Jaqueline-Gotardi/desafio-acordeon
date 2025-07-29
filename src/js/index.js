/* Pontos de atenção:
ao clicar em uma pergunta deve acontecer
uma animação de acordeon para abrir o item
e mostrar o texto escondido, 


ao clicar em um item para abri-lo todos os
outros itens devem ser fechados. */ 


const botoes = document.querySelectorAll(".btn-troca-cor");

 botoes.forEach((botao) => {
  
    botao.addEventListener("click", () => {
        botoes.forEach((b) => {
            const img = b.querySelector("img");
                img.setAttribute("src", "./src/imagens/seta.png");
            });

            const imgClicada = botao.querySelector("img");
            imgClicada.setAttribute("src", "./src/imagens/setaLaranja.png");
    });
});