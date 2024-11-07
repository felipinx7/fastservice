const radioButtons = document.querySelectorAll('.radio-button');
const pedidosDiv = document.querySelector('#pendentes');
const processoDiv = document.querySelector('#processo');
const completosDiv = document.querySelector('#completos');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.nextElementSibling.textContent.trim() === 'Pendentes') {
            pedidosDiv.style.display = 'block';
            processoDiv.style.display = 'none';
            completosDiv.style.display = 'none';
        } else if (radio.nextElementSibling.textContent.trim() === 'Em-processo') {
            pedidosDiv.style.display = 'none';
            processoDiv.style.display = 'block';
            completosDiv.style.display = 'none';
        } else if (radio.nextElementSibling.textContent.trim() === 'Completos') {
            pedidosDiv.style.display = 'none';
            processoDiv.style.display = 'none';
            completosDiv.style.display = 'block';
        }
    });
});