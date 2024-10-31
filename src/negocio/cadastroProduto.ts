import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public adicionarProdutosPreCadastrados(produtosPreCadastrados: Produto[]): void {
        produtosPreCadastrados.forEach(produto => {
            this.produtos.push(produto);
        });
        console.log(`Produtos pré-cadastrados adicionados com sucesso!`);
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto no padrão "1.99": `);

        let produto = new Produto(valor, nome);
        this.produtos.push(produto);

        console.log(`\nCadastro concluído :)`);
        console.log(`ID do Produto: ${produto.getId}`);
        console.log(`Nome: ${produto.getNomeProduto}`);
        console.log(`Valor: ${produto.getValorProduto}\n`);
    }
}
