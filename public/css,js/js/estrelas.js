const labels = document.querySelectorAll(".input-icons label");

labels.forEach(label => {
    // Evento de hover para destacar as estrelas dinamicamente
    label.addEventListener("mouseover", () => {
        const value = label.getAttribute("data-value");
        highlightStars(value);
    });

    // Evento de clique para fixar a seleção
    label.addEventListener("click", () => {
        const value = label.getAttribute("data-value");
        selectStars(value);
    });
});

function highlightStars(value) {
    labels.forEach(label => {
        const starValue = label.getAttribute("data-value");
        label.querySelector("svg").style.fill = starValue <= value ? "gold" : "#ccc";
    });
}

function selectStars(value) {
    labels.forEach(label => {
        const starValue = label.getAttribute("data-value");
        label.querySelector("svg").style.fill = starValue <= value ? "gold" : "#ccc";
    });
}