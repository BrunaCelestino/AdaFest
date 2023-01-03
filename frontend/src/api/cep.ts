import { useQuery } from "@tanstack/react-query";
import { axiosCEPConnection } from "./axios-instance";
import { IAddress } from "./interfaces/cep";

export const getAddress = async (cep: string) => {
    try {
      const data = await axiosCEPConnection.get(`${cep}/json/`);
      return {
        status: data.status,
        message: 'Sucesso em obter endereço',
        data: data.data as IAddress,
      };
    } catch (error: any) {
      return {
      
        message: 'Falha em obter endereço',
        status: 500,
      };
    }
  };

//   export const useAddress = (cep: string) => {
//     const {
//       data: address,
//       isLoading: isLoadingAddress,
//       isError,
//     } = useQuery(['address'], () => getAddress(cep));
//     return { address, isLoadingAddress, isError };
//   };