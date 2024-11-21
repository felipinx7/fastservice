document.addEventListener('DOMContentLoaded', function() {
document.getElementById("open_btn").addEventListener("click", function() {
    // Alterna a classe nav-open para cada um dos elementos principais
    document.getElementById("open_btn").classList.toggle("nav-open");
    document.querySelector(".container-pratos-list")?.classList.toggle("nav-open");
    document.querySelector(".radio-inputs")?.classList.toggle("nav-open");
    document.querySelector(".img-banner")?.classList.toggle("nav-open");
    document.querySelector(".scrollbar")?.classList.toggle("nav-open");
    document.querySelector(".container")?.classList.toggle("nav-open");
    document.querySelector(".bnt-comprovante")?.classList.toggle("nav-open");

    // Alterna a classe nav-open para os elementos com a classe "remover"
    document.querySelectorAll(".remover").forEach(element => element.classList.toggle("nav-open"));

    // Alterna a classe nav-open para os botões de remover (bnt-remover) e seus filhos
    document.querySelectorAll(".bnt-remover").forEach(element => element.classList.toggle("nav-open"));

    document.querySelectorAll(".bnt-remover-item").forEach(element => element.classList.toggle("nav-open"));

    // Alterna a classe nav-open para outros elementos
    document.querySelector(".container-adicionar-pratos")?.classList.toggle("nav-open");
    document.querySelector(".container-remover-pratos")?.classList.toggle("nav-open");
    document.querySelector(".container-avaliacao")?.classList.toggle("nav-open");
    document.querySelector(".div-avaliacoes")?.classList.toggle("nav-open");
    document.querySelector(".avaliacao")?.classList.toggle("nav-open");
    document.querySelector(".texto-h1-parte-avalicao")?.classList.toggle("nav-open");
    document.querySelector(".filtro-avaliacao")?.classList.toggle("nav-open");
    document.querySelector(".pedido")?.classList.toggle("nav-open");

    // Alterna a classe nav-open para todos os elementos com a classe "item"
    document.querySelectorAll(".item").forEach(element => element.classList.toggle("nav-open"));

    // Seleciona todos os elementos especificados e alterna a classe "nav-open" em cada um
    const elementosPedidos = document.querySelectorAll(
        ".pedidos, .p-horas, .p-mesas, .p-preco-total, .bnt-aceitar, .bnt-comprovante, .bnt-remover, .bnt-remover-item"
    );

    elementosPedidos.forEach(element => {
        element.classList.toggle("nav-open");
    });
});
});
