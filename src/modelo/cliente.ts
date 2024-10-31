import CPF from "./cpf";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

export default class Cliente {
    public nome: string;
    public nomeSocial: string;
    private genero: string;
    private cpf: CPF;
    private rgs: RG;
    private dataCadastro: Date;
    private telefones: Telefone;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;

    constructor(nome: string, nomeSocial: string, genero: string, cpf: CPF, rgs: RG, dataCadastro: Date, telefones: Telefone) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero === "M" ? "Masculino" : genero === "F" ? "Feminino" : "Outro"; 
        this.cpf = cpf;
        this.rgs = rgs; 
        this.dataCadastro = dataCadastro;
        this.telefones = telefones; 
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }

    public get getGenero(): string {
        return this.genero;
    }
    public get getCpf(): CPF {
        return this.cpf;
    }

    public get getRgs(): RG {
        return this.rgs;
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro;
    }

    public get getTelefones(): Telefone {
        return this.telefones
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos;
    }
}
