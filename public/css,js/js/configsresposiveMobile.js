document.addEventListener('DOMContentLoaded', () => {
    const carrinhoBtn = document.getElementById('carrinho');
    const containerCarrinho = document.getElementById('container');
    const setaVoltar = document.getElementById('seta-voltar');
  
    if (!carrinhoBtn || !containerCarrinho || !setaVoltar) {
      console.error('Um ou mais elementos não foram encontrados no DOM.');
      return;
    }
  
    // Teste para verificar se o evento está funcionando
    carrinhoBtn.addEventListener('click', () => {
      console.log('Carrinho aberto');
      containerCarrinho.style.display = 'block';  // Força a exibição com estilo inline
    });
  
    setaVoltar.addEventListener('click', () => {
      console.log('Carrinho fechado');
      containerCarrinho.style.display = 'none';  // Força o ocultamento com estilo inline
    });
  });
  