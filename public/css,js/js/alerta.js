const btnFinishi = document.querySelector('#btn-finishi');
const btnFinalizar = document.querySelector('#btn-finalizar');

function mostrarAlerta(msg) {
    const alerta = document.getElementById("alerta");
    const alertaMsg = document.getElementById("alerta-msg");

    alertaMsg.textContent = msg;
    alerta.classList.add("show"); // Adiciona a classe 'show' para exibir
}

function fecharAlerta() {
    const alerta = document.getElementById("alerta");
    alerta.classList.remove("show"); // Remove a classe 'show' para esconder
}

function verificarPedido() {
    const container = document.getElementById("container-pratos-menu");

    if (container.children.length === 0) {
        mostrarAlerta("Você precisa pedir algo antes!");
    } else {
        const metodoPagamentoSelecionado = document.querySelector(".select");

        if (!metodoPagamentoSelecionado) {
            mostrarAlerta("Selecione um método de pagamento para continuar!");
        } else {
            abrirPedido(); // Se ambos os requisitos forem atendidos, finaliza o pedido
        }
    }
}

function abrirPedido() {
    const containerInicial = document.querySelector('.success');
    containerInicial.style.display = 'block';

    document.querySelectorAll('body > *:not(.success)').forEach(element => {
        element.classList.add('blur');
    });
}

function mudarDisplay() {
    const containerInicial = document.querySelector('.success');
    containerInicial.style.display = 'none';

    document.querySelectorAll('body > *:not(.success)').forEach(element => {
        element.classList.remove('blur');
    });
}

btnFinishi.addEventListener('click', mudarDisplay);
btnFinalizar.addEventListener('click', verificarPedido); // Verifica as condições antes de abrir o pedido
