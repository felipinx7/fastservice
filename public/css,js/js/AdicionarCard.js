function adicionarCard() {
    const container = document.getElementById("container-pratos-menu");

    // Criando a estrutura do card
    const mudarLugar = document.createElement('div');
    mudarLugar.className = 'mudar-lugar1';

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = 'img/prato-2.png';
    img.alt = 'Feijoada';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Feijoada';

    const cardPrice = document.createElement('div');
    cardPrice.className = 'card-price';
    cardPrice.textContent = 'R$30,00';

    const descricao = document.createElement('div');
    descricao.className = 'descricao';
    descricao.textContent = 'Os ingredientes estão na Descrição!!';

    const start = document.createElement('div');
    start.className = 'start';

    const starIcon = document.createElement('i');
    starIcon.className = 'fas fa-star';

    const rating = document.createElement('p');
    rating.textContent = '4.8';

    const btnAdicionar = document.createElement('button');
    btnAdicionar.className = 'btn-adicionar';
    btnAdicionar.id = 'adicionar-suco';
    btnAdicionar.onclick = function () { hideButton(this); };

    const textoBotao = document.createElement('div');
    textoBotao.className = 'texto-botao';
    textoBotao.textContent = 'ADICIONE';

    btnAdicionar.appendChild(textoBotao);

    const containerContador = document.createElement('div');
    containerContador.className = 'container-contador';
    containerContador.style.display = 'none';

    const btnMais = document.createElement('button');
    btnMais.className = 'botao-mais';
    btnMais.onclick = function () { incrementQuantity(this); };

    const iconMais = document.createElement('i');
    iconMais.className = 'fa-regular fa-plus';
    btnMais.appendChild(iconMais);

    const h4ParteAdicionar = document.createElement('h4');
    h4ParteAdicionar.className = 'h4-parte-adicionar';
    h4ParteAdicionar.textContent = '1';

    const btnMenos = document.createElement('button');
    btnMenos.className = 'botao-menos';
    btnMenos.onclick = function () { decrementQuantity(this); };

    const iconMenos = document.createElement('i');
    iconMenos.className = 'fas fa-minus';
    btnMenos.appendChild(iconMenos);

    const btnConfirmar = document.createElement('button');
    btnConfirmar.className = 'botao-confirmar';
    btnConfirmar.onclick = function () { mostrarAdicionar(this); };

    const iconConfirmar = document.createElement('i');
    iconConfirmar.className = 'fa-solid fa-check';
    btnConfirmar.appendChild(iconConfirmar);

    // Montando a estrutura do card
    start.appendChild(starIcon);
    start.appendChild(rating);
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardPrice);
    cardContent.appendChild(descricao);
    cardContent.appendChild(start);
    cardContent.appendChild(btnAdicionar);
    cardContent.appendChild(containerContador);
    containerContador.appendChild(btnMais);
    containerContador.appendChild(h4ParteAdicionar);
    containerContador.appendChild(btnMenos);
    containerContador.appendChild(btnConfirmar);
    card.appendChild(img);
    card.appendChild(cardContent);
    mudarLugar.appendChild(card);
    container.appendChild(mudarLugar);
}
