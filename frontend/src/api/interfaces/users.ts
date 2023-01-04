export interface IUser {
    id?: string,
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
    telefone: string,
    foto: string,
}