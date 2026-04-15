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
