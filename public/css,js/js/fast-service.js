  // PARTE DO CARREGAMENTO DO SISTEMA
  window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 2000);
};