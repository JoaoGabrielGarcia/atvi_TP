import Cliente from '../modelo/cliente';
import CPF from '../modelo/cpf';
import RG from '../modelo/rg';
import Telefone from '../modelo/telefone';

const clientesPreCadastrados: Cliente[] = [
  new Cliente('Ana Silva', 'Ana S.', 'F', new CPF('123.456.789-01', new Date(1985, 4, 15)), new RG('89759465', new Date(1985, 4, 15)), new Date(2024, 4, 20), new Telefone('12', '978465123')),
  new Cliente('Bruno Souza', 'Bruno S.', 'M', new CPF('123.456.789-02', new Date(1990, 9, 20)), new RG('89759466', new Date(1990, 9, 20)), new Date(2024, 4, 21), new Telefone('13', '978465124')),
  new Cliente('Carla Oliveira', 'Carla O.', 'F', new CPF('123.456.789-03', new Date(1993, 1, 25)), new RG('89759467', new Date(1993, 1, 25)), new Date(2024, 4, 22), new Telefone('14', '978465125')),
  new Cliente('Diego Santos', 'Diego S.', 'M', new CPF('123.456.789-04', new Date(1988, 6, 12)), new RG('89759468', new Date(1988, 6, 12)), new Date(2024, 4, 23), new Telefone('15', '978465126')),
  new Cliente('Eduarda Lima', 'Edu Lima', 'F', new CPF('123.456.789-05', new Date(1995, 0, 28)), new RG('89759469', new Date(1995, 0, 28)), new Date(2024, 4, 24), new Telefone('16', '978465127')),
  new Cliente('Fernando Gomes', 'Fern Gomes', 'M', new CPF('123.456.789-06', new Date(1987, 8, 9)), new RG('89759470', new Date(1987, 8, 9)), new Date(2024, 4, 25), new Telefone('17', '978465128')),
  new Cliente('Gabriela Costa', 'Gabi Costa', 'F', new CPF('123.456.789-07', new Date(1994, 3, 17)), new RG('89759471', new Date(1994, 3, 17)), new Date(2024, 4, 26), new Telefone('18', '978465129')),
  new Cliente('Henrique Alves', 'Henri A.', 'M', new CPF('123.456.789-08', new Date(1991, 5, 21)), new RG('89759472', new Date(1991, 5, 21)), new Date(2024, 4, 27), new Telefone('19', '978465130')),
  new Cliente('Isabela Nunes', 'Isa N.', 'F', new CPF('123.456.789-09', new Date(1992, 2, 30)), new RG('89759473', new Date(1992, 2, 30)), new Date(2024, 4, 28), new Telefone('20', '978465131')),
  new Cliente('João Pereira', 'João P.', 'M', new CPF('123.456.789-10', new Date(1986, 7, 5)), new RG('89759474', new Date(1986, 7, 5)), new Date(2024, 4, 29), new Telefone('21', '978465132')),
  new Cliente('Karina Mendes', 'Kari M.', 'F', new CPF('123.456.789-11', new Date(1989, 10, 11)), new RG('89759475', new Date(1989, 10, 11)), new Date(2024, 4, 30), new Telefone('22', '978465133')),
  new Cliente('Lucas Ferreira', 'Lucas F.', 'M', new CPF('123.456.789-12', new Date(1990, 11, 2)), new RG('89759476', new Date(1990, 11, 2)), new Date(2024, 4, 31), new Telefone('23', '978465134')),
  new Cliente('Mariana Ribeiro', 'Mari R.', 'F', new CPF('123.456.789-13', new Date(1991, 4, 18)), new RG('89759477', new Date(1991, 4, 18)), new Date(2024, 5, 1), new Telefone('24', '978465135')),
  new Cliente('Nathalia Duarte', 'Nathi D.', 'F', new CPF('123.456.789-14', new Date(1988, 9, 8)), new RG('89759478', new Date(1988, 9, 8)), new Date(2024, 5, 2), new Telefone('25', '978465136')),
  new Cliente('Otávio Moreira', 'Távio M.', 'M', new CPF('123.456.789-15', new Date(1987, 6, 7)), new RG('89759479', new Date(1987, 6, 7)), new Date(2024, 5, 3), new Telefone('26', '978465137')),
  new Cliente('Paula Barros', 'Paula B.', 'F', new CPF('123.456.789-16', new Date(1995, 8, 22)), new RG('89759480', new Date(1995, 8, 22)), new Date(2024, 5, 4), new Telefone('27', '978465138')),
  new Cliente('Rafael Teixeira', 'Rafa T.', 'M', new CPF('123.456.789-17', new Date(1993, 11, 3)), new RG('89759481', new Date(1993, 11, 3)), new Date(2024, 5, 5), new Telefone('28', '978465139')),
  new Cliente('Sara Carvalho', 'Sara C.', 'F', new CPF('123.456.789-18', new Date(1989, 3, 14)), new RG('89759482', new Date(1989, 3, 14)), new Date(2024, 5, 6), new Telefone('29', '978465140')),
  new Cliente('Thiago Lopes', 'Thi Lopes', 'M', new CPF('123.456.789-19', new Date(1994, 1, 27)), new RG('89759483', new Date(1994, 1, 27)), new Date(2024, 5, 7), new Telefone('30', '978465141')),
  new Cliente('Ursula Martins', 'Ursa M.', 'F', new CPF('123.456.789-20', new Date(1991, 10, 15)), new RG('89759484', new Date(1991, 10, 15)), new Date(2024, 5, 8), new Telefone('31', '978465142')),
  new Cliente('Victor Silva', 'Victor S.', 'M', new CPF('123.456.789-21', new Date(1985, 9, 23)), new RG('89759485', new Date(1985, 9, 23)), new Date(2024, 5, 9), new Telefone('32', '978465143')),
  new Cliente('Wesley Farias', 'Wes F.', 'M', new CPF('123.456.789-22', new Date(1990, 7, 19)), new RG('89759486', new Date(1990, 7, 19)), new Date(2024, 5, 10), new Telefone('33', '978465144')),
  new Cliente('Ximena Borges', 'Xime B.', 'F', new CPF('123.456.789-23', new Date(1992, 0, 6)), new RG('89759487', new Date(1992, 0, 6)), new Date(2024, 5, 11), new Telefone('34', '978465145')),
  new Cliente('Yara Araújo', 'Yara A.', 'F', new CPF('123.456.789-24', new Date(1988, 1, 14)), new RG('89759488', new Date(1988, 1, 14)), new Date(2024, 5, 12), new Telefone('35', '978465146')),
  new Cliente('Zeca Cardoso', 'Zeca C.', 'M', new CPF('123.456.789-25', new Date(1993, 5, 31)), new RG('89759489', new Date(1993, 5, 31)), new Date(2024, 5, 13), new Telefone('36', '978465147')),
  new Cliente('Alan Fonseca', 'Alan F.', 'M', new CPF('123.456.789-26', new Date(1991, 3, 10)), new RG('89759490', new Date(1991, 3, 10)), new Date(2024, 5, 14), new Telefone('37', '978465148')),
  new Cliente('Beatriz Fernandes', 'Bia F.', 'F', new CPF('123.456.789-27', new Date(1987, 7, 17)), new RG('89759491', new Date(1987, 7, 17)), new Date(2024, 5, 15), new Telefone('38', '978465149')),
  new Cliente('Célio Rocha', 'Célio R.', 'M', new CPF('123.456.789-28', new Date(1989, 10, 4)), new RG('89759492', new Date(1989, 10, 4)), new Date(2024, 5, 16), new Telefone('39', '978465150')),
  new Cliente('Daniela Machado', 'Dani M.', 'F', new CPF('123.456.789-29', new Date(1992, 8, 24)), new RG('89759493', new Date(1992, 8, 24)), new Date(2024, 5, 17), new Telefone('40', '978465151')),
  new Cliente('Eduardo Marques', 'Edu M.', 'M', new CPF('123.456.789-30', new Date(1986, 2, 13)), new RG('89759494', new Date(1986, 2, 13)), new Date(2024, 5, 18), new Telefone('41', '978465152')),
];

export default clientesPreCadastrados;
