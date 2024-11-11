// Seleciona o botão, o select e os cards de pedidos
const toggleSelectBtn = document.getElementById('toggleSelectBtn');
const mesaSelect = document.getElementById('mesaSelect');
const pedidos = document.querySelectorAll('.pedidos');

// Adiciona um evento de clique no botão para mostrar/ocultar o select
toggleSelectBtn.addEventListener('click', function() {
    mesaSelect.style.display = mesaSelect.style.display === 'none' ? 'block' : 'none';
});

// Adiciona um evento de mudança no select para filtrar as mesas
mesaSelect.addEventListener('change', function() {
    const selectedMesa = mesaSelect.value;  // Valor selecionado no select

    // Itera sobre todos os cards de pedidos
    pedidos.forEach(function(pedido) {
        // Extrai o número da mesa do conteúdo de p-mesas
        const mesaValor = pedido.querySelector('.p-mesas').textContent.trim().split(' ')[1]; // Pegando o número da mesa (M2, M3, etc.)

        // Verifica se o valor da mesa corresponde ao selecionado no select
        if (selectedMesa === "0" || mesaValor === selectedMesa) {
            pedido.style.display = 'block';  // Exibe o card de pedido
        } else {
            pedido.style.display = 'none';  // Oculta o card de pedido
        }
    });
});
