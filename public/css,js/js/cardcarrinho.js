const totaltudo = document.querySelector('.totaltudo');
const extratofinal = document.querySelector('.preçototall');

const carrinho = document.getElementById('carrinho');

const paymentButtons = document.querySelectorAll('.butao-parte--carrinho');
const totalPaymentMethod = document.querySelector('.payment-method');


// Função para adicionar item ao carrinho e atualizar total
function mostrarAdicionar(button) {
    const cardContent = button.closest('.card-content');
    const titulo = cardContent.querySelector('.card-title').textContent;
    const preco = cardContent.querySelector('.card-price').textContent;
    const quantidade = parseInt(cardContent.querySelector('.h4-parte-adicionar').textContent, 10);
    const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.'));
    const total = (precoNumerico * quantidade).toFixed(2);
    const fotoprato = document.querySelectorAll(".prato-pedido-adicionado")
    fotoprato.values()

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

    // Consome a API para registrar o pedido
    const idMesa = 1; // Substitua pelo ID da mesa correto, caso esteja disponível dinamicamente
    fetch(`/pedido/${idMesa}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // Nadyson
        /**
         * Aqui tu precisa achar onde ficam todos os itens e criar uma função para que quando finalizar chame essa rota com o fetch(`/pedido/${idMesa}`
         *  */ 
        body: JSON.stringify({
            itens: [
                {
                    nome: titulo,
                    preco: preco,
                    quantidade,
                },
            ]
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao registrar pedido na API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Pedido registrado com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro ao consumir a API /pedido/:id_mesa:', error);
        });

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

// Função para adicionar card ao menu
function adicionarCard(prato) {
    const container = document.getElementById("container-pratos-menu");

    const mudarLugar = document.createElement('div');
    mudarLugar.className = 'mudar-lugar1';

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = fotoprato;
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.textContent = prato.nome;

    // Verifica se o nome do prato tem mais de 13 caracteres
    if (prato.nome.length > 13) {
        cardTitle.style.fontSize = '1rem'; // Aplica o tamanho de fonte 1rem
    }

    const cardPrice = document.createElement('div');
    cardPrice.className = 'card-price';
    cardPrice.textContent = `R$${prato.preco.toFixed(2)}`;

    const descricao = document.createElement('div');
    descricao.className = 'descricao';
    descricao.textContent = prato.descricao || 'Um prato com um sabor delicioso e único.'; // Descrição padrão

    const start = document.createElement('div');
    start.className = 'start';

    const starIcon = document.createElement('i');
    starIcon.className = 'fas fa-star';

    const rating = document.createElement('p');
    rating.textContent = prato.avaliacao || gerarAvaliacaoAleatoria();  // Avaliação aleatória entre 3 e 5

    const btnAdicionar = document.createElement('button');
    btnAdicionar.className = 'btn-adicionar';
    btnAdicionar.id = `adicionar-${prato.nome.toLowerCase()}`;
    btnAdicionar.onclick = function () {
        hideButton(this); // Função para esconder o botão
    };

    const textoBotao = document.createElement('div');
    textoBotao.className = 'texto-botao';
    textoBotao.textContent = 'ADICIONE';

    btnAdicionar.appendChild(textoBotao);

    const containerContador = document.createElement('div');
    containerContador.className = 'container-contador';
    containerContador.style.display = 'none';

    const btnMais = document.createElement('button');
    btnMais.className = 'botao-mais';
    btnMais.onclick = function () {
        incrementQuantity(this);
    };

    const iconMais = document.createElement('i');
    iconMais.className = 'fa-regular fa-plus';
    btnMais.appendChild(iconMais);

    const h4ParteAdicionar = document.createElement('h4');
    h4ParteAdicionar.className = 'h4-parte-adicionar';
    h4ParteAdicionar.textContent = '1';

    const btnMenos = document.createElement('button');
    btnMenos.className = 'botao-menos';
    btnMenos.onclick = function () {
        decrementQuantity(this);
    };

    const iconMenos = document.createElement('i');
    iconMenos.className = 'fas fa-minus';
    btnMenos.appendChild(iconMenos);

    const btnConfirmar = document.createElement('button');
    btnConfirmar.className = 'botao-confirmar';
    btnConfirmar.onclick = function () {
        mostrarAdicionar(this);
    };

    const iconConfirmar = document.createElement('i');
    iconConfirmar.className = 'fa-solid fa-check';
    btnConfirmar.appendChild(iconConfirmar);

    start.appendChild(starIcon);
    start.appendChild(rating);

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardPrice);
    cardContent.appendChild(descricao);
    cardContent.appendChild(start);
    cardContent.appendChild(btnAdicionar);

    containerContador.appendChild(btnMais);
    containerContador.appendChild(h4ParteAdicionar);
    containerContador.appendChild(btnMenos);
    containerContador.appendChild(btnConfirmar);

    cardContent.appendChild(containerContador);

    card.appendChild(img);
    card.appendChild(cardContent);

    mudarLugar.appendChild(card);

    container.appendChild(mudarLugar);
}

// Função para carregar pratos cadastrados da API
function carregarPratos() {
    fetch('/pratos-cadastrados')
        .then(response => response.json())
        .then(pratos => {
            pratos.forEach(adicionarCard); // Para cada prato, adicionamos ao cardápio
        })
        .catch(error => {
            console.error('Erro ao carregar pratos:', error);
        });
}

window.onload = carregarPratos;

// Função para lidar com a escolha do método de pagamento
paymentButtons.forEach(button => {
    button.addEventListener('click', function () {
        const metodoPagamento = this.getAttribute('data-pagamento');

        // Exibir o método de pagamento selecionado
        if (totalPaymentMethod) {
            totalPaymentMethod.textContent = `Método de Pagamento: ${metodoPagamento.charAt(0).toUpperCase() + metodoPagamento.slice(1)}`;
        }
        paymentButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});