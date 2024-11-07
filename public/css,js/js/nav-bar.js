// NAV-BAR DE NAVEGAÇÃO
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})

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
