// Função para exibir os pratos
const pratosList = document.querySelector(".pratos-list");

// Função para buscar pratos do banco de dados
async function carregarPratos() {
    try {
        const response = await fetch('/pratos-cadastrados');
        const pratos = await response.json();

        pratos.forEach(prato => {
            const card = document.createElement("div");
            card.classList.add("card-prato");

            card.innerHTML = `
                <img src="/public/css,js/uploads/${prato.foto}" alt="${prato.nome}">
                <h2>${prato.nome}</h2>
                <p>Categoria: ${prato.categoria}</p>
                <p class="preco">Preço: R$ ${prato.preco.toFixed(2)}</p>
                <button class="btn-remover">Remover</button>
            `;

            // Adiciona o card à lista de pratos
            pratosList.appendChild(card);

            // Adiciona o evento de clique para remover o prato
            card.querySelector(".btn-remover").addEventListener("click", async () => {
                const nomePrato = prato.nome; // Pega o nome do prato

                // Envia a solicitação para remover o prato do banco de dados
                try {
                    const response = await fetch('/remover-prato', {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ nome: nomePrato }), // Envia o nome do prato
                    });

                    if (response.ok) {
                        // Remove o prato do DOM
                        card.remove();
                    } else {
                        const data = await response.json();
                        alert(data.erro || 'Erro ao remover o prato');
                    }
                } catch (error) {
                    console.error('Erro ao remover o prato:', error);
                    alert('Erro ao remover o prato');
                }
            });
        });
    } catch (error) {
        console.error("Erro ao carregar pratos:", error);
    }
}

// Chama a função para carregar os pratos
carregarPratos();
