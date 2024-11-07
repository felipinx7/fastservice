const buttons = document.querySelectorAll(".botao-confirmar");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        // O card pai do botão
        const card = button.closest(".card");
        if (card) {
            card.style.display = "none";
        }
    });
});
