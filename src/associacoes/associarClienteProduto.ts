import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";

export class AssociarClienteProduto {
    private associacoes: Map<Cliente, Produto[]>;

    constructor() {
        this.associacoes = new Map();
    }

    public adicionarProduto(cliente: Cliente, produto: Produto): void {
        if (!this.associacoes.has(cliente)) {
            this.associacoes.set(cliente, []);
        }
        this.associacoes.get(cliente)!.push(produto);
    }

    public getProdutosConsumidos(cliente: Cliente): Produto[] {
        return this.associacoes.get(cliente) || [];
    }
}

export default new AssociarClienteProduto();
