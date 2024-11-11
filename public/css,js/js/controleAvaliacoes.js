// Array de avaliações com nome, comentário e quantidade de estrelas
const avaliacoes = [
     // 10 avaliações com 5 estrelas
   { nome: "Cliente 41", comentario: "Perfeito! Adorei cada detalhe.", estrelas: 5 },
   { nome: "Cliente 42", comentario: "Experiência incrível, sabor incomparável.", estrelas: 5 },
   { nome: "Cliente 43", comentario: "Melhor refeição que já tive, recomendo!", estrelas: 5 },
   { nome: "Cliente 44", comentario: "Prato impecável e atendimento excelente.", estrelas: 5 },
   { nome: "Cliente 45", comentario: "Ambiente, comida e atendimento: tudo perfeito.", estrelas: 5 },
   { nome: "Cliente 46", comentario: "Maravilhoso! Recomendo para todos.", estrelas: 5 },
   { nome: "Cliente 47", comentario: "Sabor único, atendimento nota 10!", estrelas: 5 },
   { nome: "Cliente 48", comentario: "Tudo perfeito, um ótimo jantar.", estrelas: 5 },
   { nome: "Cliente 49", comentario: "Amei! Voltarei mais vezes.", estrelas: 5 },
   { nome: "Cliente 50", comentario: "Experiência incrível, tudo muito saboroso!", estrelas: 5 },
     // 10 avaliações com 4 estrelas
     { nome: "Cliente 31", comentario: "Gostei muito do prato, boa experiência.", estrelas: 4 },
     { nome: "Cliente 32", comentario: "Prato saboroso e atendimento ótimo.", estrelas: 4 },
     { nome: "Cliente 33", comentario: "Muito bom, recomendo!", estrelas: 4 },
     { nome: "Cliente 34", comentario: "Sabor ótimo, ambiente agradável.", estrelas: 4 },
     { nome: "Cliente 35", comentario: "Gostei muito, voltarei mais vezes.", estrelas: 4 },
     { nome: "Cliente 36", comentario: "Excelente comida, ótimo atendimento.", estrelas: 4 },
     { nome: "Cliente 37", comentario: "Muito saboroso, recomendo.", estrelas: 4 },
     { nome: "Cliente 38", comentario: "Ambiente agradável, prato bom.", estrelas: 4 },
     { nome: "Cliente 39", comentario: "Gostei bastante, mas pode melhorar.", estrelas: 4 },
     { nome: "Cliente 40", comentario: "Prato delicioso e ambiente agradável.", estrelas: 4 },
     // 10 avaliações com 3 estrelas
   { nome: "Cliente 21", comentario: "A comida estava boa, mas nada surpreendente.", estrelas: 3 },
   { nome: "Cliente 22", comentario: "Gostei, mas esperava mais.", estrelas: 3 },
   { nome: "Cliente 23", comentario: "Atendeu as expectativas.", estrelas: 3 },
   { nome: "Cliente 24", comentario: "Bom, mas poderia ser melhor.", estrelas: 3 },
   { nome: "Cliente 25", comentario: "Sabor mediano, ambiente agradável.", estrelas: 3 },
   { nome: "Cliente 26", comentario: "Gostei do atendimento, comida ok.", estrelas: 3 },
   { nome: "Cliente 27", comentario: "Boa opção para um almoço rápido.", estrelas: 3 },
   { nome: "Cliente 28", comentario: "Comida boa, mas não excelente.", estrelas: 3 },
   { nome: "Cliente 29", comentario: "Prato bem preparado, mas falta algo especial.", estrelas: 3 },
   { nome: "Cliente 30", comentario: "Boa experiência, mas precisa melhorar.", estrelas: 3 },
     // 10 avaliações com 2 estrelas
     { nome: "Cliente 11", comentario: "O prato estava razoável, mas poderia melhorar.", estrelas: 2 },
     { nome: "Cliente 12", comentario: "Médio, falta sabor.", estrelas: 2 },
     { nome: "Cliente 13", comentario: "Comida ok, mas nada especial.", estrelas: 2 },
     { nome: "Cliente 14", comentario: "Não atendeu às expectativas.", estrelas: 2 },
     { nome: "Cliente 15", comentario: "O prato estava mediano.", estrelas: 2 },
     { nome: "Cliente 16", comentario: "Poderia ser mais saboroso.", estrelas: 2 },
     { nome: "Cliente 17", comentario: "Não recomendo, muito simples.", estrelas: 2 },
     { nome: "Cliente 18", comentario: "O atendimento deixou a desejar.", estrelas: 2 },
     { nome: "Cliente 19", comentario: "Gostei de algumas coisas, mas pode melhorar.", estrelas: 2 },
     { nome: "Cliente 20", comentario: "Prato comum, nada demais.", estrelas: 2 },
   // 10 avaliações com 1 estrela
   { nome: "Cliente 1", comentario: "O prato estava muito abaixo das expectativas.", estrelas: 1 },
   { nome: "Cliente 2", comentario: "Não gostei da comida, sabor fraco.", estrelas: 1 },
   { nome: "Cliente 3", comentario: "Serviço ruim e comida fria.", estrelas: 1 },
   { nome: "Cliente 4", comentario: "Pouca variedade no menu.", estrelas: 1 },
   { nome: "Cliente 5", comentario: "A comida não estava saborosa.", estrelas: 1 },
   { nome: "Cliente 6", comentario: "Achei o prato insatisfatório.", estrelas: 1 },
   { nome: "Cliente 7", comentario: "Não voltaria, a comida não agradou.", estrelas: 1 },
   { nome: "Cliente 8", comentario: "Esperava mais pelo preço.", estrelas: 1 },
   { nome: "Cliente 9", comentario: "Não recomendo, decepção total.", estrelas: 1 },
   { nome: "Cliente 10", comentario: "Sabor ruim e demora no atendimento.", estrelas: 1 },
];

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

    // Itera sobre cada avaliação para criar os elementos HTML dinamicamente
    avaliacoesFiltradas.forEach(avaliacao => {
        // Cria uma nova div para armazenar cada avaliação
        const avaliacaoDiv = document.createElement('div');
        avaliacaoDiv.classList.add('avaliacao');

        // Cria a div para o nome do cliente e adiciona o nome
        const nomeClienteDiv = document.createElement('div');
        nomeClienteDiv.classList.add('nome-cliente');
        nomeClienteDiv.textContent = avaliacao.nome;

        // Limita o comentário a no máximo 94 caracteres
        let comentario = avaliacao.comentario;
        if (comentario.length > 94) {
            comentario = comentario.substring(0, 94) + '...';  // Adiciona '...' ao final do comentário
        }

        // Cria a div para o comentário do cliente e insere o texto do comentário
        const comentarioClienteDiv = document.createElement('div');
        comentarioClienteDiv.classList.add('comentario-cliente');
        comentarioClienteDiv.textContent = comentario;

        // Cria a div para as estrelas e adiciona as estrelas
        const divEstrelas = document.createElement('div');
        divEstrelas.classList.add('div-estrelas');

        // Adiciona as estrelas como imagens SVG
        for (let i = 1; i <= 5; i++) {
            const estrela = document.createElement('span'); // Cria uma tag span para cada estrela
            if (i <= avaliacao.estrelas) {
                estrela.innerHTML = estrelaSVG; // Se o número da estrela for menor ou igual à avaliação, insere o SVG
            } else {
                // Caso contrário, você pode adicionar uma estrela vazia ou deixar em branco
                estrela.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M5.48279 0.313927L6.61067 2.70364C6.6891 2.86984 6.84075 2.98501 7.01618 3.01162L9.5383 3.39485C9.9801 3.46203 10.1564 4.02958 9.8368 4.35523L8.0118 6.21535C7.88497 6.34469 7.82698 6.53118 7.85702 6.71375L8.28777 9.34033C8.36328 9.80035 7.90145 10.1511 7.50637 9.93405L5.25063 8.69405C5.09376 8.60789 4.90624 8.60789 4.74937 8.69405L2.49363 9.93405C2.09855 10.1513 1.63672 9.80035 1.71223 9.34033L2.14298 6.71375C2.17302 6.53118 2.11503 6.34469 1.9882 6.21535L0.163203 4.35523C-0.156365 4.02936 0.019898 3.46182 0.461702 3.39485L2.98382 3.01162C3.15925 2.98501 3.3109 2.86984 3.38933 2.70364L4.51721 0.313927C4.71454 -0.104642 5.28525 -0.104642 5.48279 0.313927Z"/>
                </svg>`;
            }
            divEstrelas.appendChild(estrela); // Adiciona cada estrela na div de estrelas
        }

        // Adiciona todos os elementos à div da avaliação
        avaliacaoDiv.appendChild(nomeClienteDiv);
        avaliacaoDiv.appendChild(comentarioClienteDiv);
        avaliacaoDiv.appendChild(divEstrelas);

        // Adiciona a avaliação à lista de avaliações
        divAvaliacoes.appendChild(avaliacaoDiv);
    });
}

// Chama a função para exibir todas as avaliações inicialmente
exibirAvaliacoes('0');

// Atualiza as avaliações sempre que o filtro for alterado
filtroEstrelas.addEventListener('change', (event) => {
    exibirAvaliacoes(event.target.value);
});
