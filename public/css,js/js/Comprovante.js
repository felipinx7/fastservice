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
        const numeroMesa = document.getElementById("numeroMesa").textContent.trim(); // Número da mesa no comprovante
        const itensPedidoDiv = document.getElementById("itensPedido"); // Div onde os itens serão inseridos
        const valorTotalSpan = document.getElementById("valorTotal"); // Local onde o total será exibido

        // Limpa os itens anteriores para evitar duplicações
        itensPedidoDiv.innerHTML = "";
        let total = 0;

        // Obtém todos os itens do carrinho
        const itensCarrinho = document.querySelectorAll(".item-carrinho");

        // Variáveis de controle para verificar se há itens para o comprovante
        let encontrouItens = false;

        itensCarrinho.forEach(item => {
            const mesaItem = item.querySelector(".h4-mesa-carrinho").textContent.trim();
            
            // Filtra os itens pela mesa
            if (mesaItem === numeroMesa) {
                encontrouItens = true; // Marca que há itens para a mesa selecionada

                const nomePrato = item.querySelector(".h4-carrinho").textContent || "Prato desconhecido";
                const qtd = parseInt(item.querySelector(".h4-qtd-carrinho").textContent.replace("Quantidade: ", "")) || 1;
                const preco = parseFloat(item.querySelector(".h4-preco-carrinho").textContent.replace("R$", "").replace(",", ".").trim()) || 0;
                const metodoPagamento = item.querySelector(".h4-metodo-pagamento-carrinho").textContent || "Método desconhecido";
                const imagemPrato = item.querySelector(".img-prato").src || "/public/css,js/img/prato-2.png";

                // Calcula o preço total do item (preço * quantidade)
                const totalItem = preco * qtd;
                total += totalItem;

                // Cria o HTML para o item no comprovante
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("order-item");

                itemDiv.innerHTML = `
                    <div class="order-item-img">
                        <img src="${imagemPrato}" alt="Imagem do prato">
                    </div>
                    <div class="order-item-info">
                        <span><strong>Nome do Prato:</strong> ${nomePrato}</span>
                        <span><strong>Quantidade:</strong> ${qtd}</span>
                        <span><strong>Preço Unitário:</strong> ${formatarMoeda(preco)}</span>
                        <span><strong>Preço Total:</strong> ${formatarMoeda(totalItem)}</span>
                        <span><strong>Mesa:</strong> ${mesaItem}</span>
                        <span><strong>Método de Pagamento:</strong> ${metodoPagamento}</span>
                    </div>
                `;
                itensPedidoDiv.appendChild(itemDiv);
            }
        });

        // Verifica se encontrou itens, caso contrário exibe mensagem de erro
        if (!encontrouItens) {
            alert("Nenhum item encontrado para a mesa selecionada.");
            return;
        }

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
