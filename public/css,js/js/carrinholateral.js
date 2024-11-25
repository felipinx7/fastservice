// Seleciona os elementos
const carrinho = document.querySelector(".container-carrinho");
const banner = document.querySelector(".img-banner");
const iconeFechar = document.querySelector(".bi-x.thick-x-icon"); // Seleciona o ícone de fechar
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

// Função para abrir ou fechar o carrinho
pendentes.addEventListener('click', function(event) {
    // Verifica se o clique ocorreu dentro de um botão de ação (aceitar, remover, etc.)
    if (event.target.closest('.bnt-aceitar, .bnt-remover, .bnt-remover-item')) {
        return; // Não faz nada se o clique for em um dos botões
    }

    // Caso contrário, alterna a visibilidade do carrinho
    pendentes.classList.toggle('comprovante-active');

    if (pendentes.classList.contains('comprovante-active')) {
        // Abre o carrinho
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

        // Ajustes de estilo para os itens
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
            element.style.transform = "translate(31rem, 3rem)";
            element.style.transition = "transform 0.3s ease, color 0.3s ease";
        });

        // Novo código para p-preco-total1
        document.querySelectorAll(".p-preco-total1").forEach(element => {
            element.style.position = "absolute";
            element.style.color = "black";
            element.style.fontWeight = "700";
            element.style.transform = "translate(45rem, 3rem)";
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

        // Novo código para bnt-mover1
        document.querySelectorAll(".btn-mover1").forEach(element => {
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
            element.style.transform = "translate(-15rem, 2.5rem)";
        });

        document.querySelectorAll(".p-horas").forEach(element => {
            element.style.position = "absolute";
            element.style.fontSize = "0.8rem";
            element.style.color = "var(--cor-da-fonte)";
            element.style.transform = "translate(43rem, 0.4rem)";
            element.style.transition = "all 0.3s ease";
        });
    } else {
        // Fecha o carrinho e reseta os estilos
        carrinho.style.opacity = '0';
        setTimeout(() => {
            carrinho.style.display = 'none';
        }, 300);

        // Restaura o banner ao estado inicial
        if (banner) {
            banner.style = ''; // Reseta os estilos do banner
        }

        // Reseta os estilos dos elementos do carrinho
        document.querySelectorAll(".radio-inputs").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        document.querySelectorAll(".pedidos").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        document.querySelectorAll(".p-preco-total").forEach(element => {
            element.style = ''; // Reseta os estilos
        });

        // Reseta os estilos de .p-preco-total1
        document.querySelectorAll(".p-preco-total1").forEach(element => {
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

        document.querySelectorAll(".btn-mover1").forEach(element => {
            element.style = ''; // Reseta os estilos do botão .btn-mover1
        });

        document.querySelectorAll(".p-horas").forEach(element => {
            element.style = ''; // Reseta os estilos
        });
    }
});

// Função para fechar o carrinho ao clicar no ícone de fechar
iconeFechar.addEventListener("click", function() {
    // Remove a classe 'comprovante-active' de todos os elementos
    document.querySelectorAll('.comprovante-active').forEach(element => {
        element.classList.remove('comprovante-active');
    });

    // Fecha o carrinho e reseta os estilos
    carrinho.style.opacity = "0";
    setTimeout(() => {
        carrinho.style.display = "none"; // Esconde o carrinho após a transição
    }, 300);

    // Restaura o banner ao estado inicial
    if (banner) {
        banner.style = ''; // Reseta os estilos do banner
    }

    // Reseta os estilos dos elementos do carrinho ao estado inicial
    document.querySelectorAll(".radio-inputs").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".pedidos").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".p-preco-total").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".p-preco-total1").forEach(element => {
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

    document.querySelectorAll(".btn-mover1").forEach(element => {
        element.style = ''; // Reseta os estilos
    });

    document.querySelectorAll(".p-horas").forEach(element => {
        element.style = ''; // Reseta os estilos
    });
});
