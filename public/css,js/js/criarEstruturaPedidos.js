document.addEventListener("DOMContentLoaded", function () {
    const btnComprovante = document.querySelector('.btn-carrinho'); // Botão de comprovante
    const pendentesDiv = document.querySelector('#pendentes'); // Div onde os pedidos estão sendo exibidos
    const comprovanteDiv = document.getElementById("comprovante"); // Div para gerar o comprovante
    const receiptDiv = document.querySelector('.receipt'); // Div onde os itens serão inseridos
    const totalSpan = document.querySelector('.order-total span:last-child'); // Elemento para o total
    const pedidosCarrinhoDiv = document.querySelector('.pedidos-carrinho'); // Div onde os pedidos serão exibidos após o clique
    const numeroMesaComprovante = document.querySelector('.numero-mesa-comprovante'); // Elemento onde será inserido o número da mesa
    const tipoPagamentoComprovante = document.querySelector('.tipo-de-pagamento-comprovante'); // Elemento onde será inserido o tipo de pagamento

    // Array de objetos que armazena as informações dos pedidos
    const pedidos = [
        {
            nomePrato: "Salada Vegana",
            quantidade: 4,
            preco: "R$32,00",
            mesa: "M4",
            metodoPagamento: "Pix",
            imagem: "/public/css,js/img/prato-2.png"
        },
        {
            nomePrato: "Frango Grelhado",
            quantidade: 2,
            preco: "R$25,00",
            mesa: "M1",
            metodoPagamento: "Dinheiro",
            imagem: "/public/css,js/img/prato-2.png"
        },
        {
            nomePrato: "Pizza Margherita",
            quantidade: 1,
            preco: "R$45,00",
            mesa: "M3",
            metodoPagamento: "Cartão",
            imagem: "/public/css,js/img/prato-2.png"
        },
        {
            nomePrato: "Bolo de Chocolate",
            quantidade: 2,
            preco: "R$15,00",
            mesa: "M4",
            metodoPagamento: "Pix",
            imagem: "/public/css,js/img/prato-2.png"
        }
    ];

    // Função para formatar a hora no formato desejado (horas:minutos AM/PM)
    function formatarHora(data) {
        let horas = data.getHours();
        let minutos = data.getMinutes();
        let periodo = horas >= 12 ? 'PM' : 'AM';

        horas = horas % 12 || 12;
        minutos = minutos < 10 ? '0' + minutos : minutos;

        return `${horas}:${minutos} ${periodo}`;
    }

    // Função para formatar a data no formato desejado (dia/mês/ano)
    function formatarData(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    // Função para criar um card para cada pedido
    function criarPedidoPendentes() {
        pedidos.forEach((pedido, index) => {
            const estrutura = document.createElement('div');
            estrutura.classList.add('pedidos');

            const dataAtual = new Date();
            const dataFormatada = formatarData(dataAtual);
            const horas = formatarHora(dataAtual);

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

            // Evento de clique para adicionar todos os pedidos da mesma mesa ao carrinho
            estrutura.addEventListener('click', function () {
                const mesa = pedido.mesa; // Identifica a mesa clicada
                const tipoPagamento = pedido.metodoPagamento;

                // Atualiza os valores no comprovante
                numeroMesaComprovante.textContent = mesa;
                tipoPagamentoComprovante.textContent = tipoPagamento;

                // Filtra os pedidos da mesma mesa e adiciona ao carrinho
                const pedidosMesa = pedidos.filter(p => p.mesa === mesa);
                pedidosMesa.forEach(pedidoRelacionado => {
                    const indexRelacionado = pedidos.indexOf(pedidoRelacionado);
                    adicionarAoCarrinho(indexRelacionado);
                });
            });

            // Evento de remover pedido
            estrutura.querySelector('.bnt-remover').addEventListener('click', function () {
                estrutura.remove();
                atualizarTotal(pedido.preco, -pedido.quantidade);
            });
        });
    }

    // Função para adicionar o pedido ao carrinho
    function adicionarAoCarrinho(index) {
        const pedido = pedidos[index];

        const itemCarrinhoDiv = document.createElement('div');
        itemCarrinhoDiv.classList.add('item-carrinho');

        itemCarrinhoDiv.innerHTML = `
            <div class="img-carrinho">
                <img src="${pedido.imagem}" class="img-prato" alt="${pedido.nomePrato}">
            </div>
            <h4 class="h4-carrinho">${pedido.nomePrato}</h4>
            <h4 class="h4-preco-carrinho">${pedido.preco}</h4>
            <h4 class="h4-qtd-carrinho">Quantidade: ${pedido.quantidade}</h4>
        `;

        pedidosCarrinhoDiv.appendChild(itemCarrinhoDiv);
        atualizarTotal(pedido.preco, pedido.quantidade);
    }

    // Função para calcular e atualizar o total
    function atualizarTotal(preco, quantidade) {
        const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.').trim());
        const totalAtual = parseFloat(totalSpan.textContent.replace('R$', '').replace(',', '.').trim()) || 0;
        const totalFinal = totalAtual + (precoNumerico * quantidade);
        totalSpan.textContent = `R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
    }

    criarPedidoPendentes();
});
