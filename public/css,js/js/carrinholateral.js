// Seleciona os elementos
const carrinho = document.querySelector(".container-carrinho");
const banner = document.querySelector(".img-banner");
const iconeFechar = document.querySelector(".icone-fechar");
const pendentes = document.getElementById('pendentes');
const bntAceitar = document.querySelectorAll('.bnt-aceitar');
const bntRemover = document.querySelectorAll('.bnt-remover');
const bntRemoverItem = document.querySelectorAll('.bnt-remover-item');

// Impede que o carrinho seja aberto ao clicar nos botões de remover ou aceitar
[bntAceitar, bntRemover, bntRemoverItem].forEach(buttons => {
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede que o clique no botão se propague
        });
    });
});

// Função para abrir o carrinho
pendentes.addEventListener('click', function(event) {
    // Impede que o carrinho seja aberto ao clicar dentro de outros elementos
    if (event.target.closest('.bnt-aceitar, .bnt-remover, .bnt-remover-item')) {
        return; // Impede a propagação do clique, se for no botão
    }

    // Adiciona a classe 'comprovante-active' ao #pendentes
    pendentes.classList.toggle('comprovante-active');

    // Alterna o display da .container-carrinho
    if (pendentes.classList.contains('comprovante-active')) {
        carrinho.style.display = 'block'; // Mostra o carrinho
        setTimeout(() => {
            carrinho.style.opacity = '1'; // Torna o carrinho visível
        }, 10);

        // Modificações do banner
        if (banner) {
            banner.style.marginLeft = "-9rem";
            banner.style.width = "50rem";
        }

        // Estilos para os elementos do carrinho
        document.querySelectorAll(".radio-inputs").forEach(element => {
            element.style.position = "relative";
            element.style.display = "flex";
            element.style.justifyContent = "space-between";
            element.style.flexWrap = "nowrap";
            element.style.borderRadius = "0.5rem";
            element.style.backgroundColor = "#EEE";
            element.style.boxSizing = "border-box";
            element.style.padding = "0.25rem";
            element.style.width = "52rem";
            element.style.fontSize = "14px";
            element.style.marginLeft = "3rem";
            element.style.zIndex = "10";
            element.style.transform = "translateY(16rem)";
            element.style.transition = "all 0.3s ease";
        });

        document.querySelectorAll(".pedidos").forEach(element => {
            element.style.border = "solid 2px var(--cor-de-variação)";
            element.style.borderRadius = "1.3rem";
            element.style.width = "51.5rem";
            element.style.height = "5rem";
            element.style.transform = "translate(9rem, 0rem)";
            element.style.marginTop = "1rem";
            element.style.transition = "all 0.3s ease";
        });

        document.querySelectorAll(".p-preco-total").forEach(element => {
            element.style.position = "absolute";
            element.style.color = "black";
            element.style.fontWeight = "700";
            element.style.transform = "translate(19rem, 3rem)";
            element.style.transition = "transform 0.3s ease, color 0.3s ease";
        });

        document.querySelectorAll(".bnt-remover-item, .bnt-remover, .bnt-aceitar").forEach(element => {
            element.style.position = "absolute";
            element.style.height = "2rem";
            element.style.marginTop = "-0.11rem";
            element.style.textAlign = "center";
            element.style.top = "0";
            element.style.border = "none";
            element.style.borderRadius = "10px";
            element.style.transition = "all 0.3s ease";
            element.style.cursor = "pointer";
            element.style.color = "white";
            element.style.fontWeight = "700";
        });

        document.querySelectorAll(".bnt-remover-item").forEach(element => {
            element.style.width = "10rem";
            element.style.transform = "translate(25rem, 2.5rem)";
            element.style.backgroundColor = "#555";
        });

        document.querySelectorAll(".bnt-remover").forEach(element => {
            element.style.width = "8rem";
            element.style.transform = "translate(36rem, 2.5rem)";
            element.style.backgroundColor = "#555";
        });

        document.querySelectorAll(".bnt-aceitar").forEach(element => {
            element.style.width = "6rem";
            element.style.transform = "translate(45rem, 2.5rem)";
            element.style.backgroundColor = "rgb(76, 236, 76)";
        });

        document.querySelectorAll(".p-horas").forEach(element => {
            element.style.position = "absolute";
            element.style.fontSize = "0.8rem";
            element.style.color = "var(--cor-da-fonte)";
            element.style.transform = "translate(46rem, 0.4rem)";
            element.style.transition = "all 0.3s ease";
        });
    } else {
        // Restaura o estado original caso a classe 'comprovante-active' seja removida
        carrinho.style.opacity = '0';
        setTimeout(() => {
            carrinho.style.display = 'none';
        }, 300);

        // Restaura o banner ao estado inicial
        if (banner) {
            banner.style = ''; // Reseta os estilos do banner
        }

        // Restaura os estilos dos elementos do carrinho
        document.querySelectorAll(".radio-inputs").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        document.querySelectorAll(".pedidos").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        document.querySelectorAll(".p-preco-total").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        document.querySelectorAll(".bnt-remover-item, .bnt-remover, .bnt-aceitar").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        document.querySelectorAll(".bnt-remover-item").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        document.querySelectorAll(".bnt-remover").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        document.querySelectorAll(".bnt-aceitar").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        document.querySelectorAll(".p-horas").forEach(element => {
            element.style = ''; // Reseta os estilos
        });
    }
});

// Função para fechar o carrinho
iconeFechar.addEventListener("click", function() {
    // Esconde o carrinho com transição suave
    carrinho.style.opacity = "0";
    setTimeout(() => {
        carrinho.style.display = "none"; // Esconde o carrinho após a transição
    }, 300);

    // Restaura o banner ao estado inicial
    if (banner) {
        banner.style = ''; // Reseta os estilos do banner
    }

    // Restaura os estilos dos elementos do carrinho ao estado inicial
    document.querySelectorAll(".radio-inputs").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".pedidos").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".p-preco-total").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".bnt-remover-item, .bnt-remover, .bnt-aceitar").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".bnt-remover-item").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".bnt-remover").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".bnt-aceitar").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".p-horas").forEach(element => {
        element.style = ''; // Reseta os estilos
    });
});
