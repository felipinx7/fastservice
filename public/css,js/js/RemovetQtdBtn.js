// Função para diminuir a quantidade no carrinho
function removerQuantidade(btn) {
    // Verifica se a função foi chamada
    console.log("Função chamada");

    // Encontrar o contêiner mais próximo que contém a classe 'item-carrinho'
    const itemCarrinho = btn.closest('.item-carrinho');
    
    // Verifica se o itemCarrinho foi encontrado
    if (itemCarrinho) {
        console.log("Item carrinho encontrado");

        // Localiza o h4 que contém a quantidade
        const h4QtdCarrinho = itemCarrinho.querySelector('.h4-qtd-carrinho');
        
        // Verifica se o h4 com a quantidade foi encontrado
        if (h4QtdCarrinho) {
            console.log("h4 com quantidade encontrado");

            // Pega o valor da quantidade, removendo a parte "Quantidade: "
            let quantidade = parseInt(h4QtdCarrinho.textContent.replace('Quantidade: ', ''), 10);
            
            // Exibe o valor atual da quantidade
            console.log(`Quantidade atual: ${quantidade}`);

            // Verifica se a quantidade é maior que 1
            if (quantidade > 1) {
                quantidade--; // Diminui a quantidade
                h4QtdCarrinho.textContent = `Quantidade: ${quantidade}`; // Atualiza o conteúdo do h4
                console.log(`Nova quantidade: ${quantidade}`);
            } else {
                console.log('A quantidade não pode ser menor que 1.');
            }
        } else {
            console.log('Não foi possível encontrar o h4 da quantidade dentro do item-carrinho.');
        }
    } else {
        console.log('Não foi possível encontrar o item-carrinho.');
    }
}

// Adiciona o evento de clique nos botões de remoção de quantidade
document.querySelectorAll('.btn-remover-qtd').forEach(btn => {
    btn.addEventListener('click', function() {
        removerQuantidade(btn);
    });
});
