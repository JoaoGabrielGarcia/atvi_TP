// listagemMaisConsumidos.ts
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

interface ItemConsumido {
    nome: string;
    tipo: string; // "Produto" ou "Serviço"
    quantidade: number;
}

export default class ListagemMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public listar(): void {
        const consumoTotal: ItemConsumido[] = [];

        // Conta o consumo de cada produto
        this.produtos.forEach(produto => {
            let quantidadeConsumida = this.clientes.reduce((total, cliente) => {
                return total + cliente.getProdutosConsumidos.filter(p => p.id === produto.id).length;
            }, 0);

            consumoTotal.push({ nome: produto.nome, tipo: "Produto", quantidade: quantidadeConsumida });
        });

        // Conta o consumo de cada serviço
        this.servicos.forEach(servico => {
            let quantidadeConsumida = this.clientes.reduce((total, cliente) => {
                return total + cliente.getServicosConsumidos.filter(s => s.id === servico.id).length;
            }, 0);

            consumoTotal.push({ nome: servico.nome, tipo: "Serviço", quantidade: quantidadeConsumida });
        });

        // Ordena por quantidade de consumo em ordem decrescente e seleciona os 10 mais consumidos
        const maisConsumidos = consumoTotal.sort((a, b) => b.quantidade - a.quantidade).slice(0, 10);

        // Exibe a lista dos 10 mais consumidos
        console.log(`\nTop 10 itens mais consumidos (produtos e serviços):\n`);
        maisConsumidos.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} (${item.tipo}) - Consumido ${item.quantidade} vez(es)`);
        });
        console.log(`\n`);
    }
}
