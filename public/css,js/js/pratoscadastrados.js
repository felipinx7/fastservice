// Dados dos pratos
const pratos = [
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Pizza Margherita", categoria: "Bebida", preco: 29.90, img: "https://via.placeholder.com/200" },
    { nome: "Sopa de Tomate", categoria: "Bebida", preco: 15.00, img: "https://via.placeholder.com/200" },
    { nome: "Salada Caesar", categoria: "Bebida", preco: 18.50, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" },
    { nome: "Tiramisu", categoria: "Bebida", preco: 12.00, img: "https://via.placeholder.com/200" }
];

// Função para exibir os pratos
const pratosList = document.querySelector(".pratos-list");

pratos.forEach(prato => {
    const card = document.createElement("div");
    card.classList.add("card-prato");

    card.innerHTML = `
        <img src="${prato.img}" alt="${prato.nome}">
        <h2>${prato.nome}</h2>
        <p>Categoria: ${prato.categoria}</p>
        <p class="preco">Preço: R$ ${prato.preco.toFixed(2)}</p>
        <button class="btn-remover">Remover</button>
    `;

    // Adiciona o card à lista de pratos
    pratosList.appendChild(card);

    // Adiciona o evento de clique para remover o card
    card.querySelector(".btn-remover").addEventListener("click", () => {
        card.remove(); // Remove o card do DOM
    });
});
