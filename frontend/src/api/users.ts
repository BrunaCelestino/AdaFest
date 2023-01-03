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