// Seleciona as divs que representam cada aba
const dashboard = document.querySelector('#Dashboard');
const remover = document.querySelector('#Remover');
const adicionar = document.querySelector('#Adicionar');

// Seleciona os containers que devem ser mostrados ou escondidos
const containerPratosList = document.querySelector('.container-pratos-list');
const containerAdicionarPratos = document.querySelector('.container-adicionar-pratos');
const containerRemoverPratos = document.querySelector('.container-remover-pratos');

// Função para mostrar o container correto baseado na aba ativa
function mostrarContainerCorreto() {
  if (dashboard.classList.contains('active')) {
    containerPratosList.style.display = 'block';
    containerAdicionarPratos.style.display = 'none';
    containerRemoverPratos.style.display = 'none';
  } else if (adicionar.classList.contains('active')) {
    containerPratosList.style.display = 'none';
    containerAdicionarPratos.style.display = 'block';
    containerRemoverPratos.style.display = 'none';
  } else if (remover.classList.contains('active')) {
    containerPratosList.style.display = 'none';
    containerAdicionarPratos.style.display = 'none';
    containerRemoverPratos.style.display = 'block';
  }
}

// Chama a função para definir o display inicial
mostrarContainerCorreto();

// Adiciona o evento de clique para alternar a aba ativa e atualizar a exibição dos containers
dashboard.addEventListener('click', () => {
  // Remove a classe 'active' de todas as abas e adiciona apenas na aba clicada
  dashboard.classList.add('active');
  remover.classList.remove('active');
  adicionar.classList.remove('active');
  mostrarContainerCorreto(); // Atualiza o display dos containers
});

adicionar.addEventListener('click', () => {
  dashboard.classList.remove('active');
  remover.classList.remove('active');
  adicionar.classList.add('active');
  mostrarContainerCorreto(); // Atualiza o display dos containers
});

remover.addEventListener('click', () => {
  dashboard.classList.remove('active');
  remover.classList.add('active');
  adicionar.classList.remove('active');
  mostrarContainerCorreto(); // Atualiza o display dos containers
});