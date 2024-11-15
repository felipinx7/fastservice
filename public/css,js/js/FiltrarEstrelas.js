 // Seleciona a div filtro-avaliacao e a div select-star
 const filtroAvaliacao = document.querySelector('.filtro-avaliacao');
 const selectStar = document.querySelector('.select-star');

 // Adiciona o evento de clique para alterar o display
 filtroAvaliacao.addEventListener('click', () => {
     selectStar.style.display = 'block';
 });