document.addEventListener("DOMContentLoaded", function () {
    const btnComprovante = document.querySelector('.btn-carrinho'); // Botão de comprovante
    const pendentesDiv = document.querySelector('#pendentes'); // Div onde os pedidos estão sendo exibidos
    const comprovanteDiv = document.getElementById("comprovante"); // Div para gerar o comprovante
    const totalSpan = document.querySelector('.order-total span:last-child'); // Elemento para o total
    const pedidosCarrinhoDiv = document.querySelector('.pedidos-carrinho'); // Div onde os pedidos filtrados serão exibidos no comprovante
    const numeroMesaComprovante = document.querySelector('.numero-mesa-comprovante'); // Elemento onde será inserido o número da mesa
    const tipoPagamentoComprovante = document.querySelector('.tipo-de-pagamento-comprovante'); // Elemento onde será inserido o tipo de pagamento

    // Array de objetos que armazena as informações dos pedidos
    const pedidos = [
            // // Mesa 1
            // // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M1", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M1", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M1", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M1", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            
            // // Mesa 2
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M2", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M2", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M2", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M2", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            
            // // Mesa 3
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa:npm "M3", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M3", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M3", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M3", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            
            // // Mesa 4
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M4", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M4", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M4", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M4", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            
            // // Mesa 5
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M5", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M5", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M5", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
            // { nomePrato: "Salada Vegana", quantidade: 4, preco: "R$32,00", mesa: "M5", metodoPagamento: "Pix", imagem: "/public/css,js/img/prato-2.png" },
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

    const dataAtual = new Date();
    const dataFormatada = formatarData(dataAtual);
    const horas = formatarHora(dataAtual);

    // Função para formatar a data no formato desejado (dia/mês/ano)
    function formatarData(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    // Função para formatar o total
    function calcularTotal(pedidosMesa) {
        let total = 0;
        pedidosMesa.forEach(pedido => {
            const precoNumerico = parseFloat(pedido.preco.replace('R$', '').replace(',', '.').trim());
            total += precoNumerico * pedido.quantidade;
        });
        return total; // Retorna o total numérico
    }

    // Função para calcular o subtotal e desconto
    function calcularResumo(pedidosMesa) {
        let subTotal = calcularTotal(pedidosMesa); // Total sem desconto
        let desconto = subTotal * 0.1; // Exemplo: 10% de desconto
        let total = subTotal - desconto;

        return {
            subTotal: subTotal,
            desconto: desconto,
            total: total
        };
    }

    // Função para atualizar o comprovante com base na mesa
    function atualizarComprovante(mesa) {
        pedidosCarrinhoDiv.innerHTML = ''; // Limpa os pedidos anteriores
        const pedidosMesa = pedidos.filter(pedido => pedido.mesa === mesa);

        if (pedidosMesa.length === 0) {
            pedidosCarrinhoDiv.innerHTML = `<p>Nenhum pedido para a mesa ${mesa}.</p>`;
            totalSpan.textContent = `R$ 0,00`;
            return;
        }

        pedidosMesa.forEach(pedido => {
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
        });

        // Atualiza os valores do resumo (Sub Total, Desconto e Total)
        const { subTotal, desconto, total } = calcularResumo(pedidosMesa);

        // Exibe o resumo no HTML
        document.querySelector('.preçototall').textContent = `R$ ${subTotal.toFixed(2).replace('.', ',')}`;
        document.querySelector('.totaltudo').textContent = `R$ ${subTotal.toFixed(2).replace('.', ',')}`;
    }

    // Evento para capturar cliques na lista de pendentes e atualizar o comprovante
    pendentesDiv.addEventListener('click', function (event) {
        const pedidoElemento = event.target.closest('.pedidos');
        if (!pedidoElemento) return;

        const mesa = pedidoElemento.querySelector('.p-mesas').textContent.replace('Mesa: ', '').trim();
        const metodoPagamento = pedidoElemento.querySelector('.h1-blaconista').textContent.replace('Método pagamento: ', '').trim();

        // Atualiza as informações do comprovante
        numeroMesaComprovante.textContent = mesa;
        tipoPagamentoComprovante.textContent = metodoPagamento;

        // Filtra e exibe os pedidos da mesa no comprovante
        atualizarComprovante(mesa);
    });

    // Função para inicializar os pedidos pendentes
    function criarPedidoPendentes() {
        pedidos.forEach((pedido) => {
            const estrutura = document.createElement('div');
            estrutura.classList.add('pedidos');

            estrutura.innerHTML = `
                <h1 class="h1-blaconista h1">Método pagamento: ${pedido.metodoPagamento}</h1>
                <p class="p-mesas">Mesa: ${pedido.mesa}</p>
                <p class="p-qtd">Quantidade: ${pedido.quantidade}</p>
                <p class="p-preco-total">${pedido.preco}</p>
                <p class="p-horas">${dataFormatada} ${horas}</p> <!-- Adiciona a data e hora no card do pedido -->
                <button class="bnt-aceitar">
                    <div class="texto-bnt">Aceitar</div>
                </button>
                <button class="bnt-remover">
                    <div class="texto-bnt">Remover</div>
                </button>
            `;

            pendentesDiv.appendChild(estrutura);
        });
    }

    // Inicializa os pedidos pendentes
    criarPedidoPendentes();
});
