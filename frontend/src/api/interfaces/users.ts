export interface IUser {
    nome: string,
    dataNascimento: string,
    endereco: {
        cep: string,
        logradouro: string,
        numero: string,
        cidade: string,
        estado: string,
        bairro: string
    },
    email: string,
    senha: string,
    telefone: string
}