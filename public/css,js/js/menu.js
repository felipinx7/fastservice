// SLIDER DE PROMOÇÃO COM BOLINHAS DE NAVEGAÇÃO
const swiperPromocao = new Swiper('.banner-promocao', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',  
        clickable: true,  
    },
    navigation: {
        nextEl: '.swiper-button-next',  
        prevEl: '.swiper-button-prev',
    },
});

// PARTE DOS BOTÕES DO PEDIDO
function hideButton(button) {
    button.style.display = 'none'; 
    const containerContador = button.nextElementSibling;
    containerContador.style.display = 'flex'; 
}

function mostrarAdicionar(button) {
    const containerContador = button.closest('.container-contador'); 
    containerContador.style.display = 'none'; 
    const adicionarButton = containerContador.previousElementSibling;
    adicionarButton.style.display = 'block'; 
}

// PARTE DOS BOTÕES 
function incrementQuantity(button) {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent); 
    quantity += 1; 
    quantityElement.textContent = quantity; 
}

function decrementQuantity(button) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent); 
    if (quantity > 1) {
        quantity -= 1; 
        quantityElement.textContent = quantity; 
    }
}

// ADICIONE EVENTOS AOS BOTÕES DE CADA CARD
document.querySelectorAll('.btn-adicionar').forEach(button => {
    button.addEventListener('click', () => hideButton(button));
});

document.querySelectorAll('.botao-mais').forEach(button => {
    button.addEventListener('click', () => incrementQuantity(button));
});

document.querySelectorAll('.botao-menos').forEach(button => {
    button.addEventListener('click', () => decrementQuantity(button));
});

document.querySelectorAll('.botao-confirmar').forEach(button => {
    button.addEventListener('click', () => mostrarAdicionar(button));
});

// PARTE DO .ACTIVE DA PARTE CATEGORIA
document.addEventListener("DOMContentLoaded", function() {
    const categorias = document.querySelectorAll('.categoria a');

    categorias.forEach(categoria => {
        categoria.addEventListener('click', function(event) {
            event.preventDefault();
            categorias.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
function filterCards() {
    const input = document.getElementById('input1').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block'; // Exibe o card
        } else {
            card.style.display = 'none'; // Oculta o card
        }
    });
}

