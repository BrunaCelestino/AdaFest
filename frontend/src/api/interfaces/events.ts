export interface IEvents {
	id: number,
	cnpj: string,
    nome: string,
	descricao: string,
	data: string,
	local: string,
	preco: number,
	capacidade: number,
	inicioVendas?: string,
	fimVendas?: string,
	tag: string,
	banner: string,
	empresa: IEmpresa
}

export interface IEmpresa {
	id?: string,
    nome: string,
	cnpj: string,
	endereco: IEndereco,
	telefone: string,
	email: string,
	tag: string,
	logo: string,
	senha: string
}

export interface IEndereco {
	id?: number,
	cep: string,
	logradouro: string,
	numero: string,
	bairro: string,
	cidade: string,
	estado: string
}