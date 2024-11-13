// Seleciona o botão de filtro e o select
const filtroAvaliacao = document.querySelector('.filtro-avaliacao');
const filtroEstrelas = document.getElementById('filtro-estrelas');

// Verifica se os elementos existem no DOM antes de adicionar o evento
if (filtroAvaliacao && filtroEstrelas) {
    // Adiciona um evento de clique no botão para mostrar/ocultar o select
    filtroAvaliacao.addEventListener('click', function() {
        // Alterna a visibilidade do select
        if (filtroEstrelas.style.display === '' || filtroEstrelas.style.display === 'none') {
            filtroEstrelas.style.display = 'block';
        } else {
            filtroEstrelas.style.display = 'none';
        }
    });
}
