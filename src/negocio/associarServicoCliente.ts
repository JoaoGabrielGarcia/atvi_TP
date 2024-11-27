// associarProdutoCliente.ts
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import associarClienteProduto from "../associacoes/associarClienteProduto";
import associarClienteServico from "../associacoes/associarClienteServico";

export default class AssociarServicoCliente {
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
        const idServico = this.entrada.receberNumero("Informe o ID do serviço consumido: ");
        const servicoSelecionado = this.empresa.getServicos.find(servico => servico.id === idServico);

        if (!servicoSelecionado) {
            console.log("Serviço não encontrado.");
            return;
        }

        // Realiza a associação do produto ao cliente
        associarClienteServico.adicionarServico(clienteSelecionado, servicoSelecionado);
        console.log(`Consumação do serviço ${servicoSelecionado.getNomeServico} associada ao cliente ${clienteSelecionado.nome}!`);
    }
}
