const botoes = document.querySelectorAll(".btn-troca-cor");

 botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        if (botao.classList.contains("ativo")) {
   // botão já estava ativado → então desativa


        botoes.forEach((b) => {
            b.classList.remove("ativo");
            
            /* const img = b.querySelector("img");
            img.setAttribute("src", "./src/imagens/seta.png"); */

            const paragrafo = b.closest(".paragrafo").querySelector("p");
            paragrafo.setAttribute("hidden", ""); 

            

        }); /* }else { */

        
   // botão não estava ativado → então ativa
} 
        botao.classList.add("ativo");

            /* const imgClicada = botao.querySelector("img");
            imgClicada.setAttribute("src", "./src/imagens/setaLaranja.png"); */
            
            const container = botao.closest(".paragrafo");
            const paragrafoAtivo = container.querySelector("p");
            
            paragrafoAtivo.removeAttribute("hidden");
    });
}); 