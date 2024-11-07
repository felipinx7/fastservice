const totaltudo = document.querySelector('.totaltudo');
const extratofinal = document.querySelector('.preçototall');
const carrinho = document.getElementById('carrinho');

// Função para adicionar item ao carrinho e atualizar total
function mostrarAdicionar(button) {
    const cardContent = button.closest('.card-content');
    const titulo = cardContent.querySelector('.card-title').textContent;
    const preco = cardContent.querySelector('.card-price').textContent;
    const quantidade = parseInt(cardContent.querySelector('.h4-parte-adicionar').textContent, 10);
    const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.'));
    const total = (precoNumerico * quantidade).toFixed(2);

    // Criando estrutura para exibir o item adicionado no carrinho
    const itemCarrinho = document.createElement('div');
    itemCarrinho.className = 'item-carrinho';
    itemCarrinho.innerHTML = `
        <div class="pratos-adicionados">
            <div class="cart-item prato-add">
                <img src="img/prato-2.png" class="prato-pedido-adicionado" alt="">
                <div class="name-prato"><p>${titulo}</p></div>
                <p class="precoprato price-prato">R$ ${precoNumerico.toFixed(2)} <span class="span">${quantidade}X</span></p>
                <p class="p-price">Total: R$ ${total}</p>
                <button class="btn-remover">Remover</button>
            </div>
        </div>
    `;

    // Adicionando o item no carrinho
    carrinho.appendChild(itemCarrinho);

    // Adiciona o evento de clique para remover o item e atualizar total
    itemCarrinho.querySelector('.btn-remover').addEventListener('click', function () {
        itemCarrinho.remove();
        atualizarTotalFinal();
    });

    // Atualiza o total após adicionar o item
    atualizarTotalFinal();
}

// Função para calcular e atualizar o total final do carrinho
function atualizarTotalFinal() {
    let totalGeral = 0;

    // Soma todos os preços dos itens no carrinho
    document.querySelectorAll('.p-price').forEach(priceElement => {
        const valor = parseFloat(priceElement.textContent.replace('Total: R$ ', '').replace(',', '.'));
        totalGeral += valor;
    });

    extratofinal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    totaltudo.textContent = `R$ ${totalGeral.toFixed(2)}`;
}

// Exemplo de como chamar a função mostrarAdicionar ao clicar em um botão específico
document.querySelectorAll('.botao-confirmar').forEach(btn => {
    btn.addEventListener('click', function() {
        mostrarAdicionar(this);
    });
});
