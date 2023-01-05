import { useQuery } from "@tanstack/react-query";
import { axiosConnection } from "./axios-instance";

export const getTickets = async () => {
    try {
      const data = await axiosConnection.get(`/ingressos`);
      return {
        status: data.status,
        message: 'Sucesso em obter ingressos',
        data: data.data,
      };
    } catch (error: any) {
      return {
        data: [],
        message: 'Falha em obter ingressos',
        status: error?.response.status,
      };
    }
  };
  
  export const useTickets = () => {
    const {
      data: tickets,
      isLoading: isLoadingTickets,
      isError,
    } = useQuery(['tickets'], () => getTickets());
    return { tickets, isLoadingTickets };
  };