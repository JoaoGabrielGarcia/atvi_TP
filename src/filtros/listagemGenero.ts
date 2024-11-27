// listagemGenero.ts
import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Listagem from "./listagem";

export default class ListagemGenero extends Listagem {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log(`\nOpções de gênero:`);
        console.log(`1 - Masculino`);
        console.log(`2 - Feminino`);
        console.log(`3 - Outro`);

        const opcaoGenero = this.entrada.receberNumero("Escolha uma opção de gênero: ");
        let generoSelecionado: string;

        switch (opcaoGenero) {
            case 1:
                generoSelecionado = "Masculino";
                break;
            case 2:
                generoSelecionado = "Feminino";
                break;
            case 3:
                generoSelecionado = "Outro";
                break;
            default:
                console.log("Opção inválida!");
                return;
        }

        const clientesFiltrados = this.clientes.filter(cliente => cliente.getGenero === generoSelecionado);

        if (clientesFiltrados.length === 0) {
            console.log(`\nNenhum cliente encontrado para o gênero selecionado.`);
        } else {
            console.log(`\nLista de clientes do gênero ${generoSelecionado}:\n`);
            clientesFiltrados.forEach(cliente => {
                console.log(`Nome: ${cliente.nome}`);
                console.log(`Nome social: ${cliente.nomeSocial}`);
                console.log(`CPF: ${cliente.getCpf.getValor}`);
                console.log(`--------------------------------------`);
            });
        }
    }
}
