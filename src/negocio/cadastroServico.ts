import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public adicionarServicosPreCadastrados(servicosPreCadastrados: Array<Servico>): void {
        servicosPreCadastrados.forEach(servico => {
            this.servicos.push(servico);
        });
        console.log(`Serviços pré-cadastrados adicionados com sucesso!`);
    }
    
    public cadastrar(): void {
        console.log(`\nInício do cadastro do servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do servico no padrão "1.99": `);
        
        let servico = new Servico(nome, valor);
        this.servicos.push(servico)

        console.log(`\nCadastro concluído :)\n`);
        console.log(`ID do Serviço: ${servico.getId}`);
        console.log(`Nome: ${servico.getNomeServico}`);
        console.log(`Valor: ${servico.getValorServico}\n`);
    }
}