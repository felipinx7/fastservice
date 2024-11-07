// Seleciona todos os botões "Aceitar"
const btnAceitar = document.querySelectorAll('.bnt-aceitar');
const pedidosAceitosContainer = document.getElementById('processo');
const pedidosCompletosContainer = document.getElementById('completos');

// Adiciona um evento de clique a cada botão "Aceitar"
btnAceitar.forEach(button => {
    button.addEventListener('click', function() {
        // Acessa o card pai do botão
        const pedidoDiv = this.parentElement;

        // Captura as informações do pedido
        const ordem = pedidoDiv.querySelector('.h1-blaconista').innerText;
        const hora = pedidoDiv.querySelector('.p-horas').innerText;
        const mesa = pedidoDiv.querySelector('.p-mesas').innerText;
        const quantidade = pedidoDiv.querySelector('.p-qtd').innerText;
        const precoTotal = pedidoDiv.querySelector('.p-preco-total').innerText;

        // Cria um novo card com as informações capturadas para o container de pedidos aceitos
        const novoPedido = document.createElement('div');
        novoPedido.className = 'pedidos';
        novoPedido.innerHTML = `
            <h1 class="h1-blaconista h1">${ordem}</h1>
            <p class="p-horas">${hora}</p>
            <p class="p-mesas">${mesa}</p>
            <p class="p-qtd">${quantidade}</p>
            <p class="p-preco-total3">${precoTotal}</p>
            <button class="btn-mover1">
            <div class="texto-bnt">
            Pronto
            </div>
            </button>
        `;

        // Adiciona o evento de clique ao botão "Pronto" do novo pedido
        novoPedido.querySelector('.btn-mover1').addEventListener('click', function() {
            // Cria uma estrutura similar ao novoPedido para a div "completos"
            const pedidoCompleto = document.createElement('div');
            pedidoCompleto.className = 'pedidos';
            pedidoCompleto.innerHTML = `
                <h1 class="h1-blaconista h1">${ordem}</h1>
                <p class="p-horas">${hora}</p>
                <p class="p-mesas">${mesa}</p>
                <p class="p-qtd">${quantidade}</p>
                <p class="p-preco-total2">${precoTotal}</p>
            `;

            // Insere o pedido completo na div "completos"
            pedidosCompletosContainer.appendChild(pedidoCompleto);

            // Remove o pedido do container de pedidos em processo
            novoPedido.remove();
        });

        // Adiciona o novo pedido ao container de pedidos aceitos
        pedidosAceitosContainer.appendChild(novoPedido);

        // Remove o pedido original
        pedidoDiv.remove();
    });
});

