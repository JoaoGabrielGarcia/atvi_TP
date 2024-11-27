// listagemProdMaisConsumido.ts
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemServMaisConsumido extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nTop 10 clientes que mais consumiram serviços:\n`);

        // Ordena os clientes pelo total de serviços consumidos em ordem decrescente
        const clientesOrdenados = this.clientes
            .map(cliente => ({
                cliente,
                totalServicos: cliente.getServicosConsumidos.length
            }))
            .sort((a, b) => b.totalServicos - a.totalServicos)
            .slice(0, 10); // Seleciona os 10 primeiros

        clientesOrdenados.forEach(({ cliente, totalServicos }, index) => {
            console.log(`Posição #${index + 1}`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome Social: ${cliente.nomeSocial}`);
            console.log(`Quantidade de Serviços Consumidos: ${totalServicos}`);
            console.log(`--------------------------------------`);
        });

        console.log(`\n`);
    }
}
