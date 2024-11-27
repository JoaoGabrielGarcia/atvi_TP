// listagemProdMaisConsumido.ts
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProdMaisConsumido extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nTop 10 clientes que mais consumiram produtos:\n`);

        // Ordena os clientes pelo total de produtos consumidos em ordem decrescente
        const clientesOrdenados = this.clientes
            .map(cliente => ({
                cliente,
                totalProdutos: cliente.getProdutosConsumidos.length
            }))
            .sort((a, b) => b.totalProdutos - a.totalProdutos)
            .slice(0, 10); // Seleciona os 10 primeiros

        clientesOrdenados.forEach(({ cliente, totalProdutos }, index) => {
            console.log(`Posição #${index + 1}`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome Social: ${cliente.nomeSocial}`);
            console.log(`Quantidade de Produtos Consumidos: ${totalProdutos}`);
            console.log(`--------------------------------------`);
        });

        console.log(`\n`);
    }
}
