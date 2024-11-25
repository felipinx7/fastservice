document.addEventListener("DOMContentLoaded", function () {
    const btnGerarComprovante = document.getElementById("gerarComprovante");

    // Função para formatar valores monetários
    function formatarMoeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    // Função para gerar o comprovante
    function gerarComprovante() {
        // Pegando os valores de número da mesa e método de pagamento
        const numeroMesa = document.querySelector(".numero-mesa-comprovante").textContent.trim(); // Número da mesa
        const metodoPagamento = document.querySelector(".tipo-de-pagamento-comprovante").textContent.trim(); // Método de pagamento

        // Atualizando as informações no comprovante
        document.querySelector("#numeroMesa").textContent = numeroMesa; // Atualiza o número da mesa
        document.querySelector("#metodoPagamento").textContent = metodoPagamento; // Atualiza o método de pagamento

        const itensPedidoDiv = document.querySelector(".order-info"); // Div onde os itens serão inseridos
        const valorTotalSpan = document.querySelector(".order-total span:nth-child(2)"); // Local onde o total será exibido

        // Limpa os itens anteriores
        const orderItems = document.querySelectorAll(".order-item:not(.order-item-header)");
        orderItems.forEach(item => item.remove());

        let total = 0;

        // Obtém todos os itens do carrinho
        const itensCarrinho = document.querySelectorAll(".item-carrinho");

        if (itensCarrinho.length === 0) {
            alert("O carrinho está vazio. Adicione itens antes de gerar o comprovante.");
            return;
        }

        itensCarrinho.forEach(item => {
            const nomePrato = item.querySelector(".h4-carrinho").textContent || "Prato desconhecido";
            const qtd = parseInt(item.querySelector(".h4-qtd-carrinho").textContent.replace("Quantidade: ", "")) || 1;
            const preco = parseFloat(item.querySelector(".h4-preco-carrinho").textContent.replace("R$", "").replace(",", ".").trim()) || 0;
            const imagemPrato = item.querySelector(".img-prato").src || "";

            const totalItem = preco * qtd;
            total += totalItem;

            // Cria o HTML para o item no comprovante
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("order-item");

            itemDiv.innerHTML = `
                <span>${nomePrato}</span>
                <span class="quantidade-comprovante">${qtd}</span>
                <span>${formatarMoeda(preco)}</span>
            `;
            itensPedidoDiv.appendChild(itemDiv);
        });

        // Atualiza o total no comprovante
        valorTotalSpan.textContent = formatarMoeda(total);

        // Gera a imagem do comprovante usando html2canvas
        html2canvas(document.getElementById("comprovante")).then(canvas => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "comprovante.png";
            link.click();
        }).catch(error => {
            console.error("Erro ao gerar o comprovante:", error);
        });
    }

    // Evento para gerar o comprovante
    btnGerarComprovante.addEventListener("click", gerarComprovante);
});
