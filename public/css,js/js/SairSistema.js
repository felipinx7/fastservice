// PARTE DE SAIR DO SISTEMA 
const btnSair = document.querySelector('#logout_btn');

function Clique() {
  const confirmacao = confirm("Você realmente deseja sair do sistema?");
  if (confirmacao) {
    // Redireciona para a página de login
    window.location.href = "/";
  } else {
    console.log("Ação cancelada.");
  }
}

btnSair.addEventListener('click', Clique);