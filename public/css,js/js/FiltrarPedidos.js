document.addEventListener("DOMContentLoaded", function() {
    const inputMesa = document.querySelector('.input-mesa'); // Pegando o input da mesa
    const itensCarrinho = document.querySelectorAll('.item-carrinho'); // Pegando todos os itens do carrinho
    const subtotalElement = document.querySelector('.preçototall'); // Elemento do Subtotal
    const descontoElement = document.querySelector('.total span'); // Elemento do desconto
    const totalElement = document.querySelector('.totaltudo'); // Elemento do valor total

    // Função para filtrar os itens do carrinho
    function filtrarCarrinho() {
        const mesaValor = inputMesa.value.trim(); // Valor digitado no input (mesa)

        // Se o valor estiver vazio, exibe todos os itens com layout correto
        if (mesaValor === "") {
            itensCarrinho.forEach(item => {
                item.style.visibility = 'visible'; // Exibe todos os itens
                item.style.position = 'relative'; // Deixa os itens na posição padrão
            });
        } else {
            // Filtra os itens pela mesa
            itensCarrinho.forEach(item => {
                const mesaItem = item.querySelector('.h4-mesa-carrinho').textContent.trim(); // Valor da mesa no item
                if (mesaItem === `M${mesaValor}`) {
                    item.style.visibility = 'visible'; // Exibe o item
                    item.style.position = 'relative'; // Deixa os itens na posição padrão
                } else {
                    item.style.visibility = 'hidden'; // Oculta o item
                    item.style.position = 'absolute'; // Não afeta o layout dos itens visíveis
                }
            });
        }
        calcularTotais(); // Chama a função de cálculo de totais após o filtro
    }

    // Função para calcular o subtotal, desconto e total
    function calcularTotais() {
        let subtotal = 0;
        let desconto = 0;

        // Percorre os itens visíveis e calcula o valor
        itensCarrinho.forEach(item => {
            if (item.style.visibility !== 'hidden') {
                const preco = parseFloat(item.querySelector('.h4-preco-carrinho').textContent.replace('R$', '').trim());
                const quantidade = parseInt(item.querySelector('.h4-qtd-carrinho').textContent.replace('Quantidade: ', '').trim());

                if (!isNaN(preco) && !isNaN(quantidade)) {
                    subtotal += preco * quantidade;
                }
            }
        });


        // Atualiza o DOM com os valores calculados
        subtotalElement.textContent = `R$${subtotal.toFixed(2)}`;
        descontoElement.textContent = `-R$${desconto.toFixed(2)}`;
        totalElement.textContent = `R$${(subtotal - desconto).toFixed(2)}`;
    }

    // Adiciona um evento de input no campo de mesa
    inputMesa.addEventListener('input', filtrarCarrinho);
});
