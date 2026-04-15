let produtosCadastrados = []

const calcularImposto = (tipoProduto) => {
    const tipo = Number(tipoProduto)
    switch (tipoProduto) {
        case 1:
            return 0
        case 2:
            return 0.08
        case 3:
            return 0.1
        case 4:
            return 0.12
        case 5:
            return 0.17
        default:
            return 0
    }
}

const removerProduto = (idProduto) => {
    produtosCadastrados = produtosCadastrados.filter(
        (produto) => produto.id !== idProduto,
    )
    renderizarProdutos()
}

const renderizarProdutos = () => {
    const containerVitrine = document.getElementById('lista-produtos')
    containerVitrine.innerHTML = ''

    produtosCadastrados.forEach((produto) => {
        const { id, nome, caracteristicas, valorUnitario, unidade, tipo } =
            produto

        const cardProduto = document.createElement('div')
        cardProduto.classList.add('card-produto')

        cardProduto.innerHTML = `
            <h3>${nome}</h3>
            <p><small>${caracteristicas}</small></p>
            <p>Preço Base: R$ ${valorUnitario.toFixed(2)} / ${unidade}</p>
            
            <label>
                Quantidade: 
                <input type="number" class="input-qtd" value="1" min="1">
            </label>
            
            <div class="resultados">
                <p class="txt-total"></p>
                <p class="txt-imposto"></p>
                <p class="txt-final"></p>
            </div>
            
            <button class="btn-remover">Remover Produto</button>
            <hr>
        `

        const inputQuantidade = cardProduto.querySelector('.input-qtd')
        const txtTotal = cardProduto.querySelector('.txt-total')
        const txtImposto = cardProduto.querySelector('.txt-imposto')
        const txtFinal = cardProduto.querySelector('.txt-final')
        const btnRemover = cardProduto.querySelector('.btn-remover')

        const atualizarValoresNaTela = () => {
            const quantidadeAtual = Number(inputQuantidade.value)
            const total = quantidadeAtual * valorUnitario
            const valorDoImposto = total * calcularImposto(tipo)
            const valorFinal = total + valorDoImposto

            txtTotal.textContent = `Total Bruto: R$ ${total.toFixed(2)}`
            txtImposto.textContent = `Imposto (Tipo ${tipo}): R$ ${valorDoImposto.toFixed(2)}`
            txtFinal.textContent = `Valor Final: R$ ${valorFinal.toFixed(2)}`
        }

        atualizarValoresNaTela()
        inputQuantidade.addEventListener('input', atualizarValoresNaTela)
        btnRemover.addEventListener('click', () => removerProduto(id))

        containerVitrine.appendChild(cardProduto)
    })
}
