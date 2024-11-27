import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";

export class AssociarClienteServico {
    private associacoes: Map<Cliente, Servico[]>;

    constructor() {
        this.associacoes = new Map();
    }

    public adicionarServico(cliente: Cliente, servico: Servico): void {
        if (!this.associacoes.has(cliente)) {
            this.associacoes.set(cliente, []);
        }
        this.associacoes.get(cliente)!.push(servico);
    }

    public getServicosConsumidos(cliente: Cliente): Servico[] {
        return this.associacoes.get(cliente) || [];
    }
}

export default new AssociarClienteServico();
