import { axiosConnection } from "./axios-instance";
import { IUser } from "./interfaces/users";

export const postCreateUser = async (params: IUser) => {
    try {
      const data = await axiosConnection.post('/usuarios', params);
     
      
      return {
        status: data.status,
        message: 'Sucesso em registrar usuário',
        data: data.data as IUser,
      };
    } catch (error: any) {

      return {
        message: 'Falha registrar usuário',
        status: 500,
      };;
    }
  };

  export const getUserByEmail = async (email: string) => {
    try {
      const data = await axiosConnection.get(`/usuarios/usuario?email=${email}`);
      return {
        status: data.status,
        message: 'Sucesso em obter usuário',
        data: data.data,
      };
    } catch (error: any) {
      return {
        message: 'Falha em obter usuário',
        status: 500,
      };
    }
  };

  export const getUserByID = async (id: string) => {
    try {
      const data = await axiosConnection.get(`/usuarios/${id}`);
      return {
        status: data.status,
        message: 'Sucesso em obter usuário',
        data: data.data,
      };
    } catch (error: any) {
      return {
        message: 'Falha em obter usuário',
        status: 500,
      };
    }
  };