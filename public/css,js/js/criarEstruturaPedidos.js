document.addEventListener("DOMContentLoaded", function () {
    const btnComprovante = document.querySelector('.btn-carrinho'); // Botão de comprovante
    const pendentesDiv = document.querySelector('#pendentes'); // Div onde os pedidos estão sendo exibidos
    const comprovanteDiv = document.getElementById("comprovante"); // Div para gerar o comprovante
    const receiptDiv = document.querySelector('.receipt'); // Div onde os itens serão inseridos
    const numeroMesa = document.querySelector('#numeroMesa'); // Elemento para o número da mesa
    const metodoPagamento = document.querySelector('#metodoPagamento'); // Elemento para o método de pagamento
    const totalSpan = document.querySelector('.order-total span:last-child'); // Elemento para o total

    // Função para formatar a hora no formato desejado (horas:minutos AM/PM)
    function formatarHora(data) {
        let horas = data.getHours();
        let minutos = data.getMinutes();
        let periodo = horas >= 12 ? 'PM' : 'AM';

        horas = horas % 12;
        horas = horas ? horas : 12; // 0 hora é considerado 12
        minutos = minutos < 10 ? '0' + minutos : minutos; // Adiciona o zero à esquerda para minutos menores que 10

        return `${horas}:${minutos} ${periodo}`;
    }

    // Função para adicionar um item ao recibo
    function adicionarItemAoRecibo(item) {
        const nomePrato = item.querySelector('.h4-carrinho').textContent || 'Prato desconhecido';
        const preco = item.querySelector('.h4-preco-carrinho').textContent || 'R$0,00';
        const qtd = item.querySelector('.h4-qtd-carrinho').textContent.replace('Quantidade: ', '') || 1;
        const mesa = item.querySelector('.h4-mesa-carrinho').textContent || 'M1';
        const metodoPagamentoItem = item.querySelector('.h4-metodo-pagamento-carrinho').textContent || 'Pix';

        // Preenche as informações de mesa e método de pagamento (apenas uma vez)
        numeroMesa.textContent = mesa;
        metodoPagamento.textContent = metodoPagamentoItem;

        // Cria a estrutura do item no recibo
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('order-item');

        // Cria os elementos <span> para prato, quantidade, preço
        const pratoSpan = document.createElement('span');
        pratoSpan.textContent = nomePrato;

        const quantidadeSpan = document.createElement('span');
        quantidadeSpan.textContent = qtd;

        const precoSpan = document.createElement('span');
        precoSpan.textContent = preco;

        // Adiciona os spans dentro da div do item
        itemDiv.appendChild(pratoSpan);
        itemDiv.appendChild(quantidadeSpan);
        itemDiv.appendChild(precoSpan);

        // Adiciona o item na div receipt
        receiptDiv.querySelector('.order-info').appendChild(itemDiv);

        // Calcular o total
        calcularTotal(preco, qtd);
    }

    // Função para calcular o total
    function calcularTotal(preco, quantidade) {
        const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.').trim()); // Remove 'R$', vírgula e converte para número
        const totalAtual = parseFloat(totalSpan.textContent.replace('R$', '').replace(',', '.').trim()) || 0;

        // Calcula o novo total
        const totalFinal = totalAtual + (precoNumerico * quantidade);
        totalSpan.textContent = `R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
    }

    // Função para criar a estrutura do pedido dentro da div #pendentes
    function criarPedidoPendentes() {
        const itensCarrinho = document.querySelectorAll('.item-carrinho');

        if (itensCarrinho.length > 0) {
            itensCarrinho.forEach(item => {
                const estrutura = document.createElement('div');
                estrutura.classList.add('pedidos');

                const nomePrato = item.querySelector('.h4-carrinho').textContent || 'Prato desconhecido';
                const preco = item.querySelector('.h4-preco-carrinho').textContent || 'R$0,00';
                const qtd = item.querySelector('.h4-qtd-carrinho').textContent.replace('Quantidade: ', '') || 1;
                const mesa = item.querySelector('.h4-mesa-carrinho').textContent || 'M1';
                const metodoPagamento = item.querySelector('.h4-metodo-pagamento-carrinho').textContent || 'Pix';

                const dataAtual = new Date();
                const horas = formatarHora(dataAtual);

                estrutura.innerHTML = `
                    <h1 class="h1-blaconista h1">Método pagamento: ${metodoPagamento}</h1>
                    <p class="p-horas">${horas}</p>
                    <p class="p-mesas">Mesa: ${mesa}</p>
                    <p class="p-qtd">Quantidade: ${qtd}</p>
                    <p class="p-preco-total">${preco}</p>
                    <button class="bnt-aceitar">
                        <div class="texto-bnt">Aceitar</div>
                    </button>
                    <button class="bnt-remover">
                        <div class="texto-bnt">Remover</div>
                    </button>
                `;

                pendentesDiv.appendChild(estrutura);

                // Evento de remover pedido
                estrutura.querySelector('.bnt-remover').addEventListener('click', function () {
                    estrutura.remove();
                    atualizarTotal(preco, -qtd);
                });

                // Adiciona o item ao recibo
                adicionarItemAoRecibo(item);
            });
        }
    } 

    // Função para capturar o comprovante e gerar uma imagem
    function gerarComprovante() {
        const pedidosCarrinho = document.querySelectorAll('.item-carrinho'); // Pega os itens dentro do carrinho

        if (pedidosCarrinho.length > 0) {
            pedidosCarrinho.forEach(item => {
                adicionarItemAoRecibo(item); // Adiciona os itens ao recibo
            });

            html2canvas(comprovanteDiv).then((canvas) => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "comprovante.png";
                link.click();
            }).catch((error) => {
                console.error('Erro ao gerar comprovante:', error);
            });
        } else {
            alert('Não há pedidos para gerar o comprovante.');
        }
    }

    // Chama a função para criar pedidos assim que a página carrega
    criarPedidoPendentes();

    // Adiciona o evento de clique ao botão de gerar comprovante
    if (btnComprovante) {
        btnComprovante.addEventListener('click', function() {
            gerarComprovante(); // Gera o comprovante após adicionar os itens
        });
    }
});
