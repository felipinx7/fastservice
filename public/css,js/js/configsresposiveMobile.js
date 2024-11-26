// Esperar o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
  // Selecionar os elementos
  const divSetaVoltar = document.getElementById('div-seta-voltar');
  const carrinho = document.getElementById('div-carrinho');
  const containerCarrinho = document.getElementById('container-container-carrinho');

  // Verificar se os elementos existem
  console.log(divSetaVoltar, carrinho, containerCarrinho);

  // Esconder a div do carrinho ao clicar na seta voltar
  divSetaVoltar.addEventListener('click', () => {
    containerCarrinho.style.display = 'none'; // Esconde o carrinho
  });

  // Mostrar a div do carrinho ao clicar no ícone do carrinho
  carrinho.addEventListener('click', () => {
    containerCarrinho.style.display = 'block'; // Mostra o carrinho
  });
});
