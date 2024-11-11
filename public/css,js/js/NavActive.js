// Seleciona todos os itens da navegação
const navItems = document.querySelectorAll('.side-item');

// Adiciona o evento de clique a cada item da navegação
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe 'active' de todos os itens
        navItems.forEach(i => i.classList.remove('active'));
        
        // Adiciona a classe 'active' ao item clicado
        item.classList.add('active');
    });
});
