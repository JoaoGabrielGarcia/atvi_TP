import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente (M para Masculino, F para Feminino): `);  // Solicitação simplificada
        let valor = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let ddd = this.entrada.receberTexto(`Por favor informe o DDD: `);
        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `);

        let partesData = data.split('/');
        let ano = new Number(partesData[2].valueOf()).valueOf();
        let mes = new Number(partesData[1].valueOf()).valueOf();
        let dia = new Number(partesData[0].valueOf()).valueOf();
        let dataEmissao = new Date(ano, mes - 1, dia);

        let partesDataRG = dataRG.split('/');
        let anoRG = new Number(partesDataRG[2].valueOf()).valueOf();
        let mesRG = new Number(partesDataRG[1].valueOf()).valueOf();
        let diaRG = new Number(partesDataRG[0].valueOf()).valueOf();
        let dataEmissaoRG = new Date(anoRG, mesRG - 1, diaRG);

        // Criação de objetos CPF, RG e Telefone
        let cpf = new CPF(valor, dataEmissao);
        let rgs = new RG(valorRG, dataEmissaoRG);
        let telefones = new Telefone(ddd, numero);
        
        let dataCadastro = new Date();
        
        // Criação de um novo cliente com o gênero incluído
        let cliente = new Cliente(nome, nomeSocial, genero, cpf, rgs, dataCadastro, telefones);
        this.clientes.push(cliente);
        
        console.log(`\nCadastro concluído :)\n`);
    }

    public adicionarClientesPreCadastrados(clientesPreCadastrados: Array<Cliente>): void {
        clientesPreCadastrados.forEach(cliente => {
            this.clientes.push(cliente);
        });
        console.log(`Clientes pré-cadastrados adicionados com sucesso!`);
    }
}
