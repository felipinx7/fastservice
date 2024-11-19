const btnFinishi = document.querySelector('#btn-finishi');
const btnFinalizar = document.querySelector('#btn-finalizar');

function verificarPedido() {
    const containerPratosMenu = document.querySelector('.container-pratos');
    const pratoAdd = containerPratosMenu.querySelector('.pratos-adicionados'); 
    const metodoPagamentoEscolhido = document.querySelector('.selected');  

    if (!pratoAdd) {
        alert("Você precisa pedir algo antes!");
        return false; // Impede a abertura da div .success
    }

    // Verifica se um método de pagamento foi escolhido
    if (!metodoPagamentoEscolhido) {
        alert("Selecione um método de pagamento para continuar!");
        return false; // Impede a abertura da div .success
    }

    return true; // Permite abrir a div .success se tudo estiver certo
}

function AbrirPedido() {
    if (verificarPedido()) {
        const containerInicial = document.querySelector('.success');
        containerInicial.style.display = 'block';

        document.querySelectorAll('body > *:not(.success)').forEach(element => {
            element.classList.add('blur');
        });
    }
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
