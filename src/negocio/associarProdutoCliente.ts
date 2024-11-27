// associarProdutoCliente.ts
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import associarClienteProduto from "../associacoes/associarClienteProduto";

export default class AssociarProdutoCliente {
    private entrada: Entrada;
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.entrada = new Entrada();
        this.empresa = empresa;
    }

    public associar(): void {
        // Solicita o RG do cliente
        const rgCliente = this.entrada.receberTexto("Informe o RG do cliente: ");
        const clienteSelecionado = this.empresa.getClientes.find(cliente => cliente.getRgs.getValor === rgCliente);

        if (!clienteSelecionado) {
            console.log("Cliente não encontrado.");
            return;
        }

        // Solicita o ID do produto
        const idProduto = this.entrada.receberNumero("Informe o ID do produto consumido: ");
        const produtoSelecionado = this.empresa.getProdutos.find(produto => produto.id === idProduto);

        if (!produtoSelecionado) {
            console.log("Produto não encontrado.");
            return;
        }

        // Realiza a associação do produto ao cliente
        associarClienteProduto.adicionarProduto(clienteSelecionado, produtoSelecionado);
        console.log(`Consumação do produto ${produtoSelecionado.getNomeProduto} associada ao cliente ${clienteSelecionado.nome}!`);
    }
}
