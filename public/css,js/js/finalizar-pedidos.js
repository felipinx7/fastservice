const btnFinishi = document.querySelector('#btn-finishi');
const btnFinalizar = document.querySelector('#btn-finalizar');

function AbrirPedido() {
    const containerInicial = document.querySelector('.success');
    containerInicial.style.display = 'block';

    document.querySelectorAll('body > *:not(.success)').forEach(element => {
        element.classList.add('blur');
    });
}

function MudarDisplay() {
    const containerInicial = document.querySelector('.success');
    containerInicial.style.display = 'none';

   
    document.querySelectorAll('body > *:not(.success)').forEach(element => {
        element.classList.remove('blur');
    });
}

btnFinishi.addEventListener('click', MudarDisplay);
btnFinalizar.addEventListener('click', AbrirPedido);
