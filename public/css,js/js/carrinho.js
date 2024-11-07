const containerCarrinho = document.querySelector('.container-pratos');
const btnAdicionar = document.querySelectorAll('.botao-confirmar');
const totaltudo = document.querySelector('.totaltudo');
const extratofinal = document.querySelector('.preçototall');

// Função que será chamada para cada botão de adicionar prato
btnAdicionar.forEach(btn => {
    btn.addEventListener('click', AdicionarPrato);
});

function AdicionarPrato(event) {
    const card = event.target.closest('.card');
    
    if (!card) return; // Evita erros caso o elemento "card" não seja encontrado

    const qtdprato = card.querySelector('.h4-parte-adicionar'); 
    const Cardpreco = card.querySelector('.card-price'); 

    const preco = parseFloat(Cardpreco.textContent.replace('R$', '').replace(',', '.'));
    const totalpratos = parseInt(qtdprato.textContent);

    // Log para verificar se o preço e quantidade estão corretos
    console.log("Preço:", preco, "Quantidade:", totalpratos);

    const divPratosAdicionados = document.createElement('div');
    divPratosAdicionados.classList.add('pratos-adicionados');

    const divCartItem = document.createElement('div');
    divCartItem.classList.add('cart-item', 'prato-add');

    const precoTotal = document.createElement('p');
    precoTotal.classList.add('p-price');
    precoTotal.textContent = `Total: R$ ${(preco * totalpratos).toFixed(2)}`;
    
    divCartItem.appendChild(precoTotal);
    divPratosAdicionados.appendChild(divCartItem);

    containerCarrinho.appendChild(divPratosAdicionados);
    
    // Mostra a div botao-confirmar
    const botaoConfirmar = card.querySelector('.botao-confirmar'); // Adicionei esta linha
    if (botaoConfirmar) {
        botaoConfirmar.style.display = 'block'; // Torna a div visível
    }

    // Chama função para atualizar o total
    atualizarTotalFinal();
}

function atualizarTotalFinal() {
    let totalGeral = 0;

    // Soma todos os preços dos itens no carrinho
    document.querySelectorAll('.p-price').forEach(priceElement => {
        const valor = parseFloat(priceElement.textContent.replace('Total: R$ ', '').replace(',', '.'));
        totalGeral += valor;
    });

    // Log para verificar o total calculado
    console.log("Total calculado:", totalGeral);

    extratofinal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    totaltudo.textContent = `R$ ${totalGeral.toFixed(2)}`;
}
