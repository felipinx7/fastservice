// Seleciona as divs que representam cada aba
const dashboard = document.querySelector('#Dashboard');
const remover = document.querySelector('#Remover');
const adicionar = document.querySelector('#Adicionar');
const Avaliacao = document.querySelector("#Avaliacao"); 

// Seleciona os containers que devem ser mostrados ou escondidos
const containerPratosList = document.querySelector('.container-pratos-list');
const containerAdicionarPratos = document.querySelector('.container-adicionar-pratos');
const containerRemoverPratos = document.querySelector('.container-remover-pratos');
const containerAvaliacaoPratos = document.querySelector('.container-avaliacao'); // Adicionando o container de avaliação

// Função para mostrar o container correto baseado na aba ativa
function mostrarContainerCorreto() {
  if (dashboard.classList.contains('active')) {
    containerPratosList.style.display = 'block';
    containerAdicionarPratos.style.display = 'none';
    containerRemoverPratos.style.display = 'none';
    containerAvaliacaoPratos.style.display = 'none'; // Esconde o container de avaliação
  } else if (adicionar.classList.contains('active')) {
    containerPratosList.style.display = 'none';
    containerAdicionarPratos.style.display = 'block';
    containerRemoverPratos.style.display = 'none';
    containerAvaliacaoPratos.style.display = 'none'; // Esconde o container de avaliação
  } else if (remover.classList.contains('active')) {
    containerPratosList.style.display = 'none';
    containerAdicionarPratos.style.display = 'none';
    containerRemoverPratos.style.display = 'block';
    containerAvaliacaoPratos.style.display = 'none'; // Esconde o container de avaliação
  } else if (Avaliacao.classList.contains('active')) {  // Adicionando lógica para avaliação
    containerPratosList.style.display = 'none';
    containerAdicionarPratos.style.display = 'none';
    containerRemoverPratos.style.display = 'none';
    containerAvaliacaoPratos.style.display = 'block';  // Exibe o container de avaliação
  }
}

// Chama a função para definir o display inicial
mostrarContainerCorreto();

// Adiciona o evento de clique para alternar a aba ativa e atualizar a exibição dos containers
dashboard.addEventListener('click', () => {
  dashboard.classList.add('active');
  remover.classList.remove('active');
  adicionar.classList.remove('active');
  Avaliacao.classList.remove('active'); // Remove a classe ativa de Avaliação
  mostrarContainerCorreto(); // Atualiza o display dos containers
});

adicionar.addEventListener('click', () => {
  dashboard.classList.remove('active');
  remover.classList.remove('active');
  adicionar.classList.add('active');
  Avaliacao.classList.remove('active'); // Remove a classe ativa de Avaliação
  mostrarContainerCorreto(); // Atualiza o display dos containers
});

remover.addEventListener('click', () => {
  dashboard.classList.remove('active');
  remover.classList.add('active');
  adicionar.classList.remove('active');
  Avaliacao.classList.remove('active'); // Remove a classe ativa de Avaliação
  mostrarContainerCorreto(); // Atualiza o display dos containers
});

Avaliacao.addEventListener('click', () => {  // Adicionando evento para a aba Avaliação
  dashboard.classList.remove('active');
  remover.classList.remove('active');
  adicionar.classList.remove('active');
  Avaliacao.classList.add('active');    
  mostrarContainerCorreto(); // Atualiza o display dos containers
});
