// listagemCliConsumoMenor.ts
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

interface ClienteConsumo {
    nome: string;
    quantidadeConsumida: number;
}

export default class ListagemCliConsumoMenor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const consumoClientes: ClienteConsumo[] = this.clientes.map(cliente => {
            const produtosConsumidos = cliente.getProdutosConsumidos.length;
            const servicosConsumidos = cliente.getServicosConsumidos.length;
            const quantidadeConsumida = produtosConsumidos + servicosConsumidos;

            return {
                nome: cliente.nome,
                quantidadeConsumida: quantidadeConsumida
            };
        });

        // Ordena os clientes por consumo crescente e seleciona os 10 com menor consumo
        const menoresConsumidores = consumoClientes.sort((a, b) => a.quantidadeConsumida - b.quantidadeConsumida).slice(0, 10);

        // Exibe a lista dos 10 clientes que menos consumiram
        console.log(`\nTop 10 clientes que menos consumiram produtos e/ou serviços:\n`);
        menoresConsumidores.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nome} - Consumiu ${cliente.quantidadeConsumida} item(s)`);
        });
        console.log(`\n`);
    }
}
