// Seleciona o ícone e o select
const iconeFiltro = document.querySelector('.icone-filtro');
const filtroEstrelas = document.getElementById('filtro-estrelas');

// Verifica se os elementos existem no DOM antes de adicionar o evento
if (iconeFiltro && filtroEstrelas) {
    // Adiciona um evento de clique no ícone para mostrar/ocultar o select
    iconeFiltro.addEventListener('click', function() {
        // Alterna a visibilidade do select
        if (filtroEstrelas.style.display === '' || filtroEstrelas.style.display === 'none') {
            filtroEstrelas.style.display = 'block';
        } else {
            filtroEstrelas.style.display = 'none';
        }
    });
}
