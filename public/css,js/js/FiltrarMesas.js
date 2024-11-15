// Seleciona o botão, o select e os cards de pedidos
const toggleSelectBtn = document.getElementById('toggleSelectBtn');
const mesaSelect = document.getElementById('mesaSelect');

// Adiciona um evento de clique no botão para mostrar/ocultar o select
toggleSelectBtn.addEventListener('click', function() {
    mesaSelect.style.display = mesaSelect.style.display === 'none' ? 'block' : 'none';
});

// Adiciona um evento de mudança no select para filtrar as mesas
mesaSelect.addEventListener('change', function() {
    const selectedMesa = mesaSelect.value;  // Valor selecionado no select

    // Seleciona novamente todos os cards de pedidos após a criação
    const pedidos = document.querySelectorAll('.pedidos');

    // Itera sobre todos os cards de pedidos
    pedidos.forEach(function(pedido) {
        const mesaValor = pedido.querySelector('.p-mesas').textContent.trim().split(' ')[1]; // Pegando o número da mesa (M2, M3, etc.)

        // Verifica se o valor da mesa corresponde ao selecionado no select
        if (selectedMesa === "M0" || mesaValor === selectedMesa) {
            pedido.style.display = 'block';  // Exibe o card de pedido
        } else {
            pedido.style.display = 'none';  // Oculta o card de pedido
        }
    });
});

// Função para remover um pedido completamente
function adicionarEventosRemocao() {
    // Seleciona novamente todos os pedidos após a criação
    const pedidos = document.querySelectorAll('.pedidos');

    pedidos.forEach(function(pedido) {
        const btnRemover = pedido.querySelector('.bnt-remover');
        const btnRemoverItem = pedido.querySelector('.bnt-remover-item');
        const qtdElement = pedido.querySelector('.p-qtd');
        
        // Evento para remover o pedido completamente
        btnRemover.addEventListener('click', function() {
            pedido.remove();  // Remove o elemento pedido da interface
        });
        
        // Evento para remover um item da quantidade
        btnRemoverItem.addEventListener('click', function() {
            let quantidade = parseInt(qtdElement.textContent.split(': ')[1]);
            
            if (quantidade > 1) {
                quantidade--;  // Diminui a quantidade em 1
                qtdElement.textContent = `Quantidade: ${quantidade}`;
            } else {
                pedido.remove();  // Remove o pedido se a quantidade chegar a 0
            }
        });
    });
}
// Chama a função para adicionar os eventos de remoção após a criação dos pedidos
adicionarEventosRemocao();