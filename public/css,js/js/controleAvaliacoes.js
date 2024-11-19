// Array de avaliações (será preenchido dinamicamente)
const avaliacoes = [];

// SVG da estrela
const estrelaSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M5.48279 0.313927L6.61067 2.70364C6.6891 2.86984 6.84075 2.98501 7.01618 3.01162L9.5383 3.39485C9.9801 3.46203 10.1564 4.02958 9.8368 4.35523L8.0118 6.21535C7.88497 6.34469 7.82698 6.53118 7.85702 6.71375L8.28777 9.34033C8.36328 9.80035 7.90145 10.1511 7.50637 9.93405L5.25063 8.69405C5.09376 8.60789 4.90624 8.60789 4.74937 8.69405L2.49363 9.93405C2.09855 10.1513 1.63672 9.80035 1.71223 9.34033L2.14298 6.71375C2.17302 6.53118 2.11503 6.34469 1.9882 6.21535L0.163203 4.35523C-0.156365 4.02936 0.019898 3.46182 0.461702 3.39485L2.98382 3.01162C3.15925 2.98501 3.3109 2.86984 3.38933 2.70364L4.51721 0.313927C4.71454 -0.104642 5.28525 -0.104642 5.48279 0.313927Z"/>
</svg>`;

// Seleciona o elemento HTML onde as avaliações serão inseridas
const divAvaliacoes = document.querySelector('.div-avaliacoes');
const filtroEstrelas = document.getElementById('filtro-estrelas');

// Função para exibir avaliações
function exibirAvaliacoes(filtro) {
    divAvaliacoes.innerHTML = ''; // Limpa as avaliações anteriores

    // Filtra as avaliações de acordo com o número de estrelas selecionado
    const avaliacoesFiltradas = filtro === '0' ? avaliacoes : avaliacoes.filter(avaliacao => avaliacao.estrelas == filtro);

    avaliacoesFiltradas.forEach(avaliacao => {
        const avaliacaoDiv = document.createElement('div');
        avaliacaoDiv.classList.add('avaliacao');

        const nomeClienteDiv = document.createElement('div');
        nomeClienteDiv.classList.add('nome-cliente');
        nomeClienteDiv.textContent = `${avaliacao.nome} ${avaliacao.sobrenome}`;

        let comentario = avaliacao.avaliacao;
        if (comentario.length > 140) {
            comentario = comentario.substring(0, 140) + '...';
        }

        const comentarioClienteDiv = document.createElement('div');
        comentarioClienteDiv.classList.add('comentario-cliente');
        comentarioClienteDiv.textContent = comentario;

        const divEstrelas = document.createElement('div');
        divEstrelas.classList.add('div-estrelas');

        for (let i = 1; i <= 5; i++) {
            const estrela = document.createElement('span');
            estrela.innerHTML = i <= avaliacao.estrelas ? estrelaSVG : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M5.48279 0.313927L6.61067 2.70364C6.6891 2.86984 6.84075 2.98501 7.01618 3.01162L9.5383 3.39485C9.9801 3.46203 10.1564 4.02958 9.8368 4.35523L8.0118 6.21535C7.88497 6.34469 7.82698 6.53118 7.85702 6.71375L8.28777 9.34033C8.36328 9.80035 7.90145 10.1511 7.50637 9.93405L5.25063 8.69405C5.09376 8.60789 4.90624 8.60789 4.74937 8.69405L2.49363 9.93405C2.09855 10.1513 1.63672 9.80035 1.71223 9.34033L2.14298 6.71375C2.17302 6.53118 2.11503 6.34469 1.9882 6.21535L0.163203 4.35523C-0.156365 4.02936 0.019898 3.46182 0.461702 3.39485L2.98382 3.01162C3.15925 2.98501 3.3109 2.86984 3.38933 2.70364L4.51721 0.313927C4.71454 -0.104642 5.28525 -0.104642 5.48279 0.313927Z"/>
            </svg>`;
            divEstrelas.appendChild(estrela);
        }

        avaliacaoDiv.appendChild(nomeClienteDiv);
        avaliacaoDiv.appendChild(comentarioClienteDiv);
        avaliacaoDiv.appendChild(divEstrelas);

        divAvaliacoes.appendChild(avaliacaoDiv);
    });
}

// Função para buscar avaliações do backend
async function carregarAvaliacoes() {
    try {
        const response = await fetch('/todasavaliacao');
        const dados = await response.json();
        dados.forEach(avaliacao => {
            avaliacoes.push(avaliacao); // Preenche o array com as avaliações do backend
        });
        exibirAvaliacoes('0'); // Exibe as avaliações carregadas
    } catch (error) {
        console.error('Erro ao carregar avaliações:', error);
    }
}

// Carrega as avaliações ao carregar a página
carregarAvaliacoes();

// Atualiza as avaliações sempre que o filtro for alterado
filtroEstrelas.addEventListener('change', (event) => {
    exibirAvaliacoes(event.target.value);
});
