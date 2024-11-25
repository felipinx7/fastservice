function gerarAvaliacaoAleatoria() {
    return (Math.random() * (5 - 4) + 4).toFixed(1); 
}

// Função para adicionar o card do prato no container correto
function adicionarCard(prato) {
    let container;
    
    // Verifica a categoria do prato e define o container correspondente usando classes
    switch (prato.categoria) {
        case 'bebidas':
            container = document.querySelector('.container-parte-bebidas');
            break;
        case 'promoçoes':
            container = document.querySelector('.container-parte-promocao');
            break;
        case 'doces':
            container = document.querySelector('.container-doces');
            break;
        case 'favorito':
            container = document.querySelector('.container-parte-favorito');
            break;
        case 'principal':
        default:
            container = document.querySelector('.container-pratos-menu');
            break;
    }

    // Criação do card
    const mudarLugar = document.createElement('div');
    mudarLugar.className = 'mudar-lugar1';

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = `public/css,js/uploads/${prato.foto}`; // Usando o nome da foto retornado pela API
    img.alt = prato.nome;

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.textContent = prato.nome;

    if (prato.nome.length > 14) {
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
        hideButton(this);
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

// Função para carregar pratos cadastrados da API e gerar a array com os pratos
function carregarPratos() {
    fetch('/pratos-cadastrados')
        .then(response => response.json())
        .then(pratos => {
            // Criar uma array com objetos contendo nome, preco, foto e categoria de cada prato
            const pratosArray = pratos.map(prato => ({
                nome: prato.nome,
                preco: prato.preco,
                foto: prato.foto,
                categoria: prato.categoria
            }));

            // Exibir os pratos nos containers correspondentes
            pratosArray.forEach(adicionarCard); // Para cada prato, adicionamos ao cardápio
        })
        .catch(error => {
            console.error('Erro ao carregar pratos:', error);
        });
}

// Chama a função para carregar os pratos quando a página for carregada
window.onload = carregarPratos;
