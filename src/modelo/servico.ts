export default class Servico {
    private static ultimoId: number = 0;
    public id: number;
    public nome: string
    public valor: number
    constructor(nome: string, valor: number) {
        Servico.ultimoId += 1;
        this.id = Servico.ultimoId;
        this.nome = nome
        this.valor = valor
    }

    public get getId(): number {
        return this.id;
    }

    public get getNomeServico(): string {
        return this.nome
    }
    
    public get getValorServico(): number {
        return this.valor
    }
}