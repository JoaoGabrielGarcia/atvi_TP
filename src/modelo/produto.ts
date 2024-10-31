export default class Produto {
    private static ultimoId: number = 0;
    public id: number;
    public nome: string;
    public valor: number;

    constructor(valor: number, nome: string) {
        Produto.ultimoId += 1;
        this.id = Produto.ultimoId;
        this.nome = nome;
        this.valor = valor;
    }

    public get getId(): number {
        return this.id;
    }

    public get getNomeProduto(): string {
        return this.nome;
    }

    public get getValorProduto(): number {
        return this.valor;
    }
}
