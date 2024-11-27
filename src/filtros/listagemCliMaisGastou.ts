// listagemCliMaisGastou.ts
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

interface ClienteGasto {
    nome: string;
    totalGasto: number;
}

export default class ListagemCliMaisGastou extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const gastosClientes: ClienteGasto[] = this.clientes.map(cliente => {
            const totalGastoProdutos = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.valor, 0);
            const totalGastoServicos = cliente.getServicosConsumidos.reduce((total, servico) => total + servico.valor, 0);
            const totalGasto = totalGastoProdutos + totalGastoServicos;

            return {
                nome: cliente.nome,
                totalGasto: totalGasto
            };
        });

        // Ordena os clientes pelo total gasto em ordem decrescente e seleciona os 5 maiores consumidores
        const maioresGastos = gastosClientes.sort((a, b) => b.totalGasto - a.totalGasto).slice(0, 5);

        // Exibe a lista dos 5 clientes que mais gastaram
        console.log(`\nTop 5 clientes que mais gastaram em produtos e serviços:\n`);
        maioresGastos.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nome} - Gasto total: R$${cliente.totalGasto.toFixed(2)}`);
        });
        console.log(`\n`);
    }
}
