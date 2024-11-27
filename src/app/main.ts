import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import clientesPreCadastrados from "../negocio/clientes_pre_cadastrados";
import produtosPreCadastrados from "../negocio/produtos_pre_cadastrados";
import servicosPreCadastrados from "../negocio/servicos_pre_cadastrados";
import ListagemClientes from "../filtros/listagemClientes";
import ListagemProdutos from "../filtros/listagemProdutos";
import ListagemServicos from "../filtros/listagemServicos";
import ListagemProdMaisConsumido from "../filtros/listagemProdMaisConsumido";
import AssociarProdutoCliente from "../negocio/associarProdutoCliente";
import AssociarServicoCliente from "../negocio/associarServicoCliente";
import ListagemGenero from "../filtros/listagemGenero";
import ListagemMaisConsumidos from "../filtros/listagemMaisConsumidos";
import ListagemCliConsumoMenor from "../filtros/listagemCliConsumoMenor";
import ListagemCliMaisGastou from "../filtros/listagemCliMaisGastou";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new Empresa();

// Adicionar clientes, produtos e serviços pré-cadastrados
let cadastroCliente = new CadastroCliente(empresa.getClientes);
cadastroCliente.adicionarClientesPreCadastrados(clientesPreCadastrados);

let cadastroProduto = new CadastroProduto(empresa.getProdutos);
cadastroProduto.adicionarProdutosPreCadastrados(produtosPreCadastrados);

let cadastroServico = new CadastroServico(empresa.getServicos);
cadastroServico.adicionarServicosPreCadastrados(servicosPreCadastrados);

let execucao = true;
let entrada = new Entrada();

while (execucao) {
	console.log(`\nOpções:`);
	console.log(`1 - Clientes`);
	console.log(`2 - Produtos`);
	console.log(`3 - Serviços`);
	console.log(`4 - Filtros`);
	console.log(`0 - Sair`);

	let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

	switch (opcao) {
		case 1:
			let execClientes = true;
			while (execClientes) {
				console.log(`\nOpções de Clientes:`);
				console.log(`1 - Cadastrar cliente`);
				console.log(`2 - Listar todos os clientes`);
				console.log(`3 - Listar clientes por gênero`);
				console.log(`0 - Voltar ao menu principal`);

				let opcaoCliente = entrada.receberNumero(`Escolha uma opção de clientes: `);

				switch (opcaoCliente) {
					case 1:
						let cadastroCliente = new CadastroCliente(empresa.getClientes);
						cadastroCliente.cadastrar();
						break;
					case 2:
						let listagemClientes = new ListagemClientes(empresa.getClientes);
						listagemClientes.listar();
						break;
					case 3:
						const listagemGenero = new ListagemGenero(empresa.getClientes);
						listagemGenero.listar();
						break;
					case 0:
						execClientes = false;
						break;
					default:
						console.log(`Opção inválida!`);
				}
			}
			break;

		case 2:
			let execProdutos = true;
			while (execProdutos) {
				console.log(`\nOpções de Produtos:`);
				console.log(`1 - Cadastrar produto`);
				console.log(`2 - Cadastrar consumação de produto`);
				console.log(`3 - Listar todos os produtos`);
				console.log(`0 - Voltar ao menu principal`);

				let opcaoProduto = entrada.receberNumero(`Escolha uma opção de produtos: `);

				switch (opcaoProduto) {
					case 1:
						let cadastroProduto = new CadastroProduto(empresa.getProdutos);
						cadastroProduto.cadastrar();
						break;
					case 2:
						const associarProdutoCliente = new AssociarProdutoCliente(empresa);
						associarProdutoCliente.associar();
						break;
					case 3:
						let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
						listagemProdutos.listar();
						break;
					case 0:
						execProdutos = false;
						break;
					default:
						console.log(`Opção inválida!`);
				}
			}
			break;

		case 3:
			let execServicos = true;
			while (execServicos) {
				console.log(`\nOpções de Serviços:`);
				console.log(`1 - Cadastrar serviço`);
				console.log(`2 - Cadastrar consumação de serviço`);
				console.log(`3 - Listar todos os serviços`);
				console.log(`0 - Voltar ao menu principal`);

				let opcaoServico = entrada.receberNumero(`Escolha uma opção de serviços: `);

				switch (opcaoServico) {
					case 1:
						let cadastroServico = new CadastroServico(empresa.getServicos);
						cadastroServico.cadastrar();
						break;
					case 2:
						const associarServicoCliente = new AssociarServicoCliente(empresa);
						associarServicoCliente.associar();
						break;
					case 3:
						let listagemServicos = new ListagemServicos(empresa.getServicos);
						listagemServicos.listar();
						break;
					case 0:
						execServicos = false;
						break;
					default:
						console.log(`Opção inválida!`);
				}
			}
			break;

		case 4:
			let execFiltros = true;
			while (execFiltros) {
				console.log(`\nOpções de Filtros:`);
				console.log(`1 - Listar produtos e serviços mais consumidos`);
				console.log(`2 - Listar clientes que mais consumiram produtos e/ou serviços`);
				console.log(`3 - Listar clientes que menos consumiram produtos e/ou serviços`);
				console.log(`4 - Listar clientes que mais gastaram em produtos e serviços`);
				console.log(`0 - Voltar ao menu principal`);

				let opcaoFiltro = entrada.receberNumero(`Escolha uma opção de filtros: `);

				switch (opcaoFiltro) {
					case 1:
						const listagemMaisConsumidos = new ListagemMaisConsumidos(
							empresa.getClientes,
							empresa.getProdutos,
							empresa.getServicos
						);
						listagemMaisConsumidos.listar();
						break;
					case 2:
						let listagemProdMaisConsumido = new ListagemProdMaisConsumido(empresa.getClientes);
						listagemProdMaisConsumido.listar();
						break;
					case 3:
						const listagemCliConsumoMenor = new ListagemCliConsumoMenor(empresa.getClientes);
						listagemCliConsumoMenor.listar();
						break;
					case 4:
						const listagemCliMaisGastou = new ListagemCliMaisGastou(empresa.getClientes);
						listagemCliMaisGastou.listar();
						break;
					case 0:
						execFiltros = false;
						break;
					default:
						console.log(`Opção inválida!`);
				}
			}
			break;

		case 0:
			execucao = false;
			console.log(`\nAté logo!`);
			break;

		default:
			console.log(`Operação não entendida :(`);
	}
}
