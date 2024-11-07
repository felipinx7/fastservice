const btnExpandir = document.querySelector('#btn-expandir');
const menuSide = document.querySelector('nav.menu-lateral');
const menuItems = document.querySelectorAll('.item-menu');

btnExpandir.addEventListener('click', function() {
    menuSide.classList.toggle('expanded');
});

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
}); 