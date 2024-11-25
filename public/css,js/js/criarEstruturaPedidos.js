document.addEventListener("DOMContentLoaded", function () {
    const btnComprovante = document.querySelector('.btn-carrinho'); // Botão de comprovante
    const pendentesDiv = document.querySelector('#pendentes'); // Div onde os pedidos estão sendo exibidos
    const comprovanteDiv = document.getElementById("comprovante"); // Div para gerar o comprovante
    const receiptDiv = document.querySelector('.receipt'); // Div onde os itens serão inseridos
    const numeroMesa = document.querySelector('#numeroMesa'); // Elemento para o número da mesa
    const metodoPagamento = document.querySelector('#metodoPagamento'); // Elemento para o método de pagamento
    const totalSpan = document.querySelector('.order-total span:last-child'); // Elemento para o total

    // Array de objetos que armazena as informações dos pedidos
    const pedidos = [
        {
            nomePrato: "Prato 1",
            quantidade: 2,
            preco: "R$25,00",
            mesa: "M1",
            metodoPagamento: "Pix"
        },
        {
            nomePrato: "Prato 2",
            quantidade: 1,
            preco: "R$15,00",
            mesa: "M2",
            metodoPagamento: "Dinheiro"
        },
        {
            nomePrato: "Prato 3",
            quantidade: 3,
            preco: "R$45,00",
            mesa: "M3",
            metodoPagamento: "Cartão"
        }
    ];

    // Função para formatar a data no formato desejado (dia/mês/ano)
    function formatarData(data) {
        const dia = String(data.getDate()).padStart(2, '0'); // Adiciona 0 à esquerda se necessário
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mes começa do 0, por isso somamos 1
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

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

    // Função para criar um card para cada pedido
    function criarPedidoPendentes() {
        if (pedidos.length > 0) {
            pedidos.forEach(pedido => {
                const estrutura = document.createElement('div');
                estrutura.classList.add('pedidos');

                const dataAtual = new Date();
                const dataFormatada = formatarData(dataAtual); // Formata a data
                const horas = formatarHora(dataAtual); // Formata a hora

                estrutura.innerHTML = `
                    <h1 class="h1-blaconista h1">Método pagamento: ${pedido.metodoPagamento}</h1>
                    <p class="p-horas">${dataFormatada} ${horas}</p>
                    <p class="p-mesas">Mesa: ${pedido.mesa}</p>
                    <p class="p-qtd">Quantidade: ${pedido.quantidade}</p>
                    <p class="p-preco-total">${pedido.preco}</p>
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
                    atualizarTotal(pedido.preco, -pedido.quantidade);
                });
            });
        }
    }

    // Função para calcular e atualizar o total
    function atualizarTotal(preco, quantidade) {
        const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.').trim()); // Remove 'R$', vírgula e converte para número
        const totalAtual = parseFloat(totalSpan.textContent.replace('R$', '').replace(',', '.').trim()) || 0;

        // Calcula o novo total
        const totalFinal = totalAtual + (precoNumerico * quantidade);
        totalSpan.textContent = `R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
    }

    // Função para gerar o comprovante
    function gerarComprovante() {
        if (pedidos.length > 0) {
            pedidos.forEach(pedido => {
                // Cria a estrutura do recibo
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('order-item');

                const pratoSpan = document.createElement('span');
                pratoSpan.textContent = pedido.nomePrato;

                const quantidadeSpan = document.createElement('span');
                quantidadeSpan.textContent = pedido.quantidade;

                const precoSpan = document.createElement('span');
                precoSpan.textContent = pedido.preco;

                // Adiciona os spans à div do item
                itemDiv.appendChild(pratoSpan);
                itemDiv.appendChild(quantidadeSpan);
                itemDiv.appendChild(precoSpan);

                // Adiciona o item à div receipt
                receiptDiv.querySelector('.order-info').appendChild(itemDiv);
            });

            // Gera a imagem do comprovante
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

    // Adiciona o evento de clique ao botão de gerar comprovante
    if (btnComprovante) {
        btnComprovante.addEventListener('click', function () {
            gerarComprovante(); // Gera o comprovante após adicionar os itens
        });
    }

    // Chama a função para criar os pedidos assim que a página carrega
    criarPedidoPendentes();
});
