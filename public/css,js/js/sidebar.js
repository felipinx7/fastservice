document.getElementById('open_btn').addEventListener('click', function () {
    // Alterna as classes 'open-sidebar' e 'closed' no elemento 'sidebar'
    document.getElementById('sidebar').classList.toggle('open-sidebar');
    document.getElementById('sidebar').classList.toggle('closed');
});
